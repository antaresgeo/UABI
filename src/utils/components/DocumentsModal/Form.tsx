import { FC } from 'react';
import { Field, Form as FormF, Formik } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import Upload from 'antd/lib/upload';

interface DocumentsFormProps {
    name?: string;
    innerRef: any;
    onSubmit: (values) => Promise<any>;
}

const DocumentsForm: FC<DocumentsFormProps> = ({ name, innerRef, onSubmit }) => {
    const has_name = !!name;
    const initial_values = {
        name: name || '',
        pdf: null,
        fileList: [],
    };
    const submit = (values, form) => {
        const res_values = { ...values };
        delete res_values.fileList;
        res_values.name = res_values.name + '.pdf'
        form.setSubmitting(true);
        onSubmit(res_values).then(() => {
            form.setSubmitting(false);
        }).catch(() => form.setSubmitting(false));
    };

    return (
        <Formik initialValues={initial_values} onSubmit={submit} innerRef={innerRef}>
            {({ values, setFieldValue }) => {
                const upload_props = {
                    accept: '.pdf',
                    maxCount: 1,
                    onChange: ({ file, fileList }) => {
                        if (values.name === '') {
                            setFieldValue('name', file.name.split('.')[0]);
                        }
                        setFieldValue('pdf', file);
                        setFieldValue('fileList', fileList);
                    },
                    beforeUpload: () => {
                        return false;
                    },
                    fileList: values.fileList,
                };
                return (
                    <FormF>
                        <div className="form-row row">
                            <div className="col-12">
                                <Upload {...upload_props}>
                                    <button type="button" className="btn btn-primary">
                                        Seleccionar PDF
                                    </button>
                                </Upload>
                                <span className="d-block" style={{ height: 20 }}></span>
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
