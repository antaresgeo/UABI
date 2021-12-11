import { FieldProps } from 'formik';
import React, { FC } from 'react';
import DocumentsModal from './Modal';
interface SelectProps extends FieldProps {
    className?: string;
    onDelete?: any;
}
const DocumentModal: FC<SelectProps> = ({ field, form, className, onDelete, ...props }) => {
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
            onDelete={(values) => {
                on_change(values);
                onDelete && onDelete(values);
            }}
        />
    );
};
export default DocumentModal;
