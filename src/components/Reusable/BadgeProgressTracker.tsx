import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BadgeProgressTracker = () => {
  const totalParticipants = 32;
  const badgeStartDate = new Date("2024-01-01");
  const badgeEndDate = new Date("2024-04-30");

  const startDateFormatted = badgeStartDate.toLocaleDateString();
  const endDateFormatted = badgeEndDate.toLocaleDateString();

  return (
    <div className="rounded-sm bg-[#191919] p-4 text-white">
      <div className="font-semibold text-lg mb-4 flex items-center space-x-4">
        <FontAwesomeIcon icon={faUsers} />
        <span className="mr-2">Active Badge - START UP 24</span>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="flex items-center space-x-2 text-[#FF6100]">
          <p className="text-white">{`${startDateFormatted} - ${endDateFormatted}`}</p>
          <div className="w-2 h-2 rounded-full bg-[#FF6100]"></div>
          <p className="text-white">{totalParticipants} participants</p>
        </div>
        <Link to="/badge-details" className="font-bold text-[#FE8902] hover:text-[#ff8f42]">View all participants</Link>
      </div>
    </div>
  )
}

export default BadgeProgressTracker;
