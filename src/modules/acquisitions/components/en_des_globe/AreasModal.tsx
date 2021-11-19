
import Modal from 'antd/lib/modal/Modal';
import { Field } from 'formik';
import { FC, useRef, useState } from 'react';
import ErrorMessage from '../../../../utils/ui/error_messge';
import { TablaGlobe } from './TablaGlobe';



interface AreaModalProps {
    disabled?: boolean;
    open: boolean;
    setOpen: any;
    project: any;
    action: any;

}

export const AreasModal: FC<AreaModalProps> = ({ disabled,open,setOpen,project   }) => {

    const ref = useRef(null);
    const _open = () => {
        ref.current?.resetForm();
        !disabled && setOpen(true)
    };
    const close = () => setOpen(false);
    return (
        <Modal title="Bienes Inmuebles del proyecto" centered visible={open} footer={null} width={700} onCancel={close}>
            <TablaGlobe />
        </Modal>

    )
}
