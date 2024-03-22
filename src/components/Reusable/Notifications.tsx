import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faClipboard,
  faMoneyBillWave,
  faClock,
  faUserFriends,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Notification {
  type: "travel" | "coaching" | "reimburse" | "attendance" | "intro";
  title: string;
  company: string;
}

interface MainProps {
  notifications: Notification[];
}

const ICONS = {
  travel: <FontAwesomeIcon icon={faPlane} size="sm" />,
  coaching: <FontAwesomeIcon icon={faClipboard} size="sm" />,
  reimburse: <FontAwesomeIcon icon={faMoneyBillWave} size="sm" />,
  attendance: <FontAwesomeIcon icon={faClock} size="sm" />,
  intro: <FontAwesomeIcon icon={faUserFriends} size="xs" />,
};

const Notifications: FC<MainProps> = ({ notifications }) => {
  return (
    <div className="w-full p-5 rounded-lg bg-[#191919] text-white gap-3.5 flex flex-col">
      <div className="font-bold text-lg flex items-center space-x-3">
        <FontAwesomeIcon icon={faBell} />
        <h2 className="ml-2">Notifications</h2>
      </div>
      {notifications.map((item, index) => (
        <div className="flex flex-row p-4 rounded-md bg-[#333333] gap-2.5">
          <div className="flex items-center justify-center bg-[#191919] rounded-full h-8 w-8">
            {ICONS[item.type]}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <h4 className="font-bold">{item.title}</h4>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <p>from</p>
              <span className="bg-[#460004] rounded-sm p-1.5 font-medium text-sm">
                {item.company}
              </span>
            </div>
          </div>
        </div>
      ))}
      <Link
        to="/dashboards#dashboard"
        className="font-bold text-[#FE8902] hover:text-[#ff8f42]"
      >
        View all Meetings
      </Link>
    </div>
  );
};

export default Notifications;
