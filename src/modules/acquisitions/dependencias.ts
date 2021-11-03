export type Dependencies = Dependence[];

export interface SubDependence {
    name: string;
    cost_center: string;
}

export interface Dependence {
    name: string;
    management_center: string;
    cost_center: string;
    subs: SubDependence[];
}

const data = Object.freeze([
    {
        name: 'ALCALDÍA',
        management_center: '70000000',
        cost_center: '70001000',
        subs: [
            {
                name: 'GERENCIA DE PROYECTOS ESTRATÉGICOS',
                cost_center: '70002000',
            },
            { name: 'GERENCIA ÉTNICA', cost_center: '70003000' },
            {
                name: 'GERENCIA DE DIVERSIDADES SEXUALES E IDENTIDADES DE GENERO',
                cost_center: '70004000',
            },
        ],
    },

    {
        name: 'SECRETARÍA PRIVADA',
        management_center: '70100000',
        cost_center: '70101000',
        subs: [],
    },
    {
        name: 'SECRETARÍA DE COMUNICACIONES',
        management_center: '70200000',
        cost_center: '70201000',
        subs: [
            { name: 'SUBS. COMUNICACIÓN ESTRATÉGICA', cost_center: '70202000' },
        ],
    },

    {
        name: 'SECRETARÍA DE EVALUACION Y CONTROL',
        management_center: '70300000',
        cost_center: '70301000',
        subs: [
            {
                name: 'SUBS. DE EVALUACION Y SEGUIMIENTO',
                cost_center: '70302000',
            },
            {
                name: 'SUBS. DE ASESORIA Y ACOMPAÑAMIENTO',
                cost_center: '70303000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE GOBIERNO Y GESTION DEL GABINETE',
        management_center: '73100000',
        cost_center: '73101000',
        subs: [],
    },
    {
        name: 'GERENCIA DE CORREGIMIENTOS',
        management_center: '76000000',
        cost_center: '76002000',
        subs: [
            { name: 'GERENCIA DEL CENTRO', cost_center: '76003000' },
            {
                name: 'GERENCIA DE PROYECTOS ESTRATÉGICOS',
                cost_center: '76004000',
            },
            { name: 'GERENCIA ÉTNICA', cost_center: '76005000' },
            {
                name: 'GERENCIA DE DIVERSIDADES SEXUALES E IDENTIDADES DE GENERO',
                cost_center: '76006000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE HACIENDA',
        management_center: '70400000',
        cost_center: '70401000',
        subs: [
            { name: 'SUBS. DE INGRESOS', cost_center: '70402000' },
            { name: 'SUBS. DE TESORERIA', cost_center: '70403000' },
            {
                name: 'SUBS. PRESUPUESTO Y GESTIÓN FINANCIERA',
                cost_center: '70404000',
            },
        ],
    },

    {
        name: 'SECRETARÍA GENERAL',
        management_center: '70500000',
        cost_center: '70501000',
        subs: [
            {
                name: 'SUBS. DE PREVENCI. DEL DAÑO ANTIJURIDICO',
                cost_center: '70502000',
            },
            {
                name: 'SUBS. DE DEFENSA Y PROTECC. DE LO PUBLIC',
                cost_center: '70503000',
            },
        ],
    },

    {
        name: 'SECRETARÍA GESTIÓN HUMANA Y SERVICIO A LA CIUDADANÍA',
        management_center: '70600000',
        cost_center: '70601000',
        subs: [
            { name: 'SUBS. GESTIÓN HUMANA', cost_center: '70602000' },
            { name: 'SUBS. SERVICIO A LA CIUDADANÍA', cost_center: '70603000' },
            { name: 'SUBS. DESARROLLO INSTITUCIONAL', cost_center: '70604000' },
            {
                name: 'TECNOLOGÍA Y GESTIÓN DE LA INFORMACIÓN',
                cost_center: '70605000',
            },
        ],
    },

    {
        name: 'SECRETARÍA SUMINISTROS Y SERVICIOS',
        management_center: '70700000',
        cost_center: '70701000',
        subs: [],
    },

    {
        name: 'SECRETARÍA DE EDUCACION',
        management_center: '71100000',
        cost_center: '71101000',
        subs: [
            {
                name: 'SUBS. ADMINISTRATIVA Y FINANCIERA ',
                cost_center: '71102000',
            },
            { name: 'SUBS. DE PLANEACION EDUCATIVA', cost_center: '71103000' },
            {
                name: 'SUBS. PRESTACIÓN DEL SERVICIO EDUCATIVO',
                cost_center: '71104000',
            },
            {
                name: 'UNIDAD ADMINISTRATIVA ESPECIAL SIN PJ BUEN COMIENZO',
                cost_center: '71105000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE PARTICIPACION CIUDADANA',
        management_center: '71200000',
        cost_center: '71201000',
        subs: [
            { name: 'SUBS. DE ORGANIZACIÓN SOCIAL', cost_center: '71202000' },
            {
                name: 'SUBS. DE FORMACION Y PARTI. CIUDADANA',
                cost_center: '71203000',
            },
            {
                name: 'SUBS. DE PLANEACION LOCAL Y PPTO PARTICI',
                cost_center: '71204000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE CULTURA CIUDADANA',
        management_center: '71300000',
        cost_center: '71301000',
        subs: [
            { name: 'SUBS. DE CIUDADANIA CULTURAL', cost_center: '71302000' },
            { name: 'SUBS. DE ARTE Y CULTURA', cost_center: '71303000' },
            {
                name: 'SUBS. DE LECTURA, BIBLIOTECAS Y PATRIMONIO',
                cost_center: '71304000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE SALUD',
        management_center: '72100000',
        cost_center: '72101000',
        subs: [
            {
                name: 'SUBS. GESTION DE SERVICIOS DE SALUD',
                cost_center: '72102000',
            },
            { name: 'SUBS. DE SALUD PUBLICA', cost_center: '72103000' },
            {
                name: 'SUBS. ADMINISTRATIVA Y FINACIERA',
                cost_center: '72104000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE INCLUSION SOCIAL,  FAMILIA Y DERECHOS HUMANOS',
        management_center: '72200000',
        cost_center: '72201000',
        subs: [
            { name: 'SUBS. DE GRUPOS POBLACIONALES', cost_center: '72202000' },
            {
                name: 'SUBS. TÉCNICA DE INCLUSIÓN SOCIAL',
                cost_center: '72203000',
            },
            { name: 'SUBS. DE DERECHOS HUMANOS', cost_center: '72204000' },
        ],
    },

    {
        name: 'SECRETARÍA DE LAS MUJERES',
        management_center: '72300000',
        cost_center: '72301000',
        subs: [
            { name: 'SUBS. DE DERECHOS', cost_center: '72302000' },
            { name: 'SUBS. DE TRANSVERSALIZACION', cost_center: '72303000' },
        ],
    },

    {
        name: 'SECRETARÍA DE LA JUVENTUD',
        management_center: '72400000',
        cost_center: '72401000',
        subs: [],
    },
    {
        name: 'SECRETARÍA DE LA NO VIOLENCIA',
        management_center: '72500000',
        cost_center: '72501000',
        subs: [
            { name: 'SUBS. DE JUSTICIA RESTAURATIVA', cost_center: '72502000' },
            {
                name: 'SUBS. DE CONSTRUCCIÓN DE PAZ TERRITORIAL',
                cost_center: '72503000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE SEGURIDAD Y CONVIVENCIA',
        management_center: '73200000',
        cost_center: '73201000',
        subs: [
            {
                name: 'SUBS. PLANEACION DE LA SEGURIDAD',
                cost_center: '73202000',
            },
            {
                name: 'SUBS. OPERATIVA DE LA SEGURIDAD',
                cost_center: '73203000',
            },
            {
                name: 'FONDO TERRITORIAL DE SEGURIDAD Y CONVIVENCIA CIUDADANA-FONSET',
                cost_center: '73204000',
            },
            {
                name: 'SUBS. DE GOBIERNO LOCAL Y CONVIVENCIA',
                cost_center: '73205000',
            },
            { name: 'SUBS. ESPACIO PÚBLICO', cost_center: '73206000' },
        ],
    },

    {
        name: 'DPTO ADMINISTRATIVO DE  GESTIÓN DEL RIESGO DE DESASTRES',
        management_center: '73300000',
        cost_center: '73301000',
        subs: [
            {
                name: 'SUBS. CONOCIMIENTO Y GESTIÓN DEL RIESGO',
                cost_center: '73302000',
            },
            { name: 'SUBD. DE MANEJO DE DESASTRES', cost_center: '73303000' },
            {
                name: 'FONDO MUNICIPAL GESTIÓN DEL RIESGO',
                cost_center: '73304000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE INFRAESTRUCTURA FISICA',
        management_center: '74100000',
        cost_center: '74101000',
        subs: [
            {
                name: 'SUBS. PLANEACIÓN DE LA INFRAESTRUCTURA PÚBLICA ',
                cost_center: '74102000',
            },
            {
                name: 'SUBS. CONSTRUCCIÓN Y MANTENIMIENTO',
                cost_center: '74103000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DEL MEDIO AMBIENTE',
        management_center: '74200000',
        cost_center: '74201000',
        subs: [
            { name: 'SUB. DE GESTION AMBIENTAL', cost_center: '74202000' },
            {
                name: 'SUBS. RECURSOS NATURALES RENOVABLES',
                cost_center: '74203000',
            },
            {
                name: 'SUBS. PROTECCIÓN Y BIENESTAR ANIMAL ',
                cost_center: '74204000',
            },
        ],
    },

    {
        name: 'SECRETARÍA DE MOVILIDAD',
        management_center: '74300000',
        cost_center: '74301000',
        subs: [
            {
                name: 'SUBS. DE SEGURIDAD VIAL Y CONTROL',
                cost_center: '74302000',
            },
            { name: 'SUBS. LEGAL', cost_center: '74303000' },
            { name: 'SUBS. TÉCNICA', cost_center: '74304000' },
            { name: 'GERENCIA MOVILIDAD HUMANA', cost_center: '74301000' },
        ],
    },

    {
        name: 'SECRETARÍA DE DESARROLLO ECONOMICO',
        management_center: '75100000',
        cost_center: '75101000',
        subs: [
            { name: 'SUBS. DE DESARROLLO RURAL', cost_center: '75102000' },
            {
                name: 'SUBS. DE CREACION Y FORTALE. EMPRESARIAL',
                cost_center: '75103000',
            },
            { name: 'SUBS. DE TURISMO', cost_center: '75104000' },
        ],
    },

    {
        name: 'SECRETARÍA DE INNOVACIÓN DIGITAL',
        management_center: '75200000',
        cost_center: '75201000',
        subs: [
            {
                name: 'SUBS. SERVICIOS DE TECNOLOGÍAS DE LA INFORMACIÓN',
                cost_center: '75202000',
            },
            { name: 'SUBS. CIUDAD INTELIGENTE', cost_center: '75203000' },
        ],
    },

    {
        name: 'DPTO. ADMINISTRATIVO DE PLANEACION',
        management_center: '76100000',
        cost_center: '76101000',
        subs: [
            {
                name: 'SUBD. DE PLANEACION SOCIAL Y ECONOMICA',
                cost_center: '76102000',
            },
            {
                name: 'SUBD. DE  PROSPECTIVA, INFORMACION Y  EVALUACION  ESTRATEGICA',
                cost_center: '76103000',
            },
            {
                name: 'SUBD.  PLANEACION TERRITORIAL Y ESTRATRATEGICA DE  CIUDAD',
                cost_center: '76104000',
            },
        ],
    },

    {
        name: 'SECRETARÍA GESTIÓN Y CONTROL TERRITORIAL',
        management_center: '76200000',
        cost_center: '76201000',
        subs: [
            { name: 'SUBS. DE CONTROL URBANÍSTICO', cost_center: '76202000' },
            { name: 'SUBS. DE CATASTRO', cost_center: '76203000' },
            { name: 'SUBS. DE SERVICIOS PÚBLICOS', cost_center: '76204000' },
        ],
    },
]);
export default data;
