import React, { useState } from 'react'
import { Card, Link } from '../../../utils/ui'
import { TableDiszposition } from '../components/TableDisposition';



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
                    <Card
                        //title="Búsqueda del Bien Inmueble"
                        actions={[
                            <>
                                <div className="col text-end" style={{marginRight: 20}}>
                                <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={filter}
                            >
                                Buscar
                            </button>
                                </div>
                            </>
                        ]}
                    >
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">Matrícula</label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    placeholder="Matrícula"
                                    aria-label="Matricula"
                                    name="enrollment"
                                    value={enrollment}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Nombre"
                                    aria-label="nombre"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="">Dirección</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Dirección"
                                    aria-label="dirección"
                                    name="address"
                                    value={address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                    </Card>
                    <Card
                        title="Disposición"
                    //extra={<Link to="/insurabilities/policy/create/" name="Crear" iconText="+" />}
                    >
                        <TableDiszposition />
                    </Card>
                </div>
            </div>
        </div>
    )
}
