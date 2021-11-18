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
}

const active_type = ['Lote', 'Mejora', 'Construccion', 'Construccion para demoler', 'Mejora para demoler'];

const AcquisitionsView: FC<AcquisitionsFromProps> = ({ type, disabled, acquisitions }) => {
    return (
        <Card
            title="Información de Adquisición"
            extra={
                <AcquisitionModal
                    type="create"
                    btn_label="Agregar Adquisición"
                    onChange={(values, f) => {
                        console.log('acquisitions list', values);
                        return Promise.resolve()
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
