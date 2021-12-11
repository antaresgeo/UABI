import { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Form from './Form';
import { FormikProps, FormikValues } from 'formik';
import Tag from 'antd/lib/tag';
import { delete_document, download_document } from './services';

interface LocationModalProps {
    doc_name?: string;
    modal_name?: string;
    disabled?: boolean;
    btn_class?: string;
    btn_label?: string;
    onDelete?: (doc) => void;
    onChange: (data) => void;
    doc?: any;
}

const DocumentsModal: FC<LocationModalProps> = ({
    doc,
    doc_name,
    modal_name,
    disabled,
    btn_class,
    btn_label,
    onDelete,
    onChange,
}) => {
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

    const on_change = (new_doc, _delete = false, prev_doc = null) => {
        if (doc.hasOwnProperty('id') && doc.id) {
            delete_document(doc.id).then(() => {
                onChange(new_doc);
                _delete && onDelete && onDelete(new_doc);
            });
        } else {
            onChange(new_doc);
            _delete && onDelete && onDelete(new_doc);
        }
    };
    return (
        <>
            <div className={['input-group', btn_class].join(' ')}>
                <div className="form-control form-control-lg">
                    {doc?.name && (
                        <Tag
                            closable={!disabled}
                            onClose={() => {
                                on_change(
                                    {
                                        type: doc.type,
                                        label: doc.label,
                                    },
                                    true
                                );
                            }}
                            onClick={() => {
                                download_document(doc.id, doc.name);
                                console.log(doc);
                            }}
                        >
                            {doc.name}
                        </Tag>
                    )}
                </div>
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
                        on_change(
                            {
                                label: doc.label,
                                type: doc.type,
                                ...values,
                            },
                            false,
                            doc
                        );
                        close();
                        return Promise.resolve();
                    }}
                />
            </Modal>
        </>
    );
};

export default DocumentsModal;
