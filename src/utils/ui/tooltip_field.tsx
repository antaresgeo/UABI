import { InfoOutlined } from '@ant-design/icons';
import Popover from 'antd/lib/popover';
import { FC } from 'react';

interface TooltipFieldProps {
    text: string;
}
const TooltipField: FC<TooltipFieldProps> = ({ text }) => {
    return (
        <Popover
            content={text}
            onPopupAlign={() => console.log('onPopupAlign')}
            onVisibleChange={() => console.log('onVisibleChange')}
        >
            <div className="info-tooltip">
                <InfoOutlined />
            </div>
        </Popover>
    );
};

export default TooltipField;
