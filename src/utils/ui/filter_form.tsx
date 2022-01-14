import React, { FC, Fragment } from 'react';
import { Field, Form, Formik } from 'formik';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import { LinkButton } from './link';
import moment from 'moment';

interface FilterFormProps {
    filters: { key: string; name: string; type?: string }[];
    onSubmit: (values, form) => Promise<any>;
    disabled?: boolean;
}

const FilterForm: FC<FilterFormProps> = ({ filters, onSubmit /*, disabled*/ }) => {
    return (
        <Formik
            enableReinitialize
            onSubmit={(_values, form) => {
                const values: any = { ..._values };
                if (values.type === 'date') {
                    const newDate = moment(values.value).format('YYYY/MM/DD');
                    values.value = new Date(newDate).getTime();
                }
                delete values.type;
                form.setSubmitting(true);
                onSubmit(values, form)
                    .then(() => {
                        form.setSubmitting(false);
                    })
                    .catch(() => form.setSubmitting(false));
            }}
            initialValues={{
                value: '',
                key: filters && filters.length > 0 ? filters[0].key : '',
                type: filters && filters.length > 0 ? filters[0].type || 'text' : '',
            }}
        >
            {({ values, submitForm, setFieldValue }) => {
                let p = "";
                if( filters.length > 0 ) {
                    const i = filters.find((f) => f.key === values.key);
                    p = i?.name || ""
                }
                return (
                    <Form>
                        <div className="input-group">
                            <Field
                                type={values.type}
                                className="form-control"
                                placeholder={p}
                                name="value"
                            />
                            <span className="input-group-text" onClick={() => submitForm()}>
                                <span>
                                    <i className="fa fa-search" aria-hidden="true" />
                                </span>
                            </span>
                            {filters.length > 1 && (
                                <Dropdown
                                    overlay={
                                        <Menu
                                            onClick={({ key }) => {
                                                const selected_item = filters.find((e) => e.key === key);
                                                setFieldValue('key', selected_item.key, false);
                                                setFieldValue('value', '', false);
                                                setFieldValue('type', selected_item.type, false);
                                            }}
                                        >
                                            {filters.map((f) => (
                                                <Menu.Item key={f.key}>{f.name}</Menu.Item>
                                            ))}
                                        </Menu>
                                    }
                                    trigger={['click']}
                                >
                                    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                        <LinkButton
                                            name=""
                                            className="ant-dropdown-link"
                                            icon={
                                                <Fragment>
                                                    <i className="fa fa-filter" />
                                                    <i className="fa fa-angle-down" />
                                                </Fragment>
                                            }
                                        />
                                    </a>
                                </Dropdown>
                            )}
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FilterForm;
