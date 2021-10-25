import { Card } from '../../../utils/ui';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../utils/interfaces/components.interfaces';
import { useEffect } from 'react';
import { actions } from '../redux';


interface IParams {
    id: string;
}
const DetailInsurability = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const police: IPolicyAttributes = useSelector((store: any) => store.asegurabilty.policy.value);
    console.log(police);
    useEffect(() => {
        dispatch(actions.getPolicy(id));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title={
                            <>
                                <div className='row mt-2'>
                                    <div className="col-11">
                                        <b>Póliza:</b> { }
                                    </div>
                                    <div className="col-1">
                                        <Link
                                            to={`/insurability/policy/edit/${police.id}`}
                                            className="btn btn-success"
                                        >
                                            Editar
                                        </Link>

                                    </div>
                                </div>
                                
                            </>
                        }

                    >
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="matricula" className="form-label" >Matrícula</label>
                                    <input
                                        type="text"
                                        id="matricula"
                                        name="matricula"
                                        placeholder="Número Matrícula"
                                        className="form-control"
                                        value={police.matricula}
                                        disabled />
                                </div>

                                <div className="col-4">
                                    <label htmlFor="initialDate" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
                                    <input
                                        type="date"
                                        id="initialDate"
                                        name="initialDate"
                                        placeholder="Fecha Inicial"
                                        className="form-control"
                                        value={police.initialDate}
                                        disabled
                                    />
                                </div>

                                <div className="col-4">
                                    <label htmlFor="finalDate" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
                                    <input
                                        type="date"
                                        id="finalDate"
                                        name="finalDate"
                                        placeholder="Fecha Final"
                                        className="form-control"
                                        value={police.finalDate}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="ensuranceAgent" className="form-label">Corredor de Seguros</label>
                                    <select
                                        id="ensuranceAgent"
                                        name="ensuranceAgent"
                                        className="w-100 form-select form-control"
                                        value={police.ensuranceAgent}
                                        disabled
                                    >
                                        <option value="" selected disabled>
                                            --Corredor--
                                        </option>
                                        <option value="vera1">
                                            Vera 1
                                        </option>
                                        <option value="vera2">
                                            Vera 2
                                        </option>
                                        <option value="vera3">
                                            Vera 3
                                        </option>
                                    </select>
                                </div>

                                <div className="col-4">
                                    <label htmlFor="ensuranceCompany" className="form-label">Compañía de Seguros</label>
                                    <select
                                        id="ensuranceCompany"
                                        name="ensuranceCompany"
                                        className='w-100 form-select'
                                        value={police.ensuranceCompany}
                                        disabled
                                    >
                                        <option value="" selected disabled>
                                            --Compañía--
                                        </option>
                                        <option value="sura1">
                                            Sura 1
                                        </option>
                                        <option value="sura2">
                                            Sura 2
                                        </option>
                                        <option value="sura3">
                                            Sura 3
                                        </option>
                                    </select>
                                </div>

                                <div className="col-4">
                                    <label htmlFor="ensuranceValue" className="form-label">Valor Asegurado</label>
                                    <input
                                        type="number"
                                        id="ensuranceValue"
                                        name="ensuranceValue"
                                        placeholder="Valor Asegurado"
                                        className="form-control"
                                        value={police.ensuranceValue}
                                        disabled
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="ensuranceFile" className="form-label">Agregue Póliza</label>
                                    <input
                                        type="file"
                                        id="ensuranceFile"
                                        name="ensuranceFile"
                                        placeholder="Agregue Póliza"
                                        className="form-control"
                                        value={police.ensuranceFile}
                                        disabled
                                    />
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default DetailInsurability

