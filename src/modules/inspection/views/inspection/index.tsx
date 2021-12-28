import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListInspection from '../../components/ListInspection';
import actions from './../../../acquisitions/redux/actions/index';

const Inspectios = () => {
    const dispatch = useDispatch();
    const inspections: any = useSelector((store: any) => store.inspection.inspections.value);
    const projects: any = useSelector((store: any) =>  store.acquisitions.projects.value)
    const loading: boolean = useSelector((states: any) => states.acquisitions.projects.loading);
    const { total_results } = useSelector((store: any) => store.acquisitions.projects.pagination);
    const [query, set_query] = useState<string>('');

    // const loading: boolean = useSelector((store: any) => store.inspection.inspections.loading);
    // const { total_results } = useSelector((store: any) => store.inspection.inspections.pagination);


    // const [query, set_query] = useState<string>('');
    // const filter = () => {
    //     const filters = { page: 1, ...(query ? { q: query } : {}) };
    //     dispatch(actions.get_all_inspections(filters));
    // };

    // const change_page = (page, pageSize) => {
    //     const filters = { page, pageSize /*, ...(query ? { q: query } : {})*/ };
    //     dispatch(actions.get_all_inspections(filters));
    // };

    const filter = async (_filters, _) => {
        await dispatch(actions.getProjects({ page: 1, with: 'pagination', ..._filters }));
    };
    // const filter = () => {
    //     dispatch(actions.getProjects({ page: 1, q: query }));
    // };

    const change_page = (page, pageSize) => {
        dispatch(actions.getProjects({ page, pageSize, q: query }));
    };



    // useEffect(() => {
    //     dispatch(actions.get_all_inspections());
    // }, []);

    useEffect(() => {
        dispatch(actions.clearProjects());

    }, []);

    return (
        <ListInspection
            inspections={inspections}
            projects={projects}
            filter={filter}
            change_page={change_page}
            loading={loading}
            total_results={total_results}
        />
    );
};

export default Inspectios;
