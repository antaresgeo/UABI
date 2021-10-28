import AntdSelect from 'antd/lib/select';
import { FC } from 'react';
import { FieldProps } from 'formik';
interface SelectProps extends FieldProps {
    options?: any[];
}
const Select: FC<SelectProps> = ({ field, form, options, ...props }) => {
    const { Option } = AntdSelect;
    options = options || [];
    const on_change = (value) => {
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
