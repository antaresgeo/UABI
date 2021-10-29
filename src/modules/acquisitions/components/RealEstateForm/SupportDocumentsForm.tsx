import React, { FC } from 'react';
import { Field } from 'formik';
import { Card } from '../../../../utils/ui';
import ErrorMessage from '../../../../utils/ui/error_messge';
import DocumentModal from '../../../../utils/components/DocumentsModal';
interface AcquisitionsFromProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    formik?: any;
}
const SupportDocumentsForm: FC<AcquisitionsFromProps> = ({ type, disabled, formik }) => {
    disabled = disabled || type === 'view' || false;

    return (
        <Card
            title="Documentos Soporte"
            actions={
                [
                    // <div className="d-flex flex-row-reverse px-3 py-1">
                    //     <button type="button" className="btn btn-primary">
                    //         Guardar
                    //     </button>
                    // </div>,
                ]
            }
        >
            <div className="row">
                <div className="col-3">
                    <label htmlFor="form-select" className="form-label">
                        Nombre del Documento
                    </label>
                    <Field
                        name="supports_documents"
                        component={DocumentModal}
                        multiple
                        className="btn btn-primary"
                        modal_name="Test"
                    />

                        <ErrorMessage name="supports_documents" />

                </div>
            </div>
        </Card>
    );
};
export default SupportDocumentsForm;
