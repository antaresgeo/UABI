import Card from "antd/lib/card";
import { FC } from "react";

interface UabiCardProps {
    title: any;
    extra?: any;
}
const UabiCard: FC<UabiCardProps> = ({ title, extra, children }) => {
    const ops = {
        title,
        bordered: false,
        className: "uabi-content mb-4",
        ...(extra ? { extra } : {}),
    };
    return <Card {...ops}>{children}</Card>;
};

export default UabiCard;
