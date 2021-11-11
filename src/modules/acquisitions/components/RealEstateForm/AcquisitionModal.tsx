import { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { FormikProps, FormikValues } from 'formik';
import AcquisitionsFrom from './AdquisitionsForm';

interface AcquisitionModalProps {
    modal_name?: string;
    disabled?: boolean;
    btn_label?: any;
    onChange: (data) => void;
    acquisition?: any;
}

const AcquisitionModal: FC<AcquisitionModalProps> = ({ modal_name, disabled, btn_label, onChange, acquisition }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const title = modal_name ? modal_name : 'Agregar Adquisicion';
    const close = () => {
        set_is_visible(false);
    };

    const open = () => {
        !disabled && set_is_visible(true);
    };

    return (
        <>
            <span onClick={open}>{btn_label ? btn_label : title}</span>

            <Modal
                title={title}
                centered
                visible={is_visible}
                width={800}
                onCancel={close}
                footer={[
                    <button
                        key={1}
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={close}
                        disabled={disabled}
                    >
                        Cancelar
                    </button>,
                    <button key={2} className="btn btn-primary ms-2" type="button" disabled={disabled}>
                        Guardar
                    </button>,
                ]}
            >
                {is_visible && (
                    <AcquisitionsFrom
                        type="modal"
                        acquisition_in={is_visible ? acquisition : null}
                        onChange={(v, i) => {
                            console.log('AcquisitionsFrom onChange', { v, i });
                        }}
                    />
                )}
            </Modal>
        </>
    );
};

export default AcquisitionModal;
