import Avatar from "antd/lib/avatar";
import { Link } from "react-router-dom";
import { FC } from "react";

interface UabiLinkProps {
    to: any;
    name: string;
    icon?: any;
    iconText?: string;
    avatar?: boolean;
    className?: string
}
const UabiLink: FC<UabiLinkProps> = ({ to, name, icon, iconText, avatar, className }) => {
    const has_icon = icon || iconText;
    const axu_class = ["d-flex justify-content-center align-items-center uabi-link", className].join(" ")
    return (
        <Link className={axu_class} to={to}>
            <span>{name}</span>
            {has_icon && avatar && (
                <Avatar size={28} icon={icon} style={{ backgroundColor: "#1FAEEF", color: "#fff" }}>
                    {iconText}
                </Avatar>
            )}
            {has_icon && !avatar && <div style={{fontSize: 16}}>{icon || iconText}</div>}
        </Link>
    );
};

UabiLink.defaultProps = {
    avatar: true,
};

export default UabiLink;
