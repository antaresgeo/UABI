import { FieldProps } from 'formik';
import React, { FC } from 'react';
import DocumentsModal from './Modal';
interface SelectProps extends FieldProps {
    className?: string;
}
const DocumentModal: FC<SelectProps> = ({ field, form, className, ...props }) => {
    const on_change = (value) => {
        console.log(value);
        form.setFieldValue(field.name, value, false);
    };
    return (
        <DocumentsModal
            {...props}
            doc={field.value}
            btn_class={[className].join(' ')}
            modal_name={field.value?.label}
            onChange={on_change}
        />
    );
};
export default DocumentModal;
