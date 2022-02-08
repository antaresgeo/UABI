import React, { useEffect, useRef } from 'react';
import { GeneralDataContract } from '../../components/Contractual/GeneralDataContract';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from './../../redux/actions';
import { swal_success } from '../../../../utils';


interface IParams {
    id: string;
}

const EditContract = () => {
    const { id } = useParams<IParams>();
    // const id = 10;
    const history = useHistory();
    const dispatch = useDispatch();
    const form_ref = useRef<any>();

    const contract: any = useSelector((store: any) => store.disposition.contract.value);

    useEffect(() => {
        dispatch(actions.get_contract(id));
    }, []);

    const _updateContract = async (contractForm) => {
        const res: any = await dispatch(actions.update_contract(id, contractForm));
        if (res) {
            swal_success.fire({
                title: `Contrato Actualizado correctamente`,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
            });

        }
        history.push(`/disposition/contract/${id}`);
    };


    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <GeneralDataContract
                                values_contract={contract}
                                innerRef={form_ref}
                                onSubmit={(values) => {
                                    return _updateContract(values);
                                }}

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        form_ref.current.submitForm();
                    }}
                    disabled={form_ref.current?.isSubmitting}
                >
                    Guardar
                    {form_ref.current?.isSubmitting && (
                        <i
                            className="fa fa-circle-notch fa-spin"
                            style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default EditContract;
