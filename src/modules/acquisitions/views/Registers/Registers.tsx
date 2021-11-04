import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { IRealEstateAttributes } from '../../../../utils/interfaces/realEstates';
import { actions } from '../../redux';
import { useState } from 'react';
import { Card, Link } from '../../../../utils/ui';
import RealEstateList from '../../components/RealEstateList';

const Registers = () => {
    const dispatch = useDispatch();
    const registers: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);
    const { total_results } = useSelector((store: any) => store.acquisitions.realEstates.pagination);

    const [query, set_query] = useState({
        enrollment: '',
        dependence: '',
        project: '',
    });

    const { enrollment, dependence, project } = query;
    // const [page_size, set_pageSize] = useState<number>(10);

    useEffect(() => {
        dispatch(actions.getRealEstates({}));
    }, []);

    const handleInputChange = ({ target }) => {
        set_query({
            ...query,
            [target.name]: target.value,
        });
    };

    const filter = () => {
        dispatch(actions.getRealEstates({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        // dispatch(actions.getRealEstates({ page, pageSize, q: query }));
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Filtros">
                        <div className="row">
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Matricula"
                                    name="enrollment"
                                    value={enrollment}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-4">
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
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col text-end">
                                <button onClick={filter} className="btn btn-primary my-3">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </Card>
                    <Card
                        title="Administrar Bienes Inmuebles"
                        extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
                    >
                        <form></form>
                        <RealEstateList withProject register />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Registers;
