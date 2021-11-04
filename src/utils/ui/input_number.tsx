import AntInputNumber from 'antd/lib/input-number';
import { FC } from 'react';
import { FieldProps } from 'formik';
interface InputNumberProps extends FieldProps {}
const InputNumber: FC<InputNumberProps> = ({ field, form, ...props }) => {
    const on_change = (value) => {
        form.setFieldValue(field.name, value);
    };
    return (
        <AntInputNumber
            style={{
                margin: 0,
                borderRadius: '3.5px',
            }}
            value={field.value}
            onChange={on_change}
            {...props}
        />
    );
};

InputNumber.defaultProps = {};

export default InputNumber;
