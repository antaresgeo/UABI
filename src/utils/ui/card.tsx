import Card from 'antd/lib/card';
import { FC } from 'react';

interface UabiCardProps {
    title?: any;
    extra?: any;
    actions?: any;
    className?: string;
}
const UabiCard: FC<UabiCardProps> = ({ title, extra, actions, children, className }) => {
    const ops = {
        title,
        bordered: false,
        className: ['uabi-content mb-4', className].join(' '),
        ...(extra ? { extra } : {}),
        ...(actions ? { actions } : {}),
    };
    return <Card {...ops}>{children}</Card>;
};

export default UabiCard;
