import { FC, useState } from 'react';
import { Field, Form as FormF, Formik } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import Upload from 'antd/lib/upload';
import Alert from 'antd/lib/alert';

interface DocumentsFormProps {
    name?: string;
    file_type: 'pdf' | 'img';
    innerRef: any;
    onSubmit: (values) => Promise<any>;
}

const DocumentsForm: FC<DocumentsFormProps> = ({ name, innerRef, file_type, onSubmit }) => {
    const has_name = !!name;
    const [is_correct_type, set_is_correct_type] = useState(true);
    // const [disable_upload, set_disable_upload] = useState(false);
    const initial_values = {
        name: name || '',
        file: null,
        fileList: [],
    };
    const submit = (values, form) => {
        const res_values = { ...values };
        delete res_values.fileList;
        const [, original_type] = res_values.file.name.split('.');
        res_values.name = res_values.name + '.' + original_type;
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
                    accept: file_type === 'pdf' ? '.pdf' : file_type === 'img' ? 'image/*' : '*',
                    maxCount: 1,
                    onChange: ({ file, fileList }) => {
                        if (validate_file_type(file, file_type)) {
                            set_is_correct_type(true);
                            if (values.name === '') {
                                setFieldValue('name', file.name.split('.')[0]);
                            }
                            setFieldValue('file', file);
                            setFieldValue('fileList', fileList);
                        } else {
                            set_is_correct_type(false);
                        }
                        // set_disable_upload(false);
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
                            // onClick={() => {
                            //     set_disable_upload(true)
                            // }}
                        >
                            Seleccionar {file_type === 'pdf' ? 'PDF' : file_type === 'img' ? 'Imagen' : 'Archivo'}
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
                                {!is_correct_type && (
                                    <Alert
                                        message={`el archivo seleccionado no es ${
                                            file_type === 'pdf'
                                                ? 'un PDF'
                                                : file_type === 'img'
                                                ? 'una Imagen'
                                                : 'Archivo'
                                        }`}
                                        type="error"
                                        closable
                                    />
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

const validate_pdf = (file) => {
    return validate_file_type(file, 'pdf');
};
const validate_img = (file) => {
    return validate_file_type(file, 'img');
};

const validate_file_type = (file: File, type: 'pdf' | 'img') => {
    const file_type = file.type.split('/').pop().toLowerCase();
    switch (type) {
        case 'pdf':
            return file_type === 'pdf';
        case 'img':
            return (
                file_type === 'jpeg' ||
                file_type === 'jpg' ||
                file_type === 'png' ||
                file_type === 'bmp' ||
                file_type === 'gif'
            );
        default:
            return false;
    }
};

export default DocumentsForm;
