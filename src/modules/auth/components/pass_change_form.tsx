import React, { FC, Fragment, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { PasswordResetBody } from "../custom_types";
interface OwnProps {
    change_password: (pass: PasswordResetBody) => Promise<any>;
    onOk?: (data?) => void;
    SuccessButtons?: any;
    code?: string;
}

/**
 * Form component for change password
 * @param {(pass: PasswordResetBody) => Promise<any>;} change_password function service for change password
 * @param {React.ReactChildren} children
 */
export const PassChangeForm: FC<OwnProps> = ({ change_password, onOk, children, SuccessButtons, code }) => {
    const schema = object({
        // password: string()
        //     .matches(/(?=.*[a-z])/, conditions[0])
        //     .matches(/(?=.*[A-Z])/, conditions[1])
        //     .matches(/(?=.*[0-9])/, conditions[2])
        //     .matches(/(?=.*[@$!%*?&,.#])/, conditions[3])
        //     .min(8, conditions[4])
        //     .required("Password is required"),
        re_password: string().oneOf([ref("password"), null], "Passwords must match"),
    });
    const [sent_success, set_send_success] = useState<boolean>(false);
    const onSend = (values, formik) => {
        set_send_success(false);
        change_password({ password: values.password, ...(code ? { code } : {}) })
            .then((data) => {
                set_send_success(true);
                formik.setSubmitting(false);
                onOk && onOk(data);
            })
            .catch((error) => {
                formik.setSubmitting(false);
            });
    };
    return (
        <div className="text-center" style={{ width: "400px" }}>
            <h3 className="mt-4">title</h3>
            <Formik
                enableReinitialize
                onSubmit={onSend}
                initialValues={{ password: "", re_password: "" }}
                validationSchema={schema}
            >
                {(formik) => (
                    <Form>
                        {!sent_success && (
                            <Fragment>
                                <div className="text-left">
                                    <div className="form-group mt-4 text-left">
                                        <label>password</label>
                                        <Field type="password" className="form-control" name="password" />
                                        <ErrorMessage
                                            name="password"
                                            component="span"
                                            className="text-danger text-left d-block w-100 mt-1"
                                        />
                                        <span style={{ fontSize: ".89em", opacity: "0.6" }}>
                                            format_text
                                            <ul style={{ opacity: "0.6" }}>
                                                {/*{translation.format.conditions.map((c, i) => (*/}
                                                {/*    <li key={`conditions_${i}`}>{c}</li>*/}
                                                {/*))}*/}
                                            </ul>
                                        </span>
                                    </div>
                                    <div className="form-group  mt-4 text-left">
                                        <label>re_password</label>
                                        <Field type="password" className="form-control" name="re_password" />
                                        <ErrorMessage
                                            name="re_password"
                                            component="span"
                                            className="text-danger text-left d-block w-100 mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="controls mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={formik.isSubmitting || !formik.isValid}
                                    >
                                        {!formik.isSubmitting && <i className="fas fa-paper-plane" />}
                                        {formik.isSubmitting && <i className="fas fa-spinner fa-spin" />}{" "}
                                        button
                                    </button>
                                </div>
                            </Fragment>
                        )}
                        {sent_success && (
                            <Fragment>
                                <p>
                                    success_text <i className="fas fa-check-circle text-success" />
                                </p>
                                <div className="controls mt-4">
                                    {SuccessButtons && (
                                        <SuccessButtons
                                            onClose={() => {
                                                formik.resetForm();
                                                set_send_success(false);
                                            }}
                                        />
                                    )}
                                </div>
                            </Fragment>
                        )}
                    </Form>
                )}
            </Formik>
            {children}
        </div>
    );
};

export default PassChangeForm;
