import React, { FC, ReactElement, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from 'antd/lib/modal';

import PassChangeForm from '../components/pass_change_form';

export interface PasswordChangeModalProps {
    update_password: (password: string, is_new_user: boolean) => Promise<any>;
    open?: boolean;
    toggle?: () => void;
    is_new_user: boolean;
}

/**
 *
 * Password Change Modal Component
 */
const PasswordChangeModal: FC<PasswordChangeModalProps> = ({
    update_password,
    open,
    toggle,
    is_new_user,
}): ReactElement => {
    return (
        <>
            <Modal centered visible={open} footer={null} onCancel={toggle}>
                <div className="d-flex justify-content-center">
                    <PassChangeForm
                        change_password={(values) => update_password(values.password, is_new_user)}
                        onOk={toggle}
                        SuccessButtons={({ onClose }) => (
                            <Fragment>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        onClose();
                                        toggle();
                                    }}
                                >
                                    Close
                                </button>
                            </Fragment>
                        )}
                    />
                </div>
            </Modal>
        </>
    );
};

PasswordChangeModal.defaultProps = {
    open: false,
    toggle: () => {},
};

export default connect(
    (store: any) => ({
        can_access: store.auth.can_access,
        is_new_user: store.auth.user?.is_new_user || false,
    }),
    (dispatch: any) => ({
        // update_password: (password: string, is_new_user: boolean) =>
        //     dispatch(redux.actions.update_password(password, is_new_user)),
    })
)(PasswordChangeModal);
