import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from './../../redux';
import { Link, Card } from '../../../../utils/ui';
import RealEstateList from '../../components/RealEstateList';
import FilterForm from '../../../../utils/ui/filter_form';

const RealEstates = () => {
    const dispatch = useDispatch();

    //const [query, set_query] = useState<string>('');
    const [filters, set_filters] = useState<object>(null);

    // const filter = () => {
    //     dispatch(actions.getRealEstates({ page: 1, q: query }));
    // };

    const filter = async (_filters, _) => {
        set_filters(_filters);
        await dispatch(actions.getRealEstates({ page: 1, with: 'pagination', ..._filters }));
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Bienes Inmuebles"
                        extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
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
                        <RealEstateList withProject /*filters={{ q: query }}*/ />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RealEstates;
