import { FC, useState, useEffect } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { IProjectAttributes } from './../../../utils/interfaces/projects';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface IParams {
    id: string;
}
interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    view?: string;
    zone?: string;
}

const ProjectModal: FC<LocationModalProps> = ({ onSave, disabled, view, zone }) => {
    const dispatch = useDispatch();
    const { id } = useParams<IParams>();
    const history = useHistory();
    console.log(history);
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    const handleClickEnglobar = () => {
        history.push(`/acquisitions/projects/englobar/${project?.id}`);
    };
    const handleClickDesenglobar = () => {
        history.push(`/acquisitions/projects/desenglobar/${project?.id}`);
    };
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={open}>
                Finalizar Proyecto
            </button>

            <Modal
                footer={[
                    <button type="submit" className="btn btn-outline-primary " key="1" onClick={handleClickEnglobar}>
                        Englobar
                    </button>,
                    <button
                        type="submit"
                        style={{ marginLeft: '40px', marginRight: '190px' }}
                        key="2"
                        className="btn btn-outline-primary"
                        onClick={handleClickDesenglobar}
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
