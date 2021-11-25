import { FC, useRef, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Location from './index';
import { service } from '../../../modules/acquisitions/redux';
import { on } from 'cluster';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    view?: string;
    zone?: string;
}
const LocationModal: FC<LocationModalProps> = ({ onSave, disabled, view, zone }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const ref = useRef(null);
    const open = () => {
        ref.current?.resetForm();
        !disabled && set_is_visible(true);
    };
    const close = () => set_is_visible(false);
    const request = (_values) => {
        console.log(3)
        if (view === 'general' || 'user') {
            const values = {..._values};
            delete values.country_name;
            delete values.state_name;
            delete values.state_name;
            delete values.state_name;
            delete values.city_name;
            delete values.commune_name;
            delete values.neighborhood_name;
            return service.getAddress(values).then((res) => {
                return onSave && onSave(res);
            });
        } else {
            return onSave && onSave(_values);
        }
    };
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
                        console.log(2)
                        request(values)
                            .then(() => {
                                callback && callback();
                                ref.current?.resetForm();
                                close();
                            })
                            .catch(() => {
                                callback && callback();
                                ref.current?.resetForm();
                                close();
                            });
                    }}
                />
            </Modal>
        </>
    );
};

export default LocationModal;
