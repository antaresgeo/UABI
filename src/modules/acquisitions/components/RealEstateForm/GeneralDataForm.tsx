import { FC, useState, useEffect } from 'react';
import { Card } from '../../../../utils/ui';
import { IProjectAttributes } from '../../../../utils/interfaces';
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
}

const GeneralDataForm: FC<GeneralDataFormProps> = ({
    type,
    disabled,
    formik,
    project,
    projects,
    inventory,
    onProjectSelectedChange,
}) => {





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
                inventory={inventory}
                onProjectSelectedChange={onProjectSelectedChange}
            />
        </Card>
    );
};

export default GeneralDataForm;
