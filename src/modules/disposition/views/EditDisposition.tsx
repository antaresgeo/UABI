import { useEffect, useState } from 'react';
import { Card } from '../../../utils/ui';
import { FormDisposition } from '../components/FormDisposition';
import { FormTypeDisposition } from '../components/FormTypeDisposition';
import { useHistory, useParams } from 'react-router-dom';
import { ModalNotificar } from '../components/ModalNotificar';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../acquisitions/redux';
import { IRealEstateAttributes } from '../../../utils/interfaces';
import { TableContract } from '../components/Contractual/TableContract';

interface IProps {
    id: string;
}
export const EditDisposition = () => {
    const { id } = useParams<IProps>();
    const dispatch = useDispatch();
    const history = useHistory();
    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const [dispositionType, setDispositionType] = useState('');
    // console.log('realEstate', realEstate);
    useEffect(() => {
        dispatch(actions.getRealEstate(id));
    }, [id]);
    const typeDisposition = (value) => {
        setDispositionType(value);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Tipo Disposición" extra={<ModalNotificar />}>
                                <FormTypeDisposition
                                    realEstate={realEstate}
                                    onTypeDispositionChange={typeDisposition}
                                />
                            </Card>
                            <FormDisposition realEstate={realEstate} dispositionType={dispositionType} />
                            {/* <Card
                                title=""
                            >
                                <FormDisposition
                                    dispositionType={dispositionType}
                                />
                            </Card> */}

                            <Card title="Contratos del Bien Inmueble">
                                <TableContract />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 8, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                {dispositionType !== '' && (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            history.push({ pathname: '/disposition/create/', state: { dispositionType, realEstate } });
                        }}
                    >
                        iniciar proceso Jurídico
                    </button>
                )}
            </div>
        </div>
    );
};
