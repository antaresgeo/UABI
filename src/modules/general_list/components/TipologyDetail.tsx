import React, { FC } from 'react';
import { Tipology } from '../redux/service';

interface TipologyDetailProps {
    tipology: Tipology;
}
const TipologyDetail: FC<TipologyDetailProps> = ({ tipology }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información De La Tipología
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-2">
                                <label htmlFor="">Código</label>
                                <div className="my-3">{tipology?.id}</div>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Nombre de la Tipología</label>
                                <div className="my-3">{tipology?.tipology ?? '-'}</div>
                            </div>
                            <div className="col-5">
                                <label htmlFor="">Cuenta Contable</label>
                                <div className="my-3">{tipology?.accounting_account ?? '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipologyDetail;
