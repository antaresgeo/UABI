import { Card, Table as UiTable } from "../../../../utils/ui";
import { useLocation } from 'react-router-dom';
import { RealEstateFormModal } from './RealEstateFormModal';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { swal_warning } from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { IRealEstateAttributes } from "../../../../utils/interfaces";
import { actions } from "../../redux";



interface IParams {
    valueArea: string;
    numberRealEstates: string;
    data: any;
    action?: any;
    realEstates: any;
}



export const TableAreas= () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { valueArea, numberRealEstates, data, action, realEstates } = location.state;
    const arrayEditRealEsates = [];
    data.map( bienInmueble => {
        if(bienInmueble.use_area > 0){
            arrayEditRealEsates.push({
                newArea: bienInmueble.total_area - bienInmueble.use_area,
                idRealEstate: bienInmueble.key
            })
        }
    })

    const real_estates_edit = realEstates.map(realEstate => {
        const editRealEstate = arrayEditRealEsates.find(r => r.idRealEstate === realEstate.id)
        if(editRealEstate !== undefined){
            return {...realEstate, total_area: editRealEstate.newArea};
        }else {
            return realEstate;
        }
    })
    //console.log(real_estates_edit)
    // console.log('bienes inmuebles del proyecto',realEstates);
    // console.log('bienes inmuebles a editar',arrayEditRealEsates);

    // realEstates.map((bien, i) => {
    //     console.log(bien, i)
    // })

    const initial_values = [];
    for (let i = 0; i < Number(numberRealEstates); i++) {
        initial_values.push({
            value: `${i + 1} de ${numberRealEstates}`,
            name: "",
            total_area: `${(Number(valueArea) / Number(numberRealEstates)).toFixed(2)}`,
            id: '',
            sap_id: '',
            destination_type: '',
            accounting_account: '0000',
            registry_number: '',
            registry_number_document_id: '',
            description: '',
            patrimonial_value: '',
            reconstruction_value: '',
            address: {
                id: '',
                name: '',
                cbml: '',
            },
            total_percentage: '',
            zone: 'Urbano',
            tipology: '',
            materials: [],
            supports_documents: [
                {
                    label: 'Documento de Matricula',
                    type: 3,
                },
                {
                    label: 'Documento de Titulo',
                    type: 4,
                },
            ],
            active_type: 'Lote',
            project_id: 0,
            status: 0,
            audit_trail: null,
            acquisitions: [],
            active_code: '',
            _type: null,
            dependency: '',
            subdependency: '',
            management_center: '',
            cost_center: ''
            //...realEstate,
        });
    }

    const [DataRealEstate, setDataRealEstate] = useState(initial_values);

    const table_columns = [
        {
            title: 'N°',
            dataIndex: 'value',
            align: 'center' as 'center',
        },
        {
            title: 'Bien inmueble',
            dataIndex: 'name',
            align: 'center' as 'center',
        },
        {
            title: 'Area',
            dataIndex: 'total_area',
            align: 'center' as 'center',
        },
        {
            title: 'Editar',
            dataIndex: 'value',
            align: 'center' as 'center',
            render: (value, realEstate, index) => {
                return (
                    <RealEstateFormModal realEstateData={realEstate} position={index} onSubmit={async (values, i) => {
                        const arrayRealEstates = [...DataRealEstate]
                        arrayRealEstates[i] = values;
                        setDataRealEstate(arrayRealEstates);
                    }} />
                );
            },
        },
    ];
    let totalArea = 0;
    DataRealEstate.map(data => {
        totalArea = totalArea + Number(data.total_area);
    })
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card
                                title="Bienes Inmuebles"
                                extra={
                                    <>
                                        <div className="row text-center">
                                            <b className="col">Area a Utilizar</b>
                                        </div>
                                        <div className="row my-1">
                                            <div className="col">{valueArea}m<sup>2</sup></div>
                                            <div className="col">{`/`}</div>
                                            {Number(totalArea.toFixed(0)) > Number(valueArea)  ?
                                                <div className="col" style={{ color: 'red' }}>{totalArea.toFixed(0)}m<sup>2</sup></div>
                                                :
                                                <div className="col">{totalArea.toFixed(0)}m<sup>2</sup></div>
                                            }
                                        </div>

                                    </>

                                }
                            >
                                <UiTable
                                    columns={table_columns}
                                    items={DataRealEstate}
                                    with_pagination
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-outline-primary me-3"
                    onClick={() => {
                        let completeRealEstates = DataRealEstate.every(b => b.name !== "")

                        //console.log(DataRealEstate);
                        //console.log(real_estates_edit);
                        if(Number(totalArea) > Number(valueArea) || Number(totalArea) < Number(valueArea) ){
                            swal_warning.fire(
                                {
                                    title: "Área a utilizar no válida", text: `revisa las áreas de los Bienes Inmuebles`
                                }
                            )
                        }else if(!completeRealEstates) {
                            swal_warning.fire(
                                {
                                    title: "No se puede finalizar", text: "se deben completar los datos de todos los bienes Inmuebles"
                                }
                            )
                        }else{
                            //console.log(DataRealEstate)
                            dispatch(actions.createRealEstates(DataRealEstate))
                            //TODO: enviar datos para crear realEstates
                        }
                    }}
                >
                    Guardar y Finalizar
                </button>
            </div>
        </div>
    )
}
