import Card from 'antd/lib/card';
import { CSSProperties, FC } from 'react';

interface UabiCardProps {
    title?: any;
    extra?: any;
    actions?: any;
    className?: string;
    bodyStyle?: CSSProperties;
    style?: CSSProperties;
}
const UabiCard: FC<UabiCardProps> = ({ title, extra, actions, children, className, bodyStyle, style }) => {
    const ops = {
        title,
        bordered: false,
        className: [className, 'uabi-content'].join(' '),
        bodyStyle,
        style: style || { marginBottom: '1.5rem' },
        ...(extra ? { extra } : {}),
        ...(actions ? { actions } : {}),
    };
    return <Card {...ops}>{children}</Card>;
};

export default UabiCard;
