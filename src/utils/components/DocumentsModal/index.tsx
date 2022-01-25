import { FieldProps } from 'formik';
import React, { FC } from 'react';
import DocumentsModal from './Modal';
interface SelectProps extends FieldProps {
    className?: string;
    onDelete?: any;
    file_type?: 'pdf' | 'img';
}
const DocumentModal: FC<SelectProps> = ({ field, form, className, onDelete, file_type, ...props }) => {
    const on_change = (value) => {
        form.setFieldValue(field.name, value, false);
    };
    return (
        <DocumentsModal
            {...props}
            doc={field.value}
            btn_class={[className].join(' ')}
            modal_name={field.value?.label}
            onChange={on_change}
            file_type={file_type}
            onDelete={(values) => {
                on_change(values);
                onDelete && onDelete(values);
            }}
        />
    );
};

DocumentModal.defaultProps = {
    file_type: 'pdf',
};
export default DocumentModal;
