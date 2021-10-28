import { Input } from 'semantic-ui-react';
import { Card } from '../../../../utils/ui';
import { FC } from 'react';
interface SupportDocsProps {}
const SupportDocs: FC<SupportDocsProps> = () => {
    return (
        <Card title="Documentos Soporte">
            <div className="row">
                <div className="col-3">
                    <label htmlFor="form-select" className="form-label">
                        Nombre del Documento
                    </label>
                    <Input />
                </div>
                <div className="col-3">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                            Default file input example
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                        <div id="emailHelp" className="form-text">
                            Escritura.pdf
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <label htmlFor=""></label>
                    <button type="submit" className="btn btn-primary mr-3">
                        Subir
                    </button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col text-start">
                    <button type="submit" className="btn btn-primary mr-3">
                        Guardar
                    </button>
                    <button type="button" className="btn btn-primary mx-3" onClick={() => {} /*_createRealEstate*/}>
                        Agregar
                    </button>
                </div>
            </div>
        </Card>
    );
};
export default SupportDocs;
