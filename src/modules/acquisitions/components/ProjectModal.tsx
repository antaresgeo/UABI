import { FC, useState, useEffect } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { IProjectAttributes } from './../../../utils/interfaces/projects';
import { useSelector } from 'react-redux';


interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    openArea: any;
    realEstates?: any;
}

const ProjectModal: FC<LocationModalProps> = ({ onSave, disabled, openArea, realEstates }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const [visibleButton, setVisibleButton] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    console.log(realEstates.length)
    useEffect(() => {
        //dispatch(actions.getProject(id));
        if (realEstates?.length === 0) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    }, [realEstates]);
    return (
        <>
            <button type="button" className="btn btn-primary" disabled={visibleButton} onClick={() => open()}
            >
                Finalizar Proyecto
            </button>

            <Modal
                footer={[
                    <button type="submit" className="btn btn-outline-primary " key="3" onClick={() => { }}>
                        sin saneamiento
                    </button>,
                    ...(realEstates?.length > 1 ? [
                        <button
                            type="submit"
                            className="btn btn-outline-primary "
                            key="1"
                            style={{ marginLeft: '30px' }}
                            onClick={() => {
                                openArea('englobar');
                                close();
                            }}>
                            Englobar
                        </button>,
                    ] :
                    [
                        <button
                            type="submit"
                            className="btn btn-outline-primary "
                            key="1"
                            disabled
                            style={{ marginLeft: '30px' }}
                            onClick={() => {
                                openArea('englobar');
                                close();
                            }}>
                            Englobar
                        </button>,
                    ]),
                    <button
                        type="submit"
                        style={{ marginLeft: '30px', marginRight: '110px' }}
                        key="2"
                        className="btn btn-outline-primary"
                        onClick={() => { openArea('desenglobar'); close() }}
                    >
                        Desenglobar
                    </button>
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
