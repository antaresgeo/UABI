import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import ListInspection from '../../components/ListInspection';

const Inspectios = () => {
    const dispatch = useDispatch();
    const inspections: any = useSelector((store: any) => store.inspection.inspections.value);
    const loading: boolean = useSelector((store: any) => store.inspection.inspections.loading);
    const { total_results } = useSelector((store: any) => store.inspection.inspections.pagination);
    // const [query, set_query] = useState<string>('');
    // const filter = () => {
    //     const filters = { page: 1, ...(query ? { q: query } : {}) };
    //     dispatch(actions.get_all_inspections(filters));
    // };

    const change_page = (page, pageSize) => {
        const filters = { page, pageSize /*, ...(query ? { q: query } : {})*/ };
        dispatch(actions.get_all_inspections(filters));
    };

    useEffect(() => {
        dispatch(actions.get_all_inspections());
    }, []);

    return (
        <ListInspection
            inspections={inspections}
            change_page={change_page}
            loading={loading}
            total_results={total_results}
        />
    );
};

export default Inspectios;
