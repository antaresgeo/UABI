import { FC, useState } from "react";
import Modal from "antd/lib/modal/Modal";
import Location from "./Location";

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
}
const LocationModal: FC<LocationModalProps> = ({ onSave }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => set_is_visible(true);
    const close = () => set_is_visible(false);
    // const toggle = () => set_is_visible((visible) => !visible);
    return (
        <>
            <span className="input-group-text" onClick={open}>Location</span>
            <Modal title="Ubicación" centered visible={is_visible} footer={null} width={1000} onCancel={close}>
                <Location modalClose={(values, callback) => {
                    console.log(values)
                    onSave && onSave(values).then(() => {
                        callback && callback()
                        close()
                    }).catch(() => {
                        callback && callback()
                        close()
                    });
                }}/>
            </Modal>
        </>
    );
};

export default LocationModal;
