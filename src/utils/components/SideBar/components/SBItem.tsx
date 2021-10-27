import { Link } from 'react-router-dom';

interface ISubLink {
    to: string;
    name: string;
}

interface IProps {
    id: string;
    name: string;
    collapse?: boolean;
    sublinks?: ISubLink[];
}

const SBItem = ({ id, name, collapse = true, sublinks }: IProps) => {
    const _id = name.toLowerCase().split(' ').join('-');
    const clsCollapse: string = collapse ? 'collapse' : 'collapse show';
    const btnAriaExpanded = collapse ? 'false' : 'true';

    let subLinks = sublinks?.map((obj) => {
        return (
            <li>
                <Link to={`/${id}${obj.to}`} className="link-dark rounded">
                    {obj.name}
                </Link>
            </li>
        );
    });

    return (
        <li className="mb-1">
            <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#${_id}-collapse`}
                aria-expanded={btnAriaExpanded}
            >
                {name}
            </button>
            <div className={clsCollapse} id={`${_id}-collapse`}>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">{subLinks}</ul>
            </div>
        </li>
    );
};

export default SBItem;
