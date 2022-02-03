export interface Ocupation {
    id: number;
    tenure: string;
    use: string;
    ownership: string;
    contractual: string;
    real_estate_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Observations {
    observation: string;
    user_id: number;
}

export interface PublicServices {
    id: number;
    name: string;
    subscriber: string;
    accountant: string;
    physical_inspection_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Properties {
    id: number;
    name: string;
    status_property: string;
    observation?: any;
    accountant: string;
    physical_inspection_id: number;
    status?: number;
    audit_trail?: any;
}

export interface PhysicalInspection {
    id: number;
    observations: Observations;
    photographic_record: string;
    real_estate_id: number;
    inspection_date: string;
    public_services: PublicServices[];
    properties: Properties[];
    status?: number;
    audit_trail?: any;
}

export interface Owner {
    id: number;
    names_surnames: string;
    document_type: string;
    document_number: number;
    phone_number: number;
    email: string;
    real_estate_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Inspection {
    ocupation: Ocupation;
    physical_inspection: PhysicalInspection;
    owner: Owner;
}


export interface InspectionRequest {
    physical_inspection: Physicalinspection;
    observations: _Observations;
    ocupation: _Ocupation;
    public_services: Publicservice[];
    properties: Property[];
    owner: _Owner;
    photographic_register: Photographicregister;
}

export interface Photographicregister {
    fachada: string;
    generals: any[];
}

export interface _Owner {
    document_number?: any;
    document_type?: any;
    email?: any;
    names_surnames?: any;
    phone_number?: any;
    id: number;
}

export interface Property {
    name: string;
    status_property: string;
    observation: string;
    accountant: string;
    status: string;
}

export interface Publicservice {
    id: number;
    name: string;
    subscriber: string;
    accountant: string;
    physical_inspection_id: number;
    status: number;
    audit_trail: any;
}



export interface _Ocupation {
    tenure: string;
    use: string;
    ownership: string;
    contractual: string;
}

export interface Physicalinspection {
    observations: _Observations;
    photographic_record: string;
    inspection_date: number;
}

export interface _Observations {
    observation: string;
}

export interface NewInspection {
    basic_information: IBasicinformation;
    ocupation: IOcupation;
    physical_inspection: IPhysicalinspection;
    occupant: IOccupant;
    photografic_register: IPhotograficregister;
  }
  
  export interface IPhotograficregister {
    facade: string;
    general: string[];
  }
  
  export interface IOccupant {
    names: string;
    surnames: string;
    document_type: string;
    document_number: number;
    phone_number: number;
    phone_number_ext: number;
    email: string;
  }
  
  export interface IPhysicalinspection {
    observations: string;
    public_services: IPublicservice[];
    properties: IProperty[];
  }
  
  export interface IProperty {
    name: string;
    status_property: string;
    observation: string;
    photographic_evidence: string;
  }
  
  export interface IPublicservice {
    name: string;
    subscriber: number;
    accountant: number;
    status: number;
  }
  
  export interface IOcupation {
    tenure: string;
    use: string;
    ownership: string;
    contractual: string;
  }
  
  export interface IBasicinformation {
    differences: string;
    isAnEspecialCase: boolean;
    special_actions: string;
    report_pdf_id: string;
  }