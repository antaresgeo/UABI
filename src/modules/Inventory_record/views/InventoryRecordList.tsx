import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../redux';
import { useState } from 'react';
import { Card, Link } from '../../../utils/ui';
import { IRealEstateAttributes } from '../../../utils/interfaces';
import { getRealEstates } from '../../acquisitions/redux/actions/realEstates';
import RealEstateList from '../../acquisitions/components/RealEstateList';


const InventoryRecordList = () => {
    const dispatch = useDispatch();
    const [table, setTable] = useState(false);
    const registers: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);
    //const { total_results } = useSelector((store: any) => store.acquisitions.realEstates.pagination);

    const [query, set_query] = useState({
        enrollment: ''
        // dependence: '',
        // project: '',
    });

    const { enrollment } = query;
    // const [page_size, set_pageSize] = useState<number>(10);

    useEffect(() => {
        dispatch(getRealEstates({}));
    }, []);

    const handleInputChange = ({ target }) => {
        set_query({
            ...query,
            [target.name]: target.value,
        });
    };

    const filter = () => {
        setTable(true);
        //dispatch(getRealEstates({ page: 1, q: query }));
    };

    // const change_page = (page, pageSize) => {
    //     dispatch(getRealEstates({ page, pageSize, q: query }));
    // };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card>
                        <div className="row justify-content-center">
                            <div className="col" style={{ marginLeft: '200px'}}>
                                <div className="input-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Matricula"
                                        aria-label="Matricula"
                                        value={enrollment}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="col" style={{ marginRight: '100px'}}>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={filter}

                                >
                                    Buscar
                                </button>
                            </div>

                            {/* <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dependencia a Cargo"
                                    name="dependence"
                                    value={dependence}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Proyecto Asignado / sin proyecto"
                                    name="project"
                                    value={project}
                                    onChange={handleInputChange}
                                />
                            </div> */}
                        </div>

                    </Card>
                    {table &&
                        <Card
                            title="Administrar Bienes Inmuebles"
                            extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
                        >
                            <form></form>
                            <RealEstateList withProject filters={enrollment} register />
                        </Card>

                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryRecordList;
