import React, { FC, Fragment } from 'react';
import { Field, Form, Formik } from 'formik';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import { LinkButton } from './link';

interface FilterForm {
    filters: { key: string; name: string }[];
    onSubmit: (values, form) => Promise<any>;
    disabled?: boolean;
}

const FilterForm: FC<FilterForm> = ({ filters, onSubmit, disabled }) => {
    return (
        <Formik
            enableReinitialize
            onSubmit={(values, form) => {
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
            }}
        >
            {({ values, submitForm, setFieldValue }) => {
                return (
                    <Form>
                        <div className="input-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder={
                                    filters && filters.length > 0 ? filters.find((f) => f.key === values.key).name : ''
                                }
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
                                                setFieldValue('key', key, false);
                                                setFieldValue('value', '', false);
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
