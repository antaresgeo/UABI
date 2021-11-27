import AntdSelect from 'antd/lib/select';
import { FC } from 'react';
import { FieldProps } from 'formik';

interface SelectProps extends FieldProps {
    options?: any[];
    className?: string;
    extra_on_change?: (value, prev_value?) => void;
}
const Select: FC<SelectProps> = ({ children, field, form, options, className, extra_on_change, ...props }) => {
    const { Option } = AntdSelect;
    options = options;
    if (options && Array.isArray(options)) {
        options = [...options];
    } else {
        options = [];
    }
    const on_change = (value) => {
        extra_on_change && extra_on_change(value, field.value);
        form.setFieldValue(field.name, value);
    };
    const render_options = (items) =>
        items.map((item, i) => {
            const { name, id } = item;
            return (
                <Option key={`project_${i}`} value={id} label={name}>
                    {name}
                </Option>
            );
        });
    return (
        <AntdSelect
            style={{
                margin: 0,
                borderRadius: '3.5px',
            }}
            value={field.value}
            onChange={on_change}
            optionLabelProp="label"
            className={['w-100', className].join(' ')}
            {...props}
        >
            {render_options(options)}
        </AntdSelect>
    );
};

Select.defaultProps = {
    options: [],
};

export default Select;
