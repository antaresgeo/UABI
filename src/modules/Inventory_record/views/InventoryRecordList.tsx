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
    const [realEstateFilter, setRealEstateFilter] = useState([])

    const [query, set_query] = useState({
        enrollment: ''
        // dependence: '',
        // project: '',
    });

    const { enrollment } = query;

    useEffect(() => {
        dispatch(getRealEstates({}));
    }, []);

    const handleInputChange = ({ target }) => {
        set_query({
            ...query,
            [target.name]: target.value,
        });
    };

    const filter = async () => {
        console.log(enrollment);
        const resultado: any = await dispatch(getRealEstates({ page: 1, q: enrollment }));
        setRealEstateFilter(resultado.results)
        setTable(true);
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card>
                        <div className="row justify-content-center">
                            <div className="col" style={{ marginLeft: '300px'}}>
                                <div className="input-group" >
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Matricula"
                                        aria-label="Matricula"
                                        name="enrollment"
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
                            <RealEstateList withProject filters={enrollment} register realEstateFilter={realEstateFilter} />
                        </Card>

                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryRecordList;
