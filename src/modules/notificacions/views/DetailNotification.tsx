import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../redux';
import { INotificationtAttributes } from './../../../utils/interfaces/notification';
import { Card, Link } from '../../../utils/ui';


interface IParams {
    id: string;
}

const DetailNotification = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const notification: INotificationtAttributes = useSelector((store: any) => store.notifications.notification.value);

    useEffect(() => {
        dispatch(actions.getNotification(id))
    }, []);

    return (
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-12">
                <Card title="Notificacion">
                    <form>
                        <div className="row">
                        <div className="col-6">
                                <label htmlFor="path" className="form-label mt-3 mt-lg-0">Tiulo</label>
                                <input
                                    type="text"
                                    id="initialDate"
                                    name="initialDate"
                                    placeholder="Titulo"
                                    className="form-control"
                                    value={notification.path}
                                    disabled
                                />
                            </div>
                        <div className="col-6">
                                <label htmlFor="path" className="form-label mt-3 mt-lg-0">Path</label>
                                <input
                                    type="text"
                                    id="initialDate"
                                    name="initialDate"
                                    placeholder="Path"
                                    className="form-control"
                                    value={notification.path}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="description" className="form-label" >Descripción</label>
                                <textarea
                                    className="form-control"
                                    id="description_id"
                                    aria-describedby="emailHelp"
                                    placeholder="Descripción..."
                                    name="description"
                                    value={notification.description}    
                                    autoComplete="off"
                                    disabled
                                />
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    </div>
    )
}

export default DetailNotification
