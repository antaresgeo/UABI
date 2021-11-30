import { FC, useState, useEffect } from 'react';
import { Card } from '../../../../utils/ui';
import { AdquisitionsItf, IProjectAttributes } from '../../../../utils/interfaces';
import dependencias from '../../dependencias';
import { DataRealEstateForm } from './DataRealEstateForm';

interface GeneralDataFormProps {
    type?: 'view' | 'edit' | 'create';
    disabled?: boolean;
    formik: any;
    projects: IProjectAttributes[];
    onProjectSelectedChange?: (value) => void;
    project?: any;
    inventory?: boolean;
    inventoryEdit?: boolean;
    acquisitions?: AdquisitionsItf[];
}

const GeneralDataForm: FC<GeneralDataFormProps> = ({
    type,
    disabled,
    formik,
    project,
    projects,
    inventory,
    inventoryEdit,
    onProjectSelectedChange,
    acquisitions,
}) => {
    //console.log(acquisitions)




    return (
        <Card
            title="Información del Inmueble"
            actions={
                [
                    // <div className="d-flex flex-row-reverse px-3 py-1">
                    //     <button type="button" className="btn btn-primary">
                    //         Guardar
                    //     </button>
                    // </div>,
                ]
            }
        >
            <DataRealEstateForm
                type={type}
                disabled={disabled}
                formik={formik}
                projects={projects}
                project={project}
                inventoryEdit={inventoryEdit}
                inventory={inventory}
                onProjectSelectedChange={onProjectSelectedChange}
                acquisitions={acquisitions}
            />
        </Card>
    );
};

export default GeneralDataForm;
