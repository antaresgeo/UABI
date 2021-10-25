import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { swal } from "../../../utils";
import { Card } from "../../../utils/ui";
import { actions } from "../redux";
import PolizaForm from '../components/PolizaForm';


const CreateInsurability = () => {
    //const history = useHistory();
    const dispatch = useDispatch();
    
    const createPolicy = async (dataPolicy) => {
        
        const response: any = await dispatch( actions.createPolicy(dataPolicy) );
        await swal("Message", response.message, "success");
        //history.push(`/insurabilities/`);
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Creación de Proyecto">
                        <PolizaForm
                            onSubmit={(values) => {
                                return createPolicy(values);
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CreateInsurability
