import { FC, useRef, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Location from './index';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    view?: string;
    zone?: string;
}
const LocationModal: FC<LocationModalProps> = ({ onSave, disabled, view, zone }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const ref = useRef(null);
    // const toggle = () => set_is_visible((visible) => !visible);
    return (
        <>
            <span className="input-group-text" onClick={open}>
                #
            </span>
            <Modal title="Ubicación" centered visible={is_visible} footer={null} width={700} onCancel={close}>
                <Location
                    view={view && view}
                    innerRef={ref}
                    zone={zone}
                    modalClose={(values, callback) => {
                        onSave &&
                            onSave(values)
                                .then(() => {
                                    callback && callback();
                                    ref.current?.resetForm();
                                    close();
                                })
                                .catch(() => {
                                    callback && callback();
                                    close();
                                });
                    }}
                />
            </Modal>
        </>
    );
};

export default LocationModal;
