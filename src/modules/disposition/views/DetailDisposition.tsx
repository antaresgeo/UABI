import React, { useEffect } from 'react';
import { Link } from '../../../utils/ui';
import { useHistory, useParams } from 'react-router-dom';
import ViewDetailDisposition from './../components/Detail_disposition';
import actions from './../../acquisitions/redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
    id: string;
}
export const DetailDisposition = () => {
    const { id } = useParams<IProps>();
    const history = useHistory();
    const dispatch = useDispatch();
    const  realEstate = useSelector((store: any) => store.acquisitions.realEstate.value)
    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
        }
    }, [dispatch, id]);
    return (
        <>
            <div className="h-100 d-flex flex-column">
                <div className="flex-fill overflow-auto">
                    <div className="bg-white d-flex flex-column h-100">
                        <div className="d-flex flex-row mb-3 pt-3 ps-4 shadow-sm p-3 bg-white rounded">
                            <h5 className="col-11">Crear nueva Disposición</h5>
                            <Link
                                to={`/disposition/edit/${id}/`}
                                name=""
                                avatar={false}
                                icon={
                                    <i
                                        style={{ marginLeft: '30px', fontSize: 16, color: '#000' }}
                                        className="fa fa-pencil"
                                        aria-hidden="true"
                                    />
                                }
                            />
                            {/* <i className="col fa fa-pencil" aria-hidden="true" style={{marginLeft: '30px', fontSize: 16}}></i> */}
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <ViewDetailDisposition
                                        realEstate={realEstate}
                                    />
                                </div>
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
                </div>
            </div>
        </>
    );
};
