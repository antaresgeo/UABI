const months = (num) => {

    switch (num) {
        case 1:
        case '01':
            return 'enero';
        case 2:
        case '02':
            return 'febrero';
        case '03':
            return 'marzo';
        case '04':
            return 'abril';
        case '05':
            return 'mayo';
        case '06':
            return 'junio';
        case '07':
            return 'julio';
        case '08':
            return 'agosto';
        case '09':
            return 'septiembre';
        case '10':
            return 'octubre';
        case '11':
            return 'noviembre';
        case '12':
            return 'diciembre';
        default:
            break;
    }
};

export default months;
