import { swal_warning } from '../../../../utils';
import { create_document } from '../../../../utils/components/DocumentsModal/services';

const doc_required_message = (supports_documents) => {
    const missing_docs = supports_documents
        .filter((d) => !d.id)
        .filter((d) => !d.hasOwnProperty('pdf') || !d.pdf);
    if (missing_docs.length > 0) {
        const _text = `${missing_docs.length > 1 ? 'Los' : 'El'} Archivo${
            missing_docs.length > 1 ? 's' : ''
        } ${missing_docs
            .map((doc) => doc.label)
            .join(', ')
            .replace(/, ([^,]*)$/, ' y $1')} ${
            missing_docs.length > 1 ? 'son' : 'es'
        } obligatorio${missing_docs.length > 1 ? 's' : ''}`;
        swal_warning.fire({
            title: 'Documentos Requeridos',
            text: _text,
        });
        return true;
    } else {
        return false;
    }
};

export const compute_doc_policy = async (insurance_document) => {
    console.log(insurance_document)
    // if (
    //     insurance_document.filter((d) => d.hasOwnProperty('pdf') && d.pdf)
    //         .length > 0
    // ) {
    //     console.log('se cumplio la condicion')
    //     if (doc_required_message(insurance_document)) {
    //         return Promise.reject();
    //     } else {
    //         const docs_to_create = insurance_document.map((d) => {
    //             if (d.hasOwnProperty('pdf') && !!d.pdf) {
    //                 return { ...d, action: 'create' };
    //             }
    //             return { ...d, action: 'none' };
    //         });
    //         return docs_to_create;
    //     }
    // } else {

    //     console.log('no se cumplio la condicion')
    //     if (doc_required_message(insurance_document)) {
    //         return Promise.reject();
    //     } else {
    //         return insurance_document.map((d) => ({ ...d, action: 'none' }));
    //     }
    // }
};

export const upload_documents = (docs) => {
    const promises = [];
    if (docs && Array.isArray(docs)) {
        docs.filter((d) => d.action === 'create').forEach((d) => {
            promises.push(create_document(d));
        });
    }
    return Promise.all(promises).then((res) => {
        const no_action_docs = docs.filter((d) => d.action === 'none');
        return [...no_action_docs, ...res].map((d) => d.id).join(',');
    });
};
