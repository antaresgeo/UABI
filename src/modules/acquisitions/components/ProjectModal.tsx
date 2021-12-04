import { FC, useState, useEffect } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { IProjectAttributes } from '../../../utils/interfaces';
import { useSelector } from 'react-redux';
import { swal_warning } from '../../../utils';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    openArea: any;
    realEstates?: any;
}

const ProjectModal: FC<LocationModalProps> = ({ /*onSave,*/ disabled, openArea, realEstates }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    useEffect(() => {
        //dispatch(actions.getProject(id));
    }, []);

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    if (realEstates.length > 0) {
                        open();
                    } else {
                        swal_warning.fire({
                            title: 'No se puede realizar esta acción',
                            text: `el proyecto no tiene bienes Inmuebles relacionados`,
                        });
                    }
                }}
            >
                Finalizar Proyecto
            </button>

            <Modal
                footer={[
                    <button
                        type="submit"
                        className="btn btn-outline-primary "
                        key="1"
                        onClick={() => {
                            if (realEstates.length === 1) {
                                swal_warning.fire({
                                    title: 'No se puede realizar esta acción',
                                    text: `el proyecto solo tiene un bien inmueble relacionado`,
                                });
                            } else {
                                openArea('englobar');
                                close();
                            }
                        }}
                    >
                        Englobar
                    </button>,
                    <button
                        type="submit"
                        style={{ marginLeft: '40px', marginRight: '190px' }}
                        key="2"
                        className="btn btn-outline-primary"
                        onClick={() => {
                            openArea('desenglobar');
                            close();
                        }}
                    >
                        Desenglobar
                    </button>,
                ]}
                title=""
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                {/* <FinishProject /> */}
                <h4 className="text-center" style={{ color: '#FF8403' }}>
                    Finalizar Proyecto: {project?.name}
                </h4>
                <p className="text-center" style={{ margin: 25 }}>
                    Para finalizar el proyecto por favor selecciona una de las siguientes opciones
                </p>
            </Modal>
        </>
    );
};

export default ProjectModal;
