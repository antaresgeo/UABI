import React from 'react';
import { TableContract } from '../../components/Contractual/TableContract';
import { Card } from '../../../../utils/ui';

export const ListContracts = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Contratos">
                        <TableContract />
                    </Card>
                </div>
            </div>
        </div>
    );
};
