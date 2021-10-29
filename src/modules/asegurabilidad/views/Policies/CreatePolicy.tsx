import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { swal } from "../../../../utils";
import { Card } from "../../../../utils/ui";
import { actions } from "../../redux";
import { useEffect } from 'react';
import { getRealEstates } from "../../../acquisitions/redux/actions/realEstates";
import PolizaForm from '../../components/PolizaForm';
import { IRealEstateAttributes } from '../../../../utils/interfaces/realEstates';


const CreateInsurability = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const realEstate: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    useEffect(() => {
        //dispatch(getRealEstates({}));
    }, [])
    console.log(realEstate);
    const createPolicy = async (dataPolicy) => {
        const response: any = await dispatch(actions.createPolicy(dataPolicy));
        //await swal("Message", response.message, "success");
        //history.push(`/insurabilities/`);
    };
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Creación de Póliza">
                                <PolizaForm
                                    realEstates={realEstate}
                                    onSubmit={(values) => {
                                        return createPolicy(values);
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    );
};

export default CreateInsurability;
