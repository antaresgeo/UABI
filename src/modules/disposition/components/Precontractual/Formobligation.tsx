import { Field } from 'formik';
import ErrorMessage from './../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';

export const Formobligation = () => {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="recovery_value_id" className="form-label">
                        Valor Recobro
                        <Tooltip title="el valor se calcula cada mes de acuerdo al valor de factura por EPM y distribución correspondiente">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>


                    <ErrorMessage name="recovery_value" />
                </div>
            </div>
        </>
    )
}
