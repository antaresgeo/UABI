import React, { useState } from 'react'
import { Card, Link } from '../../../utils/ui'
import { TableDisposition } from './../components/TableDisposition';


export const ListDisposition = () => {
    const [query, set_query] = useState({
        enrollment: '',
        name: '',
        address: '',
    });

    const { enrollment, name, address } = query;

    const handleInputChange = ({ target }) => {
        set_query({
            ...query,
            [target.name]: target.value,
        });
    };

    const filter = async () => {
        console.log(query);
        //TODO: hacer dispatch
        //const resultado: any = await dispatch(getRealEstates({ page: 1, q: enrollment }));
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card>
                        <div className="row justify-content-center">
                            <div className="col">
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
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="nombre"
                                    aria-label="nombre"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="dirección"
                                    aria-label="dirección"
                                    name="address"
                                    value={address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={filter}
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>

                    </Card>
                    <Card
                        title="Disposición"
                    //extra={<Link to="/insurabilities/policy/create/" name="Crear" iconText="+" />}
                    >
                        <TableDisposition />
                    </Card>
                </div>
            </div>
        </div>
    )
}
