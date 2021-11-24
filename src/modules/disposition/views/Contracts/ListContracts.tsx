import React from 'react'
import { TableContract } from '../../components/Contractual/TableContract'
import { Card, Link } from '../../../../utils/ui';

export const ListContracts = () => {
    return (
        <Card
            title="Contratos del Bien Inmuebles"
        >

            <TableContract />
        </Card>
    )
}
