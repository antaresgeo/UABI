import { FC, useState, useEffect } from 'react';
import { Field } from 'formik';
import { Card } from '../../../../utils/ui';
import ErrorMessage from '../../../../utils/ui/error_messge';
import LocationModal from '../../../../utils/components/Location/LocationModal';
import { service } from '../../redux';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { extractMonth, formatDate } from '../../../../utils';
import Select from '../../../../utils/ui/select';
import Tooltip from 'antd/lib/tooltip';
import dependencias from '../../dependencias';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './../../redux';
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
    const [subs, set_subs] = useState<any[]>([]);
    const format_list = (list) => {
        if (list && Array.isArray(list)) {
            let aux_list = [...list];
            aux_list = aux_list.map((d: any) => ({
                name: d.name,
                id: d.name,
            }));
            if (aux_list.length > 0) {
                return aux_list;
            }
        }
        return [];
    };

    const dependency_ops = format_list(dependencias);

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
                type = {type}
                disabled = {disabled}
                formik = {formik}
                projects = {projects}
                project = {project}
                inventory = {inventory}
                onProjectSelectedChange = {onProjectSelectedChange}
            />
        </Card>
    );
};

export default GeneralDataForm;
