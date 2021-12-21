import React from 'react'
import { Card } from '../../../utils/ui';
import ElectronicFielList from '../components/ElectronicFielList';

const Electronic_file_list= () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title="Expediente Electrónico"
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
                                                // value={query}
                                                onChange={(e) => {
                                                    // set_query(e.target.value);
                                                }}
                                            />
                                            <span className="input-group-text" /*onClick={filter}*/ >
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
                        <ElectronicFielList />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Electronic_file_list
