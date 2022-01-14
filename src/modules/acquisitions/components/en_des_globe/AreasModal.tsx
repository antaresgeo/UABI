import Modal from 'antd/lib/modal/Modal';
import { FC } from 'react';
import { TablaGlobe } from './TablaGlobe';

interface AreaModalProps {
    disabled?: boolean;
    open: boolean;
    setOpen: any;
    project: any;
    action: any;
}

export const AreasModal: FC<AreaModalProps> = ({ open, setOpen, project, action }) => {
    const close = () => setOpen(false);
    return (
        <Modal
            title={`Proyecto ${project?.name} ${action} `}
            centered
            visible={open}
            footer={null}
            width={700}
            onCancel={close}
        >
            <TablaGlobe action={action} />
        </Modal>
    );
};
