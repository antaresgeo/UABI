import Modal from 'antd/lib/modal/Modal';
import React, { FC, useState } from 'react'
import { LinkButton } from '../../../utils/ui/link';
import { TableDivideAreas } from './TableDivideAreas';
import { useDispatch } from 'react-redux';

interface LocationModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    total_area?: any;
    formik: any;
    type: string;

}

const ModalDivideAreas: FC<LocationModalProps> = ({ /*onSave,*/ disabled, total_area, formik, type }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const [numberAreas, setNumberAreas] = useState(2)
    const open = () => !disabled && set_is_visible(true);
    const [showTable, setShowTable] = useState(false);
    const [dataSource, setDataSource] = useState([])
    const close = () => set_is_visible(false);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setNumberAreas(([e.target.name] = e.target.value));
    };

    const createTable = () => {
        let data = [];
        for (let i = 1; i <= numberAreas; i++) {
            data.push({
                key: i,
                number: i,
                area: '0',
            })
        }
        setDataSource(data)
    }




    return (
        <>
            <LinkButton
                name="Dividir Área"
                icon={<i className="fa fa-plus-circle" aria-hidden="true" />}
                onClick={() => open()}
            >
            </LinkButton>
            <Modal
                title={`Dividir Área ${type}: ${total_area} m`}
                footer={null}
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                <div className="row">
                    <div className="col-9">
                        <label htmlFor="number_real_estates" className="form-label">
                            En cuantas partes se va a dividir
                        </label>
                        <input
                            type="number"
                            name="numberAreas"
                            className="form-control"
                            placeholder="numero a dividir bien inmueble"
                            autoComplete="off"
                            value={numberAreas}
                            onChange={handleInputChange}
                            min={2}
                            disabled={disabled}
                        />
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-outline-primary my-3"
                            disabled={numberAreas < 2 ? true : false}
                            onClick={() => {
                                if (showTable) {
                                    if (numberAreas) {
                                        createTable();
                                    }
                                } else {
                                    createTable();
                                    setShowTable(true)
                                }
                            }

                            }
                        >
                            siguiente
                        </button>
                    </div>
                </div>
                {showTable &&
                    <>
                        <TableDivideAreas
                            dataSource={dataSource}
                            total_area={total_area}
                            numberAreas={numberAreas}
                            formik={formik}
                            type={type}
                            dispatch={dispatch}
                            close={close}
                            setShowTable={setShowTable}
                            setNumberAreas={setNumberAreas}
                        />
                    </>

                }
            </Modal>
        </>
    )
}

export default ModalDivideAreas
