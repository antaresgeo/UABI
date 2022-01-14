import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../../../utils/ui';
import { TableDiszposition } from '../components/TableDisposition';
import FilterForm from './../../../utils/ui/filter_form';

export const ListDisposition = () => {
    // const [filters, set_filters] = useState<object>(null);
    const user = useSelector((store: any) =>  store.auth.user);

    const filter = async (_filters, _) => {
        // set_filters(_filters);
        //await dispatch(actions.get_all_users({ page: 1, ..._filters }));
    };

    // const change_page = (page, pageSize) => {
    //     dispatch(actions.get_all_users({ page, pageSize, ...filters }));
    // };

    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Disposición"
                        //extra={<Link to="/insurabilities/policy/create/" name="Crear" iconText="+" />}
                    >
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm
                                        filters={[
                                            { key: '', name: 'Proyecto' },
                                            { key: 'register_number', name: 'Matrícula' },
                                            { key: 'name', name: 'Nombre' },
                                            { key: 'address', name: 'Dirección' },
                                            { key: 'CBML', name: 'CBML' },
                                            { key: '', name: 'Activo fijo' },
                                        ]}
                                        onSubmit={filter}
                                    />
                                </div>
                            </div>
                        </div>
                        <TableDiszposition user={aux_user} />
                    </Card>
                </div>
            </div>
        </div>
    );
};
