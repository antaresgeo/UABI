import { FC } from 'react';
import { ErrorMessage as AntErrorMessage, useFormikContext } from 'formik';
import get from 'lodash/get';

interface ErrorMessageProps {
    name?: string;
    withCount?: boolean;
    max?: number;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ name, withCount, max }) => {
    const context = useFormikContext<any>();
    const value = get(context.values, name);
    const hasCount = withCount && (typeof value === 'string' || typeof value === 'number');
    return (
        <div className="row">
            <div className="col">
                <span className="form-error">{name && <AntErrorMessage name={name} />}</span>
            </div>
            {hasCount && (
                <div className="col">
                    <span className="text-end d-block w-100 mt-1" style={{ height: '22px', color: '#F28C02' }}>
                        {`${`${value}`.length}${max ? `/${max}` : ''}`}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ErrorMessage;
