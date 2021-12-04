import { Field } from 'formik';
import ErrorMessage from '../../../../utils/ui/error_messge';

const FormLider = () => {
    return (
        <>
            <h5>Lider encargado</h5>
            <hr />
            <div className="row">
                <div className="col-3">
                    <label htmlFor="username" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="names"
                        placeholder="Nombre del Lider encargado"
                        name="names"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="names" />
                </div>
                <div className="col-3">
                    <label htmlFor="username" className="form-label">
                        Apellido
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="surnames"
                        name="surnames"
                        placeholder="Apellido del Lider encargado"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
                </div>
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="surnames"
                        name="surnames"
                        placeholder="Cargo Lider encargado"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
                </div>
            </div>
            <h5>Elaboró</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="names"
                        placeholder="Nombre del que lo elaboró"
                        name="names"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="names" />
                </div>
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="surnames"
                        name="surnames"
                        placeholder="Cargo del que lo elaboró"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
                </div>
            </div>
            <h5>Revisó</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="names"
                        placeholder="Nombre del que lo revisó"
                        name="names"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="names" />
                </div>
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="surnames"
                        name="surnames"
                        placeholder="Cargo Nombre del que lo revisó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
                </div>
            </div>
            <h5>Aprobó</h5>
            <hr />
            <div className="row">
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        Nombre
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="names"
                        placeholder="Nombre del que lo aprobó"
                        name="names"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="names" />
                </div>
                <div className="col-6">
                    <label htmlFor="username" className="form-label">
                        cargo
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="surnames"
                        name="surnames"
                        placeholder="Cargo del que lo aprobó"
                        autoComplete="off"
                        maxLength={201}
                    />
                    <ErrorMessage name="surnames" />
                </div>
            </div>
        </>
    );
};

export default FormLider;
