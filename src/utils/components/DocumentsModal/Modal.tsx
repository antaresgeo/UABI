import { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Form from './Form';
import { FormikProps, FormikValues } from 'formik';
import { create_document } from './services';

interface LocationModalProps {
    modal_name?: string;
    disabled?: boolean;
    btn_class?: string;
    btn_label?: string;
    onChange: (data) => void;
}

const DocumentsModal: FC<LocationModalProps> = ({ modal_name, disabled, btn_class, btn_label, onChange }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
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
            <span className={[btn_class].join(' ')} onClick={open}>
                {btn_label ? btn_label : title}
            </span>
            <Modal
                title={title}
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
                footer={[
                    <button className="btn btn-outline-primary" onClick={close} disabled={is_submitting}>
                        Cancelar
                    </button>,
                    <button
                        className="btn btn-primary ms-2"
                        onClick={() => form_ref.current?.submitForm()}
                        disabled={is_submitting}
                    >
                        Guardar
                    </button>,
                ]}
            >
                <Form
                    innerRef={form_ref}
                    onSubmit={(values) => {
                        return create_document(values).then((res) => {
                            close();
                            onChange(res)
                        });
                    }}
                />
            </Modal>
        </>
    );
};

export default DocumentsModal;
