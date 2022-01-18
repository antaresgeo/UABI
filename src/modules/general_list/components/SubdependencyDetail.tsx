import React, { FC } from 'react'

interface SubdependencyDetailProps {
    subdependencies: any[];
}

const SubdependencyDetail: FC<SubdependencyDetailProps> = ({ subdependencies }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información De Las Subdependencias
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3">
                            <div className="col-6">
                                <label htmlFor="">Sub. Dependecias</label>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Centro de Costos</label>
                            </div>
                        </div>
                        {subdependencies?.map((subdependency, i) => {
                            return (
                                <div key={i} className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                    <div className="col-6">
                                        <div className="my-3">{subdependency?.subdependency ?? '-'}</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="my-3">{subdependency?.cost_center ?? '-'}</div>
                                    </div>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubdependencyDetail
