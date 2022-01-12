
import { clearObjectNulls } from '../..';
import { http } from '../../../config/axios_instances';



const format_persona = (results: any) => {

    return clearObjectNulls( {

        ...results,
        documentType: results.document_type,
        documentNumber: results.document_number,
        names: { firstName: results.first_name, lastName: results.last_name },
        surnames: { firstSurname: results.first_surname, lastSurname: results.last_surname },
        phoneNumber: results.phone_number,
        phoneNumber_ext: results.phone_number_ext,
    })
}

export const getPersonalInformation = async (type, id_number) => {
    const res = await http.get('/personal-information/', {
        params: {
            dt: type,
            dn: id_number,
        },
    });
    res.data.results = format_persona(res.data.results)
    return res.data.results;
};

export const newPersonalInformation = async (body) => {
    const res = await http.post('/personal-information/', {
        ...body,
    });
    res.data.results = format_persona(res.data.results)
    return res.data.results;
};

export const updatePersonalInformation = async (body) => {
    const res = await http.put('/personal-information/', {
        ...body,
    });
    res.data.results = format_persona(res.data.results)
    return res.data.results;
};
