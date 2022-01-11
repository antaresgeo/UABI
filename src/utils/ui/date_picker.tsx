import React, { FC, ReactElement } from 'react';
import { FieldProps } from 'formik';
import DatePicker from 'antd/lib/date-picker';
import Select from 'antd/lib/select';

import moment, { Moment } from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

type DateOp = Date | Moment | Date[] | Moment[];

interface Props extends FieldProps {
    dateFormat?: string;
    className?: string;
    extraOnChange?: (date: DateOp, string?: string | string[]) => void;
}

export const AntRangePicker = ({ field, form, className, extraOnChange, ...props }: Props) => {
    const format = 'YYYY/MM/DD';
    const onChange = (dates, strings) => {
        form.setFieldValue(
            field.name,
            dates
                ? {
                      start_date: dates[0].format(format),
                      end_date: dates[1].format(format),
                  }
                : {
                      start_date: '',
                      end_date: '',
                  },
            false
        );
        extraOnChange && extraOnChange(dates, strings);
    };
    const defaultValues = field.value
        ? {
              value: [
                  field.value.start_date && field.value.start_date !== ''
                      ? moment(field.value.start_date, format)
                      : null,
                  field.value.end_date && field.value.end_date !== '' ? moment(field.value.end_date, format) : null,
              ],
          }
        : {};

    props = { ...props, ...defaultValues };
    return (
        <div style={{ color: '#555' }}>
            <RangePicker
                {...props}
                className={['w-100', className].join(' ')}
                onChange={onChange}
                placeholder={['Desde', 'Hasta']}
            />
        </div>
    );
};

export interface SelectProps extends FieldProps {
    options?: { name: string; id: number }[];
    className?: string;
}

/**
 *
 * Select Component
 */
export const AntSelect: FC<SelectProps> = ({ form, field, options, className }): ReactElement => {
    // const on_search = () => {};
    const on_change = (value, option) => {
        form.setFieldValue(field.name, value, false);
    };
    const op = options.map((o) => ({ label: o.name, value: o.id }));
    return <DSelect onChange={on_change} className={['w-100', className].join(' ')} value={field.value} options={op} />;
};

interface DSelectProps {
    onChange?: (value, option) => void;
    className?: string;
    defaultValue?: any;
    value?: any;
    options: { label: string; value: any }[];
    style?: any;
}
export const DSelect: FC<DSelectProps> = ({ onChange, className, value, options, defaultValue, style }) => {
    return (
        <Select onChange={onChange} className={className} value={value} defaultValue={defaultValue} style={style}>
            {options.map((option, i) => (
                <Option key={`d_select_${i}`} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

AntSelect.defaultProps = {
    options: [],
};
