import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../acquisitions/redux';

interface DispositionFormPros {
    dispositionType: string;
    realEstate: any;
}

export const FormDisposition: FC<DispositionFormPros> = ({ dispositionType, realEstate }) => {
    const dispatch = useDispatch();
    const tipology: any = useSelector((store: any) => store.acquisitions.tipology.value);
    useEffect(() => {
        dispatch(actions.getTipology(realEstate?.tipology_id));
    }, []);

    const is_aepDisposition = dispositionType === 'AEP';
    const is_ComodatoDisposition = dispositionType === 'Comodato';
    const is_mtepDisposition = dispositionType === 'MTEP';
    const is_dependenciasDisposition = dispositionType === 'Dependencias';
    const is_ventasDisposition = dispositionType === 'ventas';
    const is_autorizacionesDisposition = dispositionType === 'autorizaciones';
    const showContract =
        !is_aepDisposition &&
        !is_mtepDisposition &&
        !is_dependenciasDisposition &&
        !is_ventasDisposition &&
        !is_autorizacionesDisposition;
    const showAprovechamiento =
        !is_ComodatoDisposition &&
        !is_aepDisposition &&
        !is_mtepDisposition &&
        !is_dependenciasDisposition &&
        !is_ventasDisposition;
    const showInspeccion = !is_dependenciasDisposition && !is_ventasDisposition && !is_autorizacionesDisposition;
    const showCanon =
        !is_ComodatoDisposition &&
        !is_aepDisposition &&
        !is_mtepDisposition &&
        !is_dependenciasDisposition &&
        !is_ventasDisposition &&
        !is_autorizacionesDisposition;

    //const tipologies: ITipologyAttributes[] = useSelector((states: any) => states.acquisitions.tipologies.value);

    // const dispatch = useDispatch()
    //dispatch(actions.getTipologies())
    //console.log(realEstate)
    //realEstate?.tipology_id
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div className="title" style={{ borderBottom: '1px solid #e2e4e4' }}>
                    Datos del bien inmueble
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Nombre</label>
                                <div className="my-3">{realEstate?.name}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Comuna - Barrio</label>
                                <div className="my-3">{realEstate?.address?.location?.commune} - {realEstate?.address?.location?.neighborhood}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">CBML</label>
                                <div className="my-3">{realEstate?.address?.cbmls?.uabi}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Código Activo Sap</label>
                                <div className="my-3">{realEstate?.sap_id}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Dirección</label>
                                <div className="my-3">{realEstate?.address?.address}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Área</label>
                                <div className="my-3">
                                    {realEstate?.total_area}m<sup>2</sup>
                                </div>
                            </div>
                            {dispositionType !== 'autorizaciones' && (
                                <div className="col-3">
                                    <label htmlFor="">Avaluo</label>
                                    <div className="my-3">-</div>
                                </div>
                            )}
                            {dispositionType !== 'ventas' && dispositionType !== 'autorizaciones' && (
                                <div className="col-3">
                                    <label htmlFor="">Tipología</label>
                                    <div className="my-3">{tipology?.tipology}</div>
                                </div>
                            )}
                        </div>
                        {(showInspeccion || showContract || showCanon) && (
                            <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                {showInspeccion && (
                                    <div className="col-3">
                                        <label htmlFor="">Ultima Fecha de Inspección</label>
                                        <div className="my-3">-</div>
                                    </div>
                                )}
                                {showContract && (
                                    <div className="col-3">
                                        <label htmlFor="">Número contrato</label>
                                        <div className="my-3">-</div>
                                    </div>
                                )}
                                {showContract && (
                                    <div className="col-3">
                                        <label htmlFor="">Fecha Terminación Contrato</label>
                                        <div className="my-3">-</div>
                                    </div>
                                )}
                                {showCanon && (
                                    <div className="col-3">
                                        <label htmlFor="">Ultimo Canon de Arrendamiento</label>
                                        <div className="my-3">{realEstate?.canyon_value === null ? 0 : realEstate?.canyon_value}</div>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="row my-3">
                            {showAprovechamiento && (
                                <>
                                    <div className="col-3">
                                        <label htmlFor="">Valor de Aprovechamiento</label>
                                        <div className="my-3">{realEstate?.exploitation_value === null ? 0 : realEstate?.exploitation_value}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Valor Autorización</label>
                                        <div className="my-3">{realEstate?.authorization_value === null ? 0 : realEstate?.authorization_value}</div>
                                    </div>
                                </>
                            )}
                            {/* <div className="col-3">
                                <label htmlFor="">Dependencia</label>
                                <div className="my-3">{realEstate?.dependency}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Subdpendencia</label>
                                <div className="my-3">{realEstate?.subdependency}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// import { Field, Form, Formik } from 'formik';
// import { FC } from 'react';
// import * as Yup from 'yup';

// interface DispositionFormPros {
//     dispositionType: string;
// }

// export const FormDisposition: FC<DispositionFormPros> = ({ dispositionType }) => {
//     const initialValues = {
//     };

//     const submit = (values, actions) => {
//     };

//     const schema = Yup.object().shape({
//     });
//     return (
//         <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
//             <Form>
//                 <div className="row">
//                     <div className="col-3-3">
//                         <label htmlFor="type_use_id" className="form-label">
//                             - Inmueble
//                         </label>
//                         <Field
//                             type="text"
//                             id="type_use_id"
//                             name="type_use"
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="col-3-3">
//                         <label htmlFor="active_type_id" className="form-label">
//                             comnuna / Barrio
//                         </label>
//                         <Field
//                             type="text"
//                             id="active_type_id"
//                             name="active_type"
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="col-3-3">
//                         <label htmlFor="active_type_id" className="form-label">
//                             CBML
//                         </label>
//                         <Field
//                             type="text"
//                             id="active_type_id"
//                             name="active_type"
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="col-3-3">
//                         <label htmlFor="active_type_id" className="form-label">
//                             Código Activo Sap
//                         </label>
//                         <Field
//                             type="text"
//                             id="active_type_id"
//                             name="active_type"
//                             className="form-control"
//                         />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-3-3">
//                         <label htmlFor="active_type_id" className="form-label">
//                             dirección
//                         </label>
//                         <Field
//                             type="text"
//                             id="active_type_id"
//                             name="active_type"
//                             className="form-control"
//                         />
//                     </div>
//                     <div className="col-3-3">
//                         <label htmlFor="active_type_id" className="form-label">
//                             área
//                         </label>
//                         <Field
//                             type="text"
//                             id="active_type_id"
//                             name="active_type"
//                             className="form-control"
//                         />
//                     </div>
//                     {(dispositionType !== "autorizaciones") &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 avaluo
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                     {(dispositionType !== "ventas" && dispositionType !== "autorizaciones" ) &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 tipología
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                 </div>
//                 <div className="row">
//                     {(dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Inspección
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                     {(dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Número contrato
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                     {(dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Fecha terminación contrato
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                     {(dispositionType !== "Comodato" && dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Ultimo canon de arrendamiento
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     }
//                 </div>
//                 {(dispositionType !== "Comodato" && dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas") &&
//                     <div className="row">
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Valor de aprovechamiento
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col-3-3">
//                             <label htmlFor="active_type_id" className="form-label">
//                                 Valor autorización
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="active_type_id"
//                                 name="active_type"
//                                 className="form-control"
//                             />
//                         </div>
//                     </div>
//                 }

//             </Form>
//         </Formik>
//     )
// }
