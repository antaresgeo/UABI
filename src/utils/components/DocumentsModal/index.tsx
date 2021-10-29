import { FieldProps } from 'formik';
import React, { FC } from 'react';
import DocumentsModal from './Modal';
interface SelectProps extends FieldProps {
    multiple?: boolean;
    className?: string;
}
const DocumentModal: FC<SelectProps> = ({ field, form, multiple, className, ...props }) => {
    const on_change = (value) => {
        if (multiple) {
            form.setFieldValue(field.name, [...field.value, value.id]);
        } else {
            form.setFieldValue(field.name, value.id);
        }
    };
    return <DocumentsModal {...props} btn_class={[className].join(' ')} onChange={on_change} />;
};
export default DocumentModal;
