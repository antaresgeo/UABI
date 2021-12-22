import React from 'react';
import { TableContract } from '../../components/Contractual/TableContract';
import { Card } from '../../../../utils/ui';
import FilterForm from '../../../../utils/ui/filter_form';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';

export const ListContracts = () => {
    const dispatch = useDispatch();
    const filter = async (_filters, _) => {
        await dispatch(actions.get_all_contracts({ page: 1, with: 'pagination', ..._filters }));
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Contratos">
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm
                                        filters={[
                                            { key: 'sap_id', name: 'Activo fijo' },
                                            { key: 'CBML', name: 'CBML' },
                                            { key: 'address', name: 'Dirección' },
                                            { key: 'date', name: 'Fecha Inicia' /*type: 'date'*/ },
                                            { key: 'date', name: 'Fecha Terminación', /*type: 'date'*/ },
                                            { key: 'sap_id', name: 'Número del contrato' },
                                        ]}
                                        onSubmit={filter}
                                    />
                                </div>
                            </div>
                        </div>
                        <TableContract />
                    </Card>
                </div>
            </div>
        </div>
    );
};
