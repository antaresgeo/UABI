import React, { FC, useState } from 'react'
import Modal from 'antd/lib/modal/Modal';
import { Link } from '../../../utils/ui';
import { LinkButton } from '../../../utils/ui/link';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;

}

const ModalElectronicFiel: FC<LocationModalProps> = ({ /*onSave,*/ disabled, }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    return (
        <>
            <LinkButton
                name="Subir documento"
                icon={<i className="fa fa-upload" aria-hidden="true" />}
                onClick={() => open()}
            >
            </LinkButton>
            <Modal
                footer={[
                    <button
                        type="submit"
                        className="btn btn-outline-primary "
                        key="1"
                        onClick={() => {
                            close();
                        }}
                    >
                        No guardar cambios
                    </button>,
                    <button
                        type="submit"
                        style={{ marginLeft: '30px', marginRight: '140px' }}
                        key="2"
                        className="btn btn-primary"
                        onClick={() => {

                            close();
                        }}
                    >
                        volver y adjuntar
                    </button>,
                ]}
                title=""
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                <h4 className="text-center" style={{ color: '#1FAEEF' }}>
                    Cargar Archivo
                </h4>
                <p className="text-center" style={{ margin: 25, fontWeight: "bold", fontSize: '14px' }}>
                    Selecciona el archivo que deseas cargar en la carpeta que señalaste
                </p>
                <div className="text-center" >
                    <a href="https://example.com" style={{ color: "#FF8900" }}>Explorar en mi ordenador</a>
                </div>
            </Modal>
        </>
    )
}

export default ModalElectronicFiel
