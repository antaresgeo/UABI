import Avatar from 'antd/lib/avatar';
import { Link } from 'react-router-dom';
import { FC, MouseEventHandler } from 'react';

interface UabiLinkProps extends LinkButtonProps {
    to: any;
}
const UabiLink: FC<UabiLinkProps> = ({ to, ...button_props }) => (
    <Link to={to} className="text-decoration-none">
        <LinkButton {...button_props} />
    </Link>
);

UabiLink.defaultProps = {
    avatar: true,
};

export default UabiLink;

interface LinkButtonProps {
    name: string;
    icon?: any;
    iconText?: string;
    avatar?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
export const LinkButton: FC<LinkButtonProps> = ({ name, icon, iconText, avatar, onClick, className }) => {
    const has_icon = icon || iconText;
    const axu_class = ['d-flex justify-content-center align-items-center uabi-link', className].join(' ');
    return (
        <span className={axu_class} onClick={onClick}>
            <span>{name}</span>
            {has_icon && avatar && (
                <Avatar className="ms-2 text-white" size={28} icon={icon} style={{ backgroundColor: '#1FAEEF' }}>
                    {iconText}
                </Avatar>
            )}
            {has_icon && !avatar && (
                <span className="ms-2" style={{ fontSize: 16 }}>
                    {icon || iconText}
                </span>
            )}
        </span>
    );
};
