import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../redux';
import { Card } from '../../../utils/ui';
import { Formik, Form, Field } from 'formik';

interface IParams {
    id: string;
}

const DetailNotification = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const notification: any = useSelector((store: any) => store.notifications.notification.value);

    useEffect(() => {
        dispatch(actions.get_notification_by_id(parseInt(id)));
    }, [id]);

    const initial_values = {
        title: '',
        action: '',
        description: '',
        ...notification,
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Notificacion">
                        <Formik enableReinitialize initialValues={initial_values} onSubmit={() => {}}>
                            {({ values }) => {
                                return (
                                    <Form>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="title_id" className="form-label mt-3 mt-lg-0">
                                                    Tiulo
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="title_id"
                                                    name="title"
                                                    placeholder="Titulo"
                                                    className="form-control"
                                                    disabled
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="action_id" className="form-label mt-3 mt-lg-0">
                                                    Enlace
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="action_id"
                                                    name="action"
                                                    placeholder="Path"
                                                    className="form-control"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label htmlFor="description_id" className="form-label">
                                                    Descripción
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    className="form-control"
                                                    id="description_id"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Descripción..."
                                                    name="description"
                                                    autoComplete="off"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DetailNotification;
