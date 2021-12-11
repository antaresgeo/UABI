import { Card, Link, Table as UiTable } from '../../../../utils/ui';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { swal_warning } from '../../../../utils';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';

interface IParams {
    valueArea: string;
    numberRealEstates: string;
    data: any;
    action?: any;
    realEstates: any;
    arrayRealEstates: any;
}

export const TableAreas = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const [realEstatesEdit, setRealEstatesEdit] = useState([]);
    const { valueArea, numberRealEstates, data, action, realEstates, arrayRealEstates } = location.state;
    const arrayEditRealEsates = [];
    useEffect(() => {
        if (data && realEstates) {
            data.map((bienInmueble) => {
                if (bienInmueble.use_area > 0) {
                    arrayEditRealEsates.push({
                        intact_area: bienInmueble.intact_area,
                        id: bienInmueble.id,
                        type: bienInmueble.type,
                    });
                }
            });
            const editables = arrayEditRealEsates.map((r) => {
                return realEstates.find((realEsate) => realEsate.id === r.id);
            });
            let result = editables.filter((item, index) => {
                return editables.indexOf(item) === index;
            });
            const real_estates_edit = result.map((realEstate) => {
                const editRealEstate = arrayEditRealEsates.filter((r) => r.id === realEstate.id);
                let areaCons = 0;
                let arealote = 0;
                if (editRealEstate !== undefined) {
                    editRealEstate.map((r) => {
                        if (r.type === 'constrution') {
                            areaCons = r.intact_area;
                        } else if (r.type === 'lote') {
                            arealote = r.intact_area;
                        }
                    });
                    const real = {
                        ...realEstate,
                        construction_area: areaCons === 0 ? realEstate.construction_area : areaCons,
                        plot_area: arealote === 0 ? realEstate.plot_area : arealote,
                    };
                    return {
                        ...real,
                        total_area: real.construction_area + real.plot_area,
                    };
                } else {
                    return realEstate;
                }
            });
            setRealEstatesEdit(real_estates_edit);
        }
    }, []);

    const initial_values = [];
    for (let i = 0; i < Number(numberRealEstates); i++) {
        initial_values.push({
            value: `${i + 1} de ${numberRealEstates}`,
            name: '',
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
            cost_center: '',
            //...realEstate,
        });
    }

    const [DataRealEstate, setDataRealEstate] = useState(initial_values);
    useEffect(() => {
        if (arrayRealEstates) {
            setDataRealEstate(arrayRealEstates);
        }
    }, []);

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
                    <Link
                        to={{
                            pathname: `/englobar/real-estates/edit`,
                            state: { realEstateData: realEstate, index, DataRealEstate, valueArea, data, realEstates },
                        }}
                        name=""
                        avatar={false}
                        icon={<i className="fa fa-pencil" aria-hidden="true" />}
                    />
                    // <RealEstateFormModal realEstateData={realEstate} position={index}  onSubmit={on_Submit}/>
                );
            },
        },
    ];
    let totalArea = 0;
    if (Array.isArray(DataRealEstate)) {
        DataRealEstate.map((data) => (totalArea = totalArea + Number(data.total_area)));
    }
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
                                            <b className="col-6 text-center">Total</b>
                                            <b className="col-6 text-center">Utilizada</b>
                                        </div>
                                        <div className="row my-1">
                                            <div className="col">
                                                {valueArea}m<sup>2</sup>
                                            </div>
                                            <div className="col text-center">{`/`}</div>
                                            {Number(totalArea.toFixed(0)) > Number(valueArea) ? (
                                                <div className="col" style={{ color: 'red' }}>
                                                    {totalArea.toFixed(0)}m<sup>2</sup>
                                                </div>
                                            ) : (
                                                <div className="col">
                                                    {totalArea.toFixed(0)}m<sup>2</sup>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                }
                            >
                                <UiTable columns={table_columns} items={DataRealEstate} with_pagination />
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
                        // console.log('data', data)
                        // console.log('antes',realEstates)
                        // console.log('editar',realEstatesEdit)
                        let completeRealEstates = DataRealEstate.every(b => b.name !== "")

                        if (
                            Number(totalArea.toFixed(0)) > Number(valueArea) ||
                            Number(totalArea.toFixed(0)) < Number(valueArea)
                        ) {
                            swal_warning.fire({
                                title: 'Área a utilizar no válida',
                                text: `revisa las áreas de los Bienes Inmuebles`,
                            });
                        } else if (!completeRealEstates) {
                            swal_warning.fire({
                                title: 'No se puede finalizar',
                                text: 'se deben completar los datos de todos los bienes Inmuebles',
                            });
                        } else {

                            dispatch(actions.createRealEstates(DataRealEstate, "many"))
                            //console.log('bienes inmuebles a editar', real_estates_edit);
                        }
                    }}
                >
                    Guardar y Finalizar
                </button>
            </div>
        </div>
    );
};
