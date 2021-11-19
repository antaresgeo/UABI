

import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    disabled: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: any;
    index: number;
    children: React.ReactNode;
}

export const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    disabled,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber type="number" min={0} disabled={disabled} /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

















// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { Input, Form,  InputNumber} from 'antd';
// import { EditableContext, Item } from './editableContext';

// interface EditableCellProps {
//     title: React.ReactNode;
//     editable: boolean;
//     disabled: boolean;
//     children: React.ReactNode;
//     dataIndex: keyof Item;
//     record: Item;
//     handleSave: (record: Item) => void;
// }

// const EditableCell: React.FC<EditableCellProps> = ({
//     title,
//     editable,
//     disabled,
//     children,
//     dataIndex,
//     record,
//     handleSave,
//     ...restProps
// }) => {
//     const [editing, setEditing] = useState(false);
//     const inputRef = useRef<Input>(null);
//     const form = useContext(EditableContext)!;

//     useEffect(() => {
//         if (editing) {
//             inputRef.current!.focus();
//         }
//     }, [editing]);

//     const toggleEdit = () => {
//         setEditing(!editing);
//         form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//     };

//     const save = async () => {
//         try {
//             const values = await form.validateFields();

//             toggleEdit();
//             handleSave({ ...record, ...values });
//         } catch (errInfo) {
//             console.log('Save failed:', errInfo);
//         }
//     };

//     let childNode = children;

//     if (editable) {
//         childNode = editing ? (
//             <Form.Item
//                 style={{ margin: 0 }}
//                 name={dataIndex}
//                 rules={[
//                     {
//                         required: true,
//                         message: `${title} es obligatorio.`,
//                     },
//                 ]}
//             >
//                 <Input ref={inputRef} onPressEnter={save} onBlur={save} disabled={disabled} />
//             </Form.Item>
//         ) : (
//             <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
//                 {children}
//             </div>
//         );
//     }

//     return <td {...restProps}>{childNode}</td>;
// };

// export default EditableCell;
