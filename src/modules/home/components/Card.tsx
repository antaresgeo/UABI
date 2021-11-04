import { Link } from 'react-router-dom';
import UabiCard from '../../../utils/ui/card';
import { FC } from 'react';

interface CardProps {
    name: string;
    links?: { to?: any; name: string }[];
}
const Card: FC<CardProps> = ({ name, links }) => {
    links = links || [];
    return (
        <div className="col-4">
            <UabiCard
                className="h-100 dash-card"
                title={
                    <span style={{ color: '#FF8403', fontWeight: 400 }}>
                        ACCESOS RÁPIDOS{' '}
                        <h5
                            style={{
                                color: '#FF8403',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                marginBottom: 5,
                            }}
                        >
                            {name}
                        </h5>
                    </span>
                }
            >
                <ul className="custom-list-style p-0">
                    {links.map((link, i) => {
                        return (
                            <li key={`link_${i}`} data-icon=">">
                                {link.to && (
                                    <Link to={link.to} style={{ color: 'black', textDecoration: 'none' }}>
                                        {link.name}
                                    </Link>
                                )}
                                {!link.to && `${link.name}`}
                            </li>
                        );
                    })}
                </ul>
            </UabiCard>
        </div>
    );
};

export default Card;
