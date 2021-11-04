import { FieldProps } from 'formik';
import React, { FC } from 'react';
import DocumentsModal from './Modal';
interface SelectProps extends FieldProps {
    className?: string;
}
const DocumentModal: FC<SelectProps> = ({ field, form, className, ...props }) => {
    const on_change = (value) => {
        const new_value = {
            label: '',
            name: '',
            pdf: null,
            ...field.value,
            ...value,
        };
        form.setFieldValue(field.name, new_value, false);
    };
    return (
        <DocumentsModal
            {...props}
            btn_class={[className].join(' ')}
            modal_name={field.value?.label}
            onChange={on_change}
        />
    );
};
export default DocumentModal;
