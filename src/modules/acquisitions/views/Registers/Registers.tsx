import React, { useEffect } from 'react'

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

    const [query, set_query] = useState<string>('');
    // const [page_size, set_pageSize] = useState<number>(10);

    useEffect(() => {
        dispatch(actions.getRealEstates({}));
    }, []);

    const filter = () => {
        dispatch(actions.getRealEstates({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.getRealEstates({ page, pageSize, q: query }));
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Administrar Bienes Inmuebles"
                        extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
                    >
                        <form>
                            <div className="row justify-content-between">
                                <div className="col-5 d-flex">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Matricula / proyecto / dependencia "
                                                aria-label="Matricula"
                                                aria-describedby="button-addon2"
                                                value={query}
                                                onChange={(e) => {
                                                    set_query(e.target.value);
                                                }}
                                            />
                                            <span className="input-group-text" onClick={filter}>
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <RealEstateList withProject register />
                    </Card>
                </div>
            </div>
        </div>
    );}

export default Registers
