import { Card } from '../../../utils/ui';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../utils/interfaces/insurability';
import { useEffect } from 'react';
import { actions } from '../redux';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import { getRealEstates } from "../../acquisitions/redux/actions/realEstates";
import PolizaForm from '../components/PolizaForm';

interface IParams {
    id: string;
}
const DetailInsurability = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const policy: IPolicyAttributes = useSelector((store: any) => store.asegurabilty.policy.value);
    const realEstate: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    useEffect(() => {
        dispatch(getRealEstates({}));
        dispatch(actions.getPolicy(id));
    }, [])

    const getPolicy = async (dataPolicy) => {
        console.log(dataPolicy);
        const action = actions.getPolicy(id);
        await dispatch(action);

    }


    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Póliza"
                    >
                        <PolizaForm
                            disabled
                            realEstates={realEstate}
                            policy={policy}
                            onSubmit={(values) => {
                                return getPolicy(values);
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
        // <div className="container-fluid">
        //     <div className="row justify-content-center">
        //         <div className="col-md-12">
        //             <Card
        //                 title={
        //                     <>
        //                         <div className='row'>
        //                             <div className="col-10">
        //                                 <b>Póliza:</b>
        //                             </div>
        //                             <div className="col-2">
        //                                 <Link
        //                                     to={`/insurability/policy/edit/${police?.id || ''}`}
        //                                     className="btn btn-success"
        //                                 >
        //                                     Editar
        //                                 </Link>

        //                             </div>
        //                         </div>

        //                     </>
        //                 }

        //             >
        //                 <form>
        //                     <div className="row">
        //                         <div className="col-4">
        //                             <label htmlFor="matricula" className="form-label" >Matrícula</label>
        //                             <input
        //                                 type="text"
        //                                 id="matricula"
        //                                 name="matricula"
        //                                 placeholder="Número Matrícula"
        //                                 className="form-control"
        //                                 value={ police?.registry_number || '' }
        //                                 disabled />
        //                         </div>

        //                         <div className="col-4">
        //                             <label htmlFor="initialDate" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
        //                             <input
        //                                 type="date"
        //                                 id="initialDate"
        //                                 name="initialDate"
        //                                 placeholder="Fecha Inicial"
        //                                 className="form-control"
        //                                 value={police.vigency_start}
        //                                 disabled
        //                             />
        //                         </div>

        //                         <div className="col-4">
        //                             <label htmlFor="finalDate" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
        //                             <input
        //                                 type="date"
        //                                 id="finalDate"
        //                                 name="finalDate"
        //                                 placeholder="Fecha Final"
        //                                 className="form-control"
        //                                 value={police.vigency_end}
        //                                 disabled
        //                             />
        //                         </div>
        //                     </div>

        //                     <div className="row">
        //                         <div className="col-4">
        //                             <label htmlFor="ensuranceAgent" className="form-label">Corredor de Seguros</label>
        //                             <select
        //                                 id="ensuranceAgent"
        //                                 name="ensuranceAgent"
        //                                 className="w-100 form-select form-control"
        //                                 value={police?.insurance_broker || ''}
        //                                 disabled
        //                             >
        //                                 <option value="" selected disabled>
        //                                     --Corredor--
        //                                 </option>
        //                                 <option value="vera1">
        //                                     Vera 1
        //                                 </option>
        //                                 <option value="vera2">
        //                                     Vera 2
        //                                 </option>
        //                                 <option value="vera3">
        //                                     Vera 3
        //                                 </option>
        //                             </select>
        //                         </div>

        //                         <div className="col-4">
        //                             <label htmlFor="ensuranceCompany" className="form-label">Compañía de Seguros</label>
        //                             <select
        //                                 id="ensuranceCompany"
        //                                 name="ensuranceCompany"
        //                                 className='w-100 form-select'
        //                                 value={police?.insurance_company || ''}
        //                                 disabled
        //                             >
        //                                 <option value="" selected disabled>
        //                                     --Compañía--
        //                                 </option>
        //                                 <option value="sura1">
        //                                     Sura 1
        //                                 </option>
        //                                 <option value="sura2">
        //                                     Sura 2
        //                                 </option>
        //                                 <option value="sura3">
        //                                     Sura 3
        //                                 </option>
        //                             </select>
        //                         </div>

        //                         <div className="col-4">
        //                             <label htmlFor="ensuranceValue" className="form-label">Valor Asegurado</label>
        //                             <input
        //                                 type="number"
        //                                 id="ensuranceValue"
        //                                 name="ensuranceValue"
        //                                 placeholder="Valor Asegurado"
        //                                 className="form-control"
        //                                 value={police?.insurance_value || ''}
        //                                 disabled
        //                             />
        //                         </div>

        //                     </div>
        //                     <div className="row">
        //                         <div className="col-8">
        //                             <label htmlFor="insurance_document_id" className="form-label">Agregue Póliza</label>
        //                             <input
        //                                 type="file"
        //                                 id="insurance_document_id"
        //                                 name="insurance_document_id"
        //                                 placeholder="Agregue Póliza"
        //                                 className="form-control"
        //                                 // value={police?.insurance_document_id || ''}
        //                                 disabled
        //                             />
        //                         </div>
        //                         <div className="col-4">
        //                             <label htmlFor="real_estate_id" className="form-label">Agregue Bien Inmueble</label>
        //                             <input
        //                                 type="number"
        //                                 id="real_estate_id"
        //                                 name="real_estate_id"
        //                                 placeholder="Agregue Póliza"
        //                                 className="form-control"
        //                                 disabled
        //                                 value={police?.real_estate_id || ''}

        //                             />
        //                         </div>



        //                     </div>
        //                 </form>
        //             </Card>
        //         </div>
        //     </div>
        // </div>

    );
};

export default DetailInsurability;
