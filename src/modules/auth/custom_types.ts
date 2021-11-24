export interface User {
    id: number;
    groups: any[];
    user_permissions: any[];
    last_login?: any;
    is_superuser: boolean;
    username: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    name: string;
    email: string;
    first_name: string;
    last_name: string;
    mobile_number: string;
    phone_number: string;
    is_new_user: boolean;
    user_type: string;
    business_center?: any;
    provider?: any;
}

export interface RequestAccessBody {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    customer_team: string;
    comment: string;
}

export interface PasswordResetBody {
    password: string;
    code?: string;
}
