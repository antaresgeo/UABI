import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./../../redux";
import { IRealEstateAttributes } from "../../../../utils/interfaces/components.interfaces";
import { Link, Card } from "../../../../utils/ui";
import RealEstateList from "../../components/RealEstateList";

const RealEstates = () => {
    const dispatch = useDispatch();
    const realEstates: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);

    useEffect(() => {
        dispatch(actions.getRealEstates());
    }, []);

    console.log(realEstates);
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
                                                placeholder="Nombre / Código"
                                                aria-label="Nombre / Código"
                                                aria-describedby="button-addon2"
                                            />
                                            <span className="input-group-text">
                                                <span>
                                                    <i className="fa fa-search" aria-hidden="true"/>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        to=""
                                        className="ml-4"
                                        name="Filtro de búsqueda"
                                        avatar={false}
                                        icon={<i className="fa fa-filter" aria-hidden="true" />}
                                    />
                                </div>
                            </div>
                        </form>
                        <RealEstateList realEstates={realEstates} withProject />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RealEstates;
