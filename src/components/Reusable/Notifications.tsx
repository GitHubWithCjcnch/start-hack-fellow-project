import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faClipboard, faMoneyBillWave, faClock, faUserFriends, faBell } from '@fortawesome/free-solid-svg-icons';

interface MainProps {
    notification: {
        type: 'travel' | 'coaching' | 'reimburse' | 'attendance' | 'intro',
        title: string,
        company: string
    };
}

const ICONS = {
    'travel': <FontAwesomeIcon icon={faPlane} />,
    'coaching': <FontAwesomeIcon icon={faClipboard} />,
    'reimburse': <FontAwesomeIcon icon={faMoneyBillWave} />,
    'attendance': <FontAwesomeIcon icon={faClock} />,
    'intro': <FontAwesomeIcon icon={faUserFriends} />,
};

const Notifications: FC<MainProps> = ({ notification }) => {
    const { type, title, company } = notification;

    return (
        <div className="mx-auto max-w-lg p-5 rounded-sm bg-[#191919] text-white">
            <div className="flex items-center mb-5">
                <FontAwesomeIcon icon={faBell} />
                <h2 className="ml-2">Notifications</h2>
            </div>
            <div className="p-4 rounded-md bg-[#333333]">
                <div className="flex items-center mb-4">
                    <div className="bg-[#191919] rounded-full px-2 py-1">
                        {ICONS[type]}
                    </div>
                    <h4 className="ml-2 font-bold">{title}</h4>
                </div>
                <div>from <span className='bg-[#460004] rounded-sm p-1.5'>{company}</span></div>
            </div>
        </div>
    );
}

export default Notifications;