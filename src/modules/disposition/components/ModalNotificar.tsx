import React, { FC, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';

interface ModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
}

export const ModalNotificar: FC<ModalProps> = ({ /*onSave,*/ disabled }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const [query, set_query] = useState('');

    const handleInputChange = ({ target }) => {
        set_query(target.value);
    };

    return (
        <>
            <button type="button" className="btn btn-outline-primary" onClick={open}>
                Notificar
            </button>
            {/* <i className="fa fa-pencil" aria-hidden="true" onClick={open} style={{color: "#1FAEEF", border: '1px solid #000'}}/> */}
            <Modal
                footer={[
                    <div className="row tex-center">
                        <div className="col">
                            <button
                                type="submit"
                                className="btn btn-outline-primary "
                                key="1"
                                onClick={() => {
                                    console.log(query);
                                    close();
                                }}
                            >
                                Guardar
                            </button>
                        </div>

                        <div className="col">
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                                key="2"
                                style={{ marginRight: 225 }}
                                onClick={() => {
                                    console.log(query);
                                    close();
                                }}
                            >
                                cancelar
                            </button>
                            ,
                        </div>
                    </div>,
                ]}
                title="Mensaje Nuevo"
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                <div className="col">
                    <label htmlFor="notification_id" className="form-label">
                        Describe la información a modificar
                    </label>
                    <textarea
                        className="form-control"
                        id="notification_id"
                        name="notification"
                        placeholder="escriba su mensaje"
                        autoComplete="off"
                        maxLength={250}
                        style={{ height: '80px' }}
                        onChange={handleInputChange}
                    />
                </div>
            </Modal>
        </>
    );
};
