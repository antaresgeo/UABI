import { FC, useEffect, useRef, useState } from 'react'
import Modal from 'antd/lib/modal/Modal';
import { DataRealEstateForm } from './../RealEstateForm/DataRealEstateForm';
import RealEstateForm from '../RealEstateForm';
import { IRealEstateAttributes } from '../../../../utils/interfaces';
import { IProjectAttributes } from './../../../../utils/interfaces/components.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { actions, service } from '../../redux';
import GeneralDataForm from '../RealEstateForm/GeneralDataForm';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { swal_warning } from '../../../../utils';

interface RealEstateModalProps {
    disabled?: boolean;
    realEstateData?: any;
    position?: any;
    arrayRealEstates?: any;
    onSubmit: (values, actions?) => Promise<any>;
}

export const RealEstateFormModal: FC<RealEstateModalProps> = ({ disabled, realEstateData, position, arrayRealEstates,onSubmit }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    //console.log('valores', is_visible,realEstateData)
    //console.log(arrayRealEstates)
    const open = () => {
        ref.current?.resetForm();
        !disabled && set_is_visible(true)
    };
    const close = () => set_is_visible(false);

    const history: any = useHistory();
    const dispatch = useDispatch();
    const ref = useRef<any>();
    const [project_id, set_project_id] = useState(0);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
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
        const doc: any =  compute_doc_enrollment(values.document);
        onSubmit(values, position).then(() => {
            actions.setSubmitting(false);
            console.log(values)
            close();
            //actions.resetForm();
        });

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
        active_type: 'Lote',
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
        <>
            <i className="fa fa-pencil" aria-hidden="true" onClick={open} style={{color: "#1FAEEF", fontSize: 16}}/>
            <Modal
                footer={
                    [
                        <button
                            type="submit"
                            className="btn btn-primary my-3"
                            onClick={() => {
                                ref.current?.submitForm();
                            }}
                        >
                            Guardar
                        </button>
                    ]
                }
                title="Crear Bien Inmueble"
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                {/* <DataRealEstateForm formik={''} projects={[]} /> */}
                <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} innerRef={ref} validationSchema={schema} >
                    {(formik) => {
                        return (
                            <Form className="h-100" autoComplete="off">
                                <div className="h-100 d-flex flex-column">
                                    <div className="flex-fill overflow-auto">
                                        <div className="container-fluid">
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">
                                                    <DataRealEstateForm
                                                        type="create"
                                                        formik={formik}
                                                        projects={projects}
                                                        project={project}
                                                        englobe={true}
                                                        onProjectSelectedChange={onProjectSelectedChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>

            </Modal>
        </>
    );
}
