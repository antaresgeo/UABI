import React from 'react';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
// import EditableCell from './editableCell';

export const EditableContext = React.createContext<FormInstance | null>(null);

export interface Item {
    key: string;
    name: string;
    age: string;
    address: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

export default EditableRow;
