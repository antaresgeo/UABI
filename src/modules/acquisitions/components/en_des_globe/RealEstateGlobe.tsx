import { FC, useEffect, useRef, useState } from 'react'
import { DataRealEstateForm } from '../RealEstateForm/DataRealEstateForm';
import { IProjectAttributes } from '../../../../utils/interfaces/components.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../../redux';
import { Formik, Form } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { swal_warning } from '../../../../utils';
import { Card } from '../../../../utils/ui';

interface IParams {
    index?: any;
    realEstateData?: any;
    DataRealEstate?: any;
    valueArea?: any;
    //onSubmit: (values, actions?) => Promise<any>;
}

interface RealEstateModalProps {
    disabled?: boolean;
    realEstateData?: any;
    index?: any;
    arrayRealEstates?: any;
    onSubmit: (values, actions?) => Promise<any>;
}

export const RealEstateGlobe: FC<RealEstateModalProps> = ({ disabled, arrayRealEstates, onSubmit }) => {

    //console.log('valores', is_visible,realEstateData)
    //console.log(arrayRealEstates)
    const location = useLocation<IParams>();
    const { index, realEstateData, DataRealEstate, valueArea } = location.state;
    console.log(index, realEstateData,'data', DataRealEstate)
    const history: any = useHistory();
    const dispatch = useDispatch();
    const ref = useRef<any>();
    const [project_id, set_project_id] = useState(0);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    const [project, set_project] = useState(null);
    useEffect(() => {
        if (Number.isInteger(project_id)) {
            service.getProject(project_id + '').then((_project) => {
                set_project(_project);
            });
        } else {
            set_project(null);
        }
    }, [project_id]);



    useEffect(() => {
        dispatch(actions.getProjects());
        if (Number.isInteger(project_id)) {
            dispatch(actions.getRealEstatesByProject(history.location.state?.project_id));
        }
    }, []);

    const onProjectSelectedChange = (value) => {
        if (project_id !== value) {
            set_project_id(value);
            if (value) {
                dispatch(actions.getRealEstatesByProject(value));
            }
        }
    };

    const submit = (values, actions) => {
        console.log('valores', values);
        const doc: any = compute_doc_enrollment(values.document);
        const arrayRealEstates = [...DataRealEstate]
        arrayRealEstates[index] = values;
        console.log(arrayRealEstates)
        history.push( { pathname: `/englobar/realEstates/`, state: { arrayRealEstates,valueArea } })
    }

    const compute_doc_enrollment = async (document) => {
        console.log(document)
        if (document.hasOwnProperty('pdf') && document.pdf) {
            return document;
        } else {
            console.log("documento requerdido")
            await swal_warning.fire(
                {
                    title: "el documento es obligatorio", text: "El documento de Matrícula es obligatorio"
                }
            )
            return Promise.reject();
        }
    };
    let initial_values: any = {
        id: '',
        sap_id: '',
        destination_type: '',
        accounting_account: '0000',
        registry_number: '',
        registry_number_document_id: '',
        name: '',
        description: '',
        patrimonial_value: '',
        reconstruction_value: '',
        address: {
            id: '',
            name: '',
            cbml: '',
        },
        total_area: '',
        total_percentage: '',
        zone: 'Urbano',
        tipology: '',
        materials: [],
        document:
        {
            label: 'Documento de Matricula',
            type: 3,
        },
        active_type: ['Lote'],
        project_id: 0,
        status: 0,
        audit_trail: null,
        acquisitions: [],
        active_code: '',
        dependency: '',
        subdependency: '',
        management_center: '',
        cost_center: '',
        ...realEstateData,
    };

    if (project && project.id !== 0) {
        initial_values = {
            ...initial_values,
            dependency: project.dependency,
            subdependency: project.subdependency,
            management_center: project.management_center,
            cost_center: project.cost_center,
        };
    }

    const schema = Yup.object().shape({
        destination_type: Yup.string().required('Campo obligatorio'),
        // accounting_account: Yup.string(),
        registry_number: Yup.string().required('obligatorio').max(20, 'El maximo 20 es caracteres'),
        name: Yup.string().required('obligatorio'),
        description: Yup.string().required('Campo obligatorio'),
        patrimonial_value: Yup.number()
            .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(99999999999999999999, 'El maximo 20 es caracteres'),
        reconstruction_value: Yup.number()
            .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(9999999999, 'El maximo 10 es caracteres'),
        total_area: Yup.number().required('Campo obligatorio'),
        total_percentage: Yup.number()
            .required('Campo obligatorio')
            .min(0, 'El minimo es 0')
            .max(100, 'El maximo es 100'),
        zone: Yup.string().required('Campo obligatorio'),
        tipology: Yup.string().required('Campo obligatorio'),
        project_id: Yup.number().required('Campo obligatorio'),
        //acquisitions: Yup.array(),
    });


    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} innerRef={ref} validationSchema={schema} >
            {(formik) => {
                return (
                    <Form className="h-100" autoComplete="off">
                        <div className="h-100 d-flex flex-column">
                            <div className="flex-fill overflow-auto">
                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            <Card
                                                title="Información del Inmueble"
                                            >
                                                <DataRealEstateForm
                                                    type="create"
                                                    formik={formik}
                                                    projects={projects}
                                                    project={project}
                                                    englobe={true}
                                                    onProjectSelectedChange={onProjectSelectedChange}
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
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
