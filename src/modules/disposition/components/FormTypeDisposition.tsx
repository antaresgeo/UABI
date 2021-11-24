import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import Select from '../../../utils/ui/select';
import { IRealEstateAttributes } from '../../../utils/interfaces/realEstates';
import { FC } from 'react';
import { ModalNotificar } from './ModalNotificar';

interface DispositionFormPros {
    realEstate?: IRealEstateAttributes;
    onTypeDispositionChange?: (value) => void;
}

export const FormTypeDisposition: FC<DispositionFormPros> = ({ realEstate, onTypeDispositionChange }) => {
    const initialValues = {
        type_use: "",
        active_type: "",
        disposition_type: ""
    };

    const submit = (values, actions) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
    });

    const dispositions = [
        "Dependencias",
        "Comodato",
        "arrendamiento",
        "ventas",
        "AEP",
        "MTEP",
        "APRED",
        "servidumbre",
        "autorizaciones"
    ]

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
            <Form>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="type_use_id" className="form-label">
                            Tipo de uso
                        </label>
                        <Field
                            type="text"
                            id="type_use_id"
                            name="type_use"
                            className="form-control"
                            disabled

                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            Tipo Activo
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                            disabled

                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="disposition_type_id" className="form-label">
                            Tipo disposición
                        </label>
                        <Field
                            component={Select}
                            name="disposition_type"
                            id="disposition_type_id"
                            className="w-100"
                            options={dispositions.map(realestate => ({ id: realestate, name: realestate }))}
                            extra_on_change={onTypeDispositionChange}
                        />
                    </div>
                    <div className="col-2">
                        <ModalNotificar />
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
