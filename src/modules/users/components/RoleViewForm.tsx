import React, { FC } from 'react'

interface IUserFormPros {
    role: any;
}
const RoleViewForm: FC<IUserFormPros> = ({ role }) => {
    console.log(role)
    let contar = 0;
    const valores = role?.permits?.filter((role, i )=> i < 10);
    const valores2 = role?.permits?.filter((role, i )=> i >= 10 && i < 20);
    const valores3 = role?.permits?.filter((role, i )=> i>= 20 && i < 30);
    const valores4 = role?.permits?.filter((role, i )=> i >= 30 && i < 40);

    console.log(valores)

    return (
        <div className="col-3-12">
            <div className="content_box_table" >
                <div className="title" style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}>Información del Rol</div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-12" >
                                <label htmlFor="">Rol</label>
                                <div className="my-3">{role.name}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                        <label htmlFor="">Permisos</label>
                            <div className="col-3" >

                                <div className="my-3">
                                    <ul>
                                        {valores.map(v => <li>{v.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" >
                                <label htmlFor=""></label>
                                <div className="my-3">
                                    <ul>
                                        {valores2.map(v => <li>{v.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" >
                                <label htmlFor=""></label>
                                <div className="my-3">
                                    <ul>
                                        {valores3.map(v => <li>{v.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" >
                                <label htmlFor=""></label>
                                <div className="my-3">
                                    <ul>
                                        {valores4.map(v => <li>{v.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleViewForm
