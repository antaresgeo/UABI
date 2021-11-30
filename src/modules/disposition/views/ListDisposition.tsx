import React, { useState } from 'react';
import { Card, Link } from '../../../utils/ui';
import { TableDiszposition } from '../components/TableDisposition';
import FilterForm from './../../../utils/ui/filter_form';

export const ListDisposition = () => {
    const [filters, set_filters] = useState<object>(null);

    const filter = async (_filters, _) => {
        set_filters(_filters);
        //await dispatch(actions.get_all_users({ page: 1, ..._filters }));
    };

    const change_page = (page, pageSize) => {
        //dispatch(actions.get_all_users({ page, pageSize, ...filters }));
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
                                            { key: 'register_number', name: 'Matrícula' },
                                            { key: 'name', name: 'Nombre' },
                                            { key: 'address', name: 'Dirección' },
                                        ]}
                                        onSubmit={filter}
                                    />
                                </div>
                            </div>
                        </div>
                        <TableDiszposition />
                    </Card>
                </div>
            </div>
        </div>
    );
};
