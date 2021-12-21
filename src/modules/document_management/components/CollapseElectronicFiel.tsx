import React from 'react'
import { Collapse } from 'antd';
import { Checkbox } from 'antd';
import { Link } from '../../../utils/ui';
import ModalElectronicFiel from './ModalElectronicFiel';

const CollapseElectronicFiel = () => {
    const { Panel } = Collapse;
    function callback(key) {
        console.log(key);
    }


    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ borderRadius: '7px', backgroundColor: '#fff' }} >
                <Panel header="Adquisición" key="1" style={{ fontWeight: "bold" }} extra={ <ModalElectronicFiel />} >
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ borderRadius: '7px', backgroundColor: '#fff', marginTop: '5px' }}>
                <Panel header="Administración de Inventario" key="1" style={{ fontWeight: "bold" }} extra={ <ModalElectronicFiel />}  >
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ borderRadius: '7px', backgroundColor: '#fff', marginTop: '5px' }} >
                <Panel header="Asegurabilidad" key="1" style={{ fontWeight: "bold" }} extra={ <ModalElectronicFiel />}  >
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ borderRadius: '7px', backgroundColor: '#fff', marginTop: '5px' }}>
                <Panel header="Inspección" key="1" style={{ fontWeight: "bold" }} extra={ <ModalElectronicFiel />}  >
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ borderRadius: '7px', backgroundColor: '#fff', marginTop: '5px' }}>
                <Panel header="Disposición" key="1" style={{ fontWeight: "bold" }} extra={ <ModalElectronicFiel />}  >
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ borderRadius: '7px' }}>
                        <div className="col-10">
                            <Checkbox style={{ paddingLeft: '30px' }} onChange={onChange}>
                                <span style={{ fontWeight: "normal" }}>NOMBRE DEL DOCUMENTO</span>
                            </Checkbox>
                        </div>
                        <div
                            className=" col-2 justify-content-end"
                            style={{ paddingLeft: "50px" }}
                        >
                            <Link

                                to={``}
                                name=""
                                avatar={false}
                                icon={
                                    <i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-eye" aria-hidden="true" />
                                }
                            />
                            <Link
                                to={``}
                                name=""
                                avatar={false}
                                icon={<i style={{ marginRight: '5px', color: '#5D5D5D' }} className="fa fa-download" aria-hidden="true" />}
                            />
                        </div>
                    </div>
                </Panel>
            </Collapse>

            <div className="row justify-content-end">
                <div className="col text-end">
                    <button type="submit" className="btn btn-outline-primary" style={{ marginTop: '200px' }} >
                        Nueva Carpeta
                    </button>
                </div>
            </div>
        </>

    )
}

export default CollapseElectronicFiel
