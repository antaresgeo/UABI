import React from 'react'
import { Card } from '../../../utils/ui';
import ElectronicFielList from '../components/ElectronicFielList';
import { useDispatch, useSelector } from 'react-redux';
import actions from './../../acquisitions/redux/actions/index';
import FilterForm from './../../../utils/ui/filter_form';

const Electronic_file_list= () => {
    const dispatch = useDispatch();
    const  user  = useSelector((store: any) => store.auth.user);
    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    };


    const filter = async (_filters, _) => {
        await dispatch(actions.getRealEstates({ page: 1, with: 'pagination', ..._filters }));
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Expediente Electrónico"
                    >
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm
                                        filters={[
                                            { key: 'registry_number', name: 'Matrícula' },
                                            { key: 'project', name: 'Proyecto' },
                                            { key: 'name', name: 'Nombre' },
                                            { key: 'CBML', name: 'CBML' },
                                            { key: 'sap_id', name: 'Activo fijo' },
                                        ]}
                                        onSubmit={filter}
                                    />
                                </div>
                            </div>
                        </div>
                        <ElectronicFielList />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Electronic_file_list
