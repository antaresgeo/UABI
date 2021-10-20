import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./../../redux";
import { IRealEstateAttributes } from "../../../../utils/interfaces/components.interfaces";
import { Link, Card } from "../../../../utils/ui";
import RealEstateList from "../../components/RealEstateList";

const RealEstates = () => {
    const dispatch = useDispatch();
    const realEstates: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);
    const [query, set_query] = useState<string>("");
    const [page_size, set_pageSize] = useState<number>(10);
    useEffect(() => {
        dispatch(actions.getRealEstates({}));
    }, []);

    const filter = () => {
        dispatch(actions.getRealEstates({ page: 1, q: query }));
    };

    const change_page = (page, pageSize) => {
        dispatch(actions.getRealEstates({ page,  pageSize, q: query }));
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Administrar Bienes Inmuebles"
                        extra={<Link to="/acquisitions/real-estates/create" name="Crear" iconText="+" />}
                    >
                        <form>
                            <div className="row justify-content-between">
                                <div className="col-5 d-flex">
                                    <div className="col-6 ">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Matricula"
                                                aria-label="Matricula"
                                                aria-describedby="button-addon2"
                                                value={query}
                                                onChange={(e) => {
                                                    set_query(e.target.value)
                                                }}
                                            />
                                            <span className="input-group-text" onClick={filter}>
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/*<div style={{ fontSize: 16, color: "#1FAEEF" }} onClick={filter}>*/}
                                    {/*    <i className="fa fa-filter" aria-hidden="true" />*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </form>
                        <RealEstateList realEstates={realEstates} withProject change_page={change_page}/>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RealEstates;
