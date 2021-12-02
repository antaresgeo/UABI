import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Card, Link } from '../../../utils/ui';
import { getRealEstates } from '../../acquisitions/redux/actions/realEstates';
import RealEstateList from '../../acquisitions/components/RealEstateList';
import FilterForm from './../../../utils/ui/filter_form';

const InventoryRecordList = () => {
    const dispatch = useDispatch();
    const [filters, set_filters] = useState<object>(null);

    const change_page = (page, pageSize) => {
        dispatch(getRealEstates({ page, pageSize, with: 'pagination',...filters }));
    };

    const filter = async (_filters, _) => {
        set_filters(_filters)
        await dispatch(getRealEstates({ page: 1,with: 'pagination', ..._filters }));
    };

    useEffect(() => {
        dispatch(getRealEstates({}));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Administrar Bienes Inmuebles"
                        extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
                    >
                        <div className="row justify-content-between">
                            <div className="col-5 d-flex">
                                <div className="col-6 ">
                                    <FilterForm
                                        filters={[
                                            { key: 'CBML', name: 'CBML' },
                                            { key: 'registry_number', name: 'Matrícula' },
                                            { key: 'project.name', name: 'Proyecto' },
                                            { key: 'address', name: 'Dirección' },
                                            { key: 'sap_id', name: 'Activo fijo' },
                                        ]}
                                        onSubmit={filter}
                                    />
                                </div>
                            </div>
                        </div>

                        <RealEstateList withProject register change_page={change_page} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default InventoryRecordList;
