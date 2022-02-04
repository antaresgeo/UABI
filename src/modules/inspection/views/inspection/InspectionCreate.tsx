import { FC, useEffect } from 'react';
import InspectionFormTags from '../../components/inspectionFormTags';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';
import { getRealEstate } from '../../../acquisitions/redux/actions/realEstates';
import { getTipology } from './../../../acquisitions/redux/actions/realEstates';

interface PruebaProps {}

interface IParams {
    real_estate_id: string;
}

const mask = {
    basic_information: {
        differences: '',
        isAnEspecialCase: false,
        special_actions: '',
        report_pdf_id: '',
    },
    ocupation: {
        tenure: '',
        use: '',
        ownership: '',
        contractual: '',
    },
    physical_inspection: {
        observations: '',
        public_services: [
            {
                name: '',
                subscriber: 0,
                accountant: 0,
                status: 0,
            },
        ],
        properties: [
            {
                name: '',
                status_property: '',
                observation: '',
                photographic_evidence: '',
            },
        ],
    },
    occupant: {
        names: '',
        surnames: '',
        document_type: '',
        document_number: 0,
        phone_number: 0,
        phone_number_ext: 0,
        email: '',
    },
    photografic_register: {
        facade: '',
        general: [''],
    },
};

const InspectionCreate: FC<PruebaProps> = () => {
    const dispatch = useDispatch();
    const { real_estate_id } = useParams<IParams>();
    const inspection: any = useSelector((store: any) => store.inspection.inspection.value);
    const real_estate: any = useSelector((store: any) => store.acquisitions.realEstate.value);
    const Tipology: any = useSelector((store: any) => store.acquisitions.tipology.value);
    const user = useSelector((store: any) => store.auth.user);
    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    };
    useEffect(() => {
        dispatch(actions.get_inspection_by_real_estate_id(real_estate_id));
        dispatch(getRealEstate(real_estate_id));
    }, []);
    useEffect(() => {
        if (real_estate && !Tipology) {
            console.log('bi', real_estate);
            dispatch(getTipology(real_estate?.tipology_id));
        }
    }, [real_estate]);

    const realEstate = {
        ...real_estate,
        tipology: Tipology,
    };
    return <InspectionFormTags inspection={inspection} real_estate={realEstate} user={aux_user} />;
};

export default InspectionCreate;
