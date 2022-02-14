import { FC } from 'react';
import { Card } from '../../../../utils/ui';
import { AdquisitionsItf, IProjectAttributes } from '../../../../utils/interfaces';
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
    tipologies?: any[];
    dependencies?: any;
}

const GeneralDataForm: FC<GeneralDataFormProps> = ({
    type,
    disabled,
    tipologies,
    formik,
    project,
    projects,
    inventory,
    inventoryEdit,
    onProjectSelectedChange,
    acquisitions,
    dependencies,
}) => {
    //console.log(acquisitions)

    return (
        <Card
            title="Información del Inmueble"
            actions={
                [
                    // <div className="d-flex flex-row-reverse px-3 py-1">
                    //     <button type="button" className="btn btn-primary">
                    //         Guardar {isSubmitting && (
                    //                     <i
                    //                         className="fa fa-spinner fa-spin"
                    //                         style={{ fontSize: 12, marginLeft: 4, color: '#fff' }}
                    //                     />
                    //                 )}
                    //     </button>
                    // </div>,
                ]
            }
        >
            <DataRealEstateForm
                type={type}
                tipologies={tipologies}
                dependencies={dependencies}
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
