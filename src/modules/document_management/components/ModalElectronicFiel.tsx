import React, { FC, useState } from 'react'
import Modal from 'antd/lib/modal/Modal';
import { Link } from '../../../utils/ui';
import { LinkButton } from '../../../utils/ui/link';
import { Tag } from 'antd';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;

}

const ModalElectronicFiel: FC<LocationModalProps> = ({ /*onSave,*/ disabled, }) => {

    const input: HTMLInputElement = document.getElementById("subir_archivo") as HTMLInputElement;
    console.log(input?.files)

    const [is_visible, set_is_visible] = useState<boolean>(false);
    const [docName, setDocName] = useState(null)
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const documento = (e) => {
        console.log(e.target.files);
        setDocName(e.target.files[0].name ?? null)
    }
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
                            const input: HTMLInputElement = document.getElementById("subir_archivo") as HTMLInputElement;
                            input.value = "";
                            input.files = undefined;
                            setDocName(null)

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
                <div className="text-center"  >
                    <div style={{ textDecoration: 'underline', color: "#FF8900" }} onClick={() => {
                        const input = document.getElementById("subir_archivo");
                        input.click();
                        input.addEventListener("change", documento)
                    }}>Explorar en mi ordenador</div>
                    <input
                        type="file"
                        id="subir_archivo"
                        style={{ display: 'none' }}
                        name="documento"
                    />
                </div>
                {docName !== null &&
                    <div className="text-center my-3">
                        <Tag>{docName}</Tag>
                    </div>
                }
            </Modal>
        </>
    )
}

export default ModalElectronicFiel
