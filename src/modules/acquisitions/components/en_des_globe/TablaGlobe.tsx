import React, { FC, useEffect, useState } from 'react';
import { Table, Popconfirm, Form, Typography } from 'antd';
import { EditableCell } from '../../../../utils/ui/editableCell';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';
import { useParams, useHistory } from 'react-router-dom';
import { swal_warning } from '../../../../utils';

interface IParams {
    id: string;
}


interface TableGlobeProps {
    action: any;
}

export const TablaGlobe: FC<TableGlobeProps> = ({ action }) => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const realEstates: any = useSelector((states: any) => states.acquisitions.realEstates.value);
    const [data, setData] = useState(null)
    const [numberRealEstates, setNumberRealEstates] = useState(1)
    const [disabled, setDisabled] = useState(true);
    const [valueArea, setValueArea] = useState(0);
    const [editingKey, setEditingKey] = useState('');
    const [selectRealEsates, setSelectRealEsates] = useState(0)
    const [selectRowKeys, setSelectRowKeys] = useState([])
    const [areaUse, setareaUse] = useState(0);
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(actions.getProjects());
        dispatch(actions.getRealEstatesByProject(Number(id)));
    }, []);

    useEffect(() => {
        const dataTable = [];
        realEstates.map(realEstate =>
            dataTable.push({
                key: realEstate.id,
                name: realEstate.name,
                total_area: realEstate.total_area,
                use_area: 0,
            })
        )
        setData(dataTable)
    }, [realEstates])

    useEffect(() => {
        const areaCalculada = calculateTotalSArea();
        setValueArea(areaCalculada);
        if (areaCalculada > 0) {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    }, [data])


    // Input numero bienes Inmuebles a dividir
    const handleInputChange = (e) => {
        setNumberRealEstates([e.target.name] = e.target.value);
    }

    const calculateTotalSArea = () => {
        if (Array.isArray(data)) {
            let totalAreaUse = 0;
            data.map(row => totalAreaUse = totalAreaUse + row.use_area)
            return totalAreaUse;
        }
    }

    const isEditing = (record: any) => record.key === editingKey;

    const edit = (record: any & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as any;

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                if (newData[index].use_area > newData[index].total_area) {
                    console.log('el area a utilizar no valida')
                    setEditingKey('');
                    return;
                } else if (newData[index].use_area >= 0) {
                    setData(newData);
                    setEditingKey('');
                }
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }


    };

    // filas seleccionadas de la tabla
    const rowSelection = {
        onChange: (selectedRowKeys: [], selectedRows: any[]) => {
            setSelectRealEsates(selectedRows.length)
            setSelectRowKeys(selectedRowKeys);
        }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
        },
        {
            title: 'Bien Inmueble',
            dataIndex: 'name',
        },
        {
            title: 'Area Total',
            dataIndex: 'total_area',
        },
        {
            title: 'Area a Utilizar',
            dataIndex: 'use_area',
            editable: true,
            width: '20%',
        },
        {
            title: 'Editar',
            dataIndex: 'operation',
            render: (_: any, record: any) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a href="#2" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Guardar
                        </a>
                        <Popconfirm title="Seguro que desea cancelar?" onConfirm={cancel}>
                            <a href="#3">Cancelar</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={!selectRowKeys.includes(record.key)} onClick={() => edit(record)}>
                        Editar
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: any) => ({
                record,
                inputType: col.dataIndex === 'use_area' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <div className="row">
                Seleccione los bienes Inmuebles que desea {action}
            </div>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                rowSelection={{
                    ...rowSelection,
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={false}
            />
            <div className="col-6 my-3">
                <label htmlFor="number_real_estates" className="form-label">
                    Número a dividir Bien Inmueble
                </label>
                <input
                    type="number"
                    name="numberRealEstates"
                    className="form-control"
                    placeholder="numero a dividir bien inmueble"
                    autoComplete="off"
                    value={numberRealEstates}
                    onChange={handleInputChange}
                    min={0}
                    disabled={disabled}
                ></input>
            </div>
            <button className="btn btn-primary" onClick={(e) => {
                const dataSelect = data.filter(a => selectRowKeys.includes(a.key));
                let areaSelect = dataSelect.every(b => b.use_area > 0)
                switch (action) {
                    case 'englobar':
                        if (numberRealEstates < selectRealEsates) {
                            if(areaSelect) {
                                history.push({ pathname: `/englobar/realEstates/`, state: { numberRealEstates, valueArea, data, action, realEstates } })
                            }else {
                                swal_warning.fire(
                                    {
                                        title: "Valor de Área a utilizar Obligatorio", text: `El valor del área a ${action} no puede ser cero`
                                    }
                                )
                            }
                            // if (valueArea === 0) {
                            //     e.preventDefault();
                            //     console.log("debe elegir valores ")
                            //     swal_warning.fire(
                            //         {
                            //             title: "Valor de Área a utilizar Obligatorio", text: `El valor del área a ${action} no puede ser cero`
                            //         }
                            //     )
                            // } else {
                            //     history.push({ pathname: `/englobar/realEstates/`, state: { numberRealEstates, valueArea, data, action, realEstates } })
                            // }
                        } else {
                            swal_warning.fire(
                                {
                                    title: "No se puede englobar", text: ``
                                }
                            )
                        }

                        break;

                    case 'desenglobar':
                        if (numberRealEstates > selectRealEsates) {
                            if (valueArea === 0) {
                                e.preventDefault();
                                console.log("debe elegir valores ")
                                swal_warning.fire(
                                    {
                                        title: "Valor de Área a utilizar Obligatorio", text: `El valor del área a ${action} no puede ser cero`
                                    }
                                )
                            } else {
                                history.push({ pathname: `/englobar/realEstates/`, state: { numberRealEstates, valueArea, data, action, realEstates } })
                            }
                        } else {
                            console.log('no valido');
                        }
                        break;

                    default:
                        break;
                }
            }}>
                enviar
            </button>
        </Form>
    );
};


// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../redux';
// import { useEffect, useState } from 'react';
// import { Table} from 'antd';
// //import EditableRow from '../../../../utils/ui/editableContext';
// import EditableCell from '../../../../utils/ui/editableCell';
// import EditableRow from '../../../../utils/ui/editableContext';

// export const TableAreas = () => {
//     const dispatch = useDispatch();
//     const realEstates: any = useSelector((states: any) => states.acquisitions.realEstates.value);
//     const [data, setData] = useState(null)
//     const [editar, setEditar] = useState(true);

//     useEffect(() => {
//         dispatch(actions.getProjects());
//         dispatch(actions.getRealEstatesByProject(1));
//     }, []);

//     useEffect(() => {
//         const dataTable = [];
//         realEstates.map(realEstate =>
//             dataTable.push({
//                 key: realEstate.id,
//                 name: realEstate.name,
//                 total_area: realEstate.total_area,
//                 use_area: 0,
//                 real_estate_numbers: 0,

//             })
//         )
//         setData(dataTable)
//     }, [realEstates])

//     const columnas = [
//         {
//             title: 'ID',
//             dataIndex: 'key',
//         },
//         {
//             title: 'Bien Inmueble',
//             dataIndex: 'name',
//         },
//         {
//             title: 'Area Total',
//             dataIndex: 'total_area',
//         },
//         {
//             title: 'Area a Utilizar',
//             dataIndex: 'use_area',
//             editable: true,
//             width: '20%',
//         },
//         {
//             title: 'dividir Bien Inmueble',
//             dataIndex: 'real_estate_numbers',
//             editable: true,
//             disabled: editar,
//             width: '20%',
//         },

//     ];

//     const handleSave = (row: any) => {
//         const newData = [...data];
//         const index = newData.findIndex(item => row.key === item.key);
//         const item = newData[index];
//         newData.splice(index, 1, {
//             ...item,
//             ...row,
//         });
//         if (Number(newData[index].use_area) > newData[index].total_area) {
//             return;
//         } else if(Number(newData[index].use_area) > 0) {
//             setEditar(false);
//             setData(newData);
//         }

//     };





//     // rowSelection object indicates the need for row selection
//     const rowSelection = {
//         onChange: (selectedRowKeys: [], selectedRows: []) => {
//             console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//             if (selectedRows.length > 0) {
//                 selectedRows.map(fila => {
//                     console.log(fila, 'cambiar para ser editable esa fila')
//                     //habilitarCampo(fila);
//                 })

//             } else {
//                 //console.log('arreglo vacio')
//                 //setEditar(false)
//             }
//         },

//     };



//     const components = {
//         body: {
//             row: EditableRow,
//             cell: EditableCell,
//         },
//     };

//     const columns = columnas.map(col => {
//         if (!col.editable) {
//             return col;
//         }
//         return {
//             ...col,
//             onCell: (record: any) => {
//                 //console.log(col)
//                 return ({
//                     record,
//                     editable: col.editable,
//                     disabled: col.disabled,
//                     dataIndex: col.dataIndex,
//                     title: col.title,
//                     handleSave,
//                 })
//             },
//         };
//     });

//     return (

//         <div>
//             <Table
//                 rowSelection={{
//                     ...rowSelection,
//                 }}
//                 columns={columns}
//                 dataSource={data}
//                 rowClassName={() => 'editable-row'}
//                 components={components}
//                 pagination={false}
//             />
//             <button className="btn btn-primary my-3" onClick={() => console.log(data)}>
//                 enviar
//             </button>
//         </div>
//     );
// }
