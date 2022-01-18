import * as React from 'react';
import { FC } from "react"

interface IUserFormPros {
    notification: any;
}

const Detail_notification: FC<IUserFormPros> = ({ notification }) => {
    console.log(notification)
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información de la Notificación
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-6">
                                <label htmlFor="">Título</label>
                                <div className="my-3">{notification?.title}</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Enlace</label>
                                <a href={notification?.action} className="my-3">acceso directo</a>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <div className="my-3">{notification?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail_notification
