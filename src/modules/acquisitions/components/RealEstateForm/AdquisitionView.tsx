import React, { FC } from 'react';
import { AdquisitionsItf } from '../../../../utils/interfaces';
import AcquisitionList from './AcquisitionList';
import { Card } from '../../../../utils/ui';
import { LinkButton } from '../../../../utils/ui/link';
import AcquisitionModal from './AcquisitionModal';

interface AcquisitionsFromProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    acquisitions?: AdquisitionsItf[];
    formik: any;
}

const AcquisitionsView: FC<AcquisitionsFromProps> = ({ type, disabled, acquisitions, formik }) => {
    return (
        <Card
            title="Información de Adquisición"
            extra={
                <AcquisitionModal
                    type="create"
                    btn_label="Agregar Adquisición"
                    active_type={formik.values.active_type}
                    onChange={async (values, f) => {
                        const new_acquisitions = [...formik.values.acquisitions, values];
                        formik.setFieldValue('acquisitions', new_acquisitions, false);
                    }}
                />
            }
        >
            <div className="col-12">
                <div className="row">
                    <AcquisitionList acquisitions={acquisitions || []} type={type} disabled={disabled} />
                </div>
            </div>
        </Card>
    );
};

AcquisitionsView.defaultProps = {};

export default AcquisitionsView;
