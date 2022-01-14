import Card from 'antd/lib/card';
import { CSSProperties, FC } from 'react';

interface SabiCardProps {
    title?: any;
    extra?: any;
    actions?: any;
    className?: string;
    bodyStyle?: CSSProperties;
    style?: CSSProperties;
}
const SabiCard: FC<SabiCardProps> = ({ title, extra, actions, children, className, bodyStyle, style }) => {
    const ops = {
        title,
        bordered: false,
        className: [className, 'sabi-content'].join(' '),
        bodyStyle,
        style: style || { marginBottom: '1.5rem' },
        ...(extra ? { extra } : {}),
        ...(actions ? { actions } : {}),
    };
    return <Card {...ops}>{children}</Card>;
};

export default SabiCard;
