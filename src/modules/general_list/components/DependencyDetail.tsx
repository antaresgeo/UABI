import React, { FC } from 'react'
import { Dependency } from '../redux/service/dependency'

interface DependencyDetailProps {
    dependency: Dependency;
}

const DependencyDetail: FC<DependencyDetailProps> = ({ dependency }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información De La Dependencia
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-6">
                                <label htmlFor="">Dependencia</label>
                                <div className="my-3">{dependency?.dependency ?? '-'}</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Centro Gestor</label>
                                <div className="my-3">{dependency?.management_center ?? '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DependencyDetail
