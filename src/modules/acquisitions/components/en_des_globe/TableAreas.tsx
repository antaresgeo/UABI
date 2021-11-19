import { Card, Link, Table as UiTable } from "../../../../utils/ui";
import { useParams, useLocation } from 'react-router-dom';
import { RealEstateFormModal } from './RealEstateFormModal';

const table_columns = [
    {
        title: 'N°',
        dataIndex: 'value',
        align: 'center' as 'center',
    },
    {
        title: 'Bien inmueble',
        dataIndex: 'name',
        align: 'center' as 'center',
    },
    {
        title: 'Area',
        dataIndex: 'area',
        align: 'center' as 'center',
    },
    {
        title: 'Editar',
        dataIndex: 'id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <RealEstateFormModal/>

                // <Link
                //     to={`/insurabilities/policy/edit/${id}/`}
                //     name=""
                //     avatar={false}
                //     icon={<i className="fa fa-pencil" aria-hidden="true" />}
                // />
            );
        },
    },
];

interface IParams {
    valueArea?: string;
    numberRealEstates?: string;
    data?: any;
}

export const TableAreas = () => {
    const location = useLocation<IParams>();
    const { valueArea,numberRealEstates, data  } =location.state;

    const DataRealEstate = [];
    for (let i = 0; i < Number(numberRealEstates); i++) {
        DataRealEstate.push({
            value: `${i + 1} de ${numberRealEstates}`,
            name: "",
            area: `${(Number(valueArea) / Number(numberRealEstates)).toFixed(2)}`,
            accounting_account: "",
            address: { name: "" },
            cost_center: 0,
            dependency: "",
            description: "",
            destination_type: "",
            management_center: 0,
            materials: "",
            patrimonial_value: 0,
            projects: { id: 0, name: "" },
            reconstruction_value: 0,
            registry_number: "",
            sap_id: null,
            subdependency: "",
            supports_documents: [],
            tipology: "",
            total_area: 0,
            total_percentage: 0,
            zone: ""
        });
    }

    console.log(DataRealEstate);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Areas Bienes Inmuebles"
                    >
                        <UiTable
                            columns={table_columns}
                            items={DataRealEstate}
                            with_pagination
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}
