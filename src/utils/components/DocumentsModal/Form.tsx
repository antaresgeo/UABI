import { FC, useState } from 'react';
import { Field, Form as FormF, Formik } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import Upload from 'antd/lib/upload';
import Alert from 'antd/lib/alert';

interface DocumentsFormProps {
    name?: string;
    innerRef: any;
    onSubmit: (values) => Promise<any>;
}

const DocumentsForm: FC<DocumentsFormProps> = ({ name, innerRef, onSubmit }) => {
    const has_name = !!name;
    const [no_is_pdf, set_no_is_pdf] = useState(false);
    const [disable_upload, set_disable_upload] = useState(false);
    const initial_values = {
        name: name || '',
        pdf: null,
        fileList: [],
    };
    const submit = (values, form) => {
        const res_values = { ...values };
        delete res_values.fileList;
        res_values.name = res_values.name + '.pdf';
        form.setSubmitting(true);
        onSubmit(res_values)
            .then(() => {
                form.setSubmitting(false);
            })
            .catch(() => form.setSubmitting(false));
    };

    return (
        <Formik initialValues={initial_values} onSubmit={submit} innerRef={innerRef}>
            {({ values, setFieldValue }) => {
                const upload_props = {
                    accept: '.pdf',
                    maxCount: 1,
                    onChange: ({ file, fileList }) => {
                        console.log(file)
                        if (file.type === 'application/pdf') {
                            set_no_is_pdf(false);
                            if (values.name === '') {
                                setFieldValue('name', file.name.split('.')[0]);
                            }
                            setFieldValue('pdf', file);
                            setFieldValue('fileList', fileList);
                        } else {
                            set_no_is_pdf(true);
                        }
                        set_disable_upload(false)
                    },
                    beforeUpload: () => {
                        return false;
                    },
                    fileList: values.fileList,
                };
                const Button = (...props) => {
                    return (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                set_disable_upload(true)
                            }}
                            disabled={disable_upload}
                        >
                            Seleccionar PDF
                        </button>
                    );
                };
                return (
                    <FormF>
                        <div className="form-row row">
                            <div className="col-12">
                                <Upload {...upload_props}>
                                    <Button />
                                </Upload>
                                <span className="d-block" style={{ height: 20 }} />
                                {no_is_pdf && (
                                    <Alert message="el archivo seleccionado no es un pdf" type="error" closable />
                                )}
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="" className="form-label">
                                    Nombre
                                </label>
                                <Field className="w-100 form-control" name="name" type="text" disabled={has_name} />
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                    </FormF>
                );
            }}
        </Formik>
    );
};

export default DocumentsForm;
