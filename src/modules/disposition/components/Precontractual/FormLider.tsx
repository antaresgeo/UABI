import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge'


const FormLider = () => {
    return (
        <>
            <h5>Lider encargado</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name_Leader_id" className="form-label">
                        Nombres
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name_Leader_id"
                        name="name_Leader"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="name_Leader" />
                </div>
                <div className="col-6">
                    <label htmlFor="lastname_Leader_id" className="form-label">
                        Apellidos
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="lastname_Leader_id"
                        name="lastname_Leader"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="lastname_Leader" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="post_leader_id" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="post_leader_id"
                        name="post_leader"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="post_leader" />
                </div>
                <div className="col-3">
                    <label htmlFor="dependence_leader_id" className="form-label">
                        dependencia
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="dependence_leader_id"
                        name="dependence_leader"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="dependence_leader" />
                </div>
                <div className="col-3">
                    <label htmlFor="Secretary_leader_id" className="form-label">
                        Secretaria
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="Secretary_leader_id"
                        name="Secretary_leader"
                        placeholder=""
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="Secretary_leader" />
                </div>
            </div>
            <h5>Elaboró</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name_elaborated_id" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name_elaborated_id"
                        name="name_elaborated"
                        placeholder="Nombre del que lo elaboró"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="name_elaborated" />
                </div>
                <div className="col-6">
                    <label htmlFor="post_elaborated_id" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="post_elaborated_id"
                        name="post_elaborated"
                        placeholder="Cargo del que lo elaboró"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="post_elaborated" />
                </div>
            </div>
            <h5>Revisó</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name_revised_id" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name_revised_id"
                        name="name_revised"
                        placeholder="Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="name_revised" />
                </div>
                <div className="col-6">
                    <label htmlFor="post_revised_id" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="post_revised_id"
                        name="post_revised"
                        placeholder="Cargo Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="post_revised" />
                </div>
            </div>
            <h5>Aprobó</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="name_approved_id" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name_approved_id"
                        name="name_approved"
                        placeholder="Nombre del que lo aprobó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="name_approved" />
                </div>
                <div className="col-6">
                    <label htmlFor="post_approved_id" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="post_approved_id"
                        name="post_approved"
                        placeholder="Cargo del que lo aprobó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="post_approved" />
                </div>
            </div>
        </>
    )
}

export default FormLider
