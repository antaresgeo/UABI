import { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Form from './Form';
import { Field, FormikProps, FormikValues } from 'formik';
import { create_document } from './services';
import ErrorMessage from '../../ui/error_messge';

interface LocationModalProps {
    doc_name?: string;
    modal_name?: string;
    disabled?: boolean;
    btn_class?: string;
    btn_label?: string;
    btn_delete?: any;
    onChange: (data) => void;
}

const DocumentsModal: FC<LocationModalProps> = ({
    btn_delete,
    doc_name,
    modal_name,
    disabled,
    btn_class,
    btn_label,
    onChange,
}) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const [file_name, set_file_name] = useState<string>(doc_name || '');
    const title = modal_name ? modal_name : 'Agregar Documento';
    const form_ref = useRef<FormikProps<FormikValues>>();

    const close = () => {
        set_is_visible(false);
        form_ref.current?.resetForm();
    };

    const open = () => {
        !disabled && set_is_visible(true);
    };

    const is_submitting = form_ref.current?.isSubmitting;

    return (
        <>
            <div className={['input-group', btn_class].join(' ')}>
                <input type="text" className="form-control form-control-lg" value={file_name} disabled />
                <span className="input-group-text btn btn-clear btn-outline-primary" onClick={open}>
                    {btn_label ? btn_label : title}
                </span>
            </div>

            <Modal
                title={title}
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
                footer={[
                    <button key={1} className="btn btn-outline-primary" onClick={close} disabled={is_submitting}>
                        Cancelar
                    </button>,
                    <button
                        key={2}
                        className="btn btn-primary ms-2"
                        onClick={() => form_ref.current?.submitForm()}
                        disabled={is_submitting}
                    >
                        Cargar
                    </button>,
                ]}
            >
                <Form
                    name={doc_name}
                    innerRef={form_ref}
                    onSubmit={(values) => {
                        set_file_name(values.name + '.pdf');
                        onChange(values);
                        close();
                        return Promise.resolve();
                    }}
                />
            </Modal>
        </>
    );
};

export default DocumentsModal;
