import Menu  from 'antd/lib/menu';
import { MailOutlined } from '@ant-design/icons';
import { Link } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';

export const DropdownNotification = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const history = useHistory();
    const handleClick = (e) => {
        if (e.key !== 'ver mas') {
            history.push(`/notification/${e.key}/`);
        }
    };
    return (
        <Menu onClick={handleClick} style={{ width: 200, boxShadow: '0 0 10px #CCC', borderRadius: '5px' }}>
            {items.map((item) => (
                <Menu.Item key={item} icon={<MailOutlined />}>
                    {item} menu item
                </Menu.Item>
            ))}
            <Menu.Item
                key="ver mas"
                className="text-center"
                style={{ borderTop: '1px solid #CCC', color: 'rgb(109, 163, 250)' }}
            >
                <Link to={`/notification/`} name="ver mas..." />
            </Menu.Item>
        </Menu>
    );
};

// ReactDOM.render(
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//       Hover me <DownOutlined />
//     </a>
//   </Dropdown>,
//   mountNode,
// );
