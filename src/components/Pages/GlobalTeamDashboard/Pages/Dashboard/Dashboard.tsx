import Notifications from "@/components/Reusable/Notifications";
import SlackLogo from '../../../../../assets/slack_logo.svg'
import NotionLogo from '../../../../../assets/notion_logo.png'
import AsanaLogo from '../../../../../assets/asana_logo.png'
import { Link } from "react-router-dom";
import Tasks  from "@/components/Reusable/Tasks/Tasks";
import BadgeProgressTracker from "@/components/Reusable/BadgeProgressTracker";

export default function Dashboard() {
    return (
        <div className="h-screen space-y-10">
            <div className="w-full flex justify-center">
                <span className="text-white text-4xl font-bold uppercase my-10">HI Paul!</span>
            </div>
            <div className="flex space-x-20">
                <div className="flex flex-col space-y-10">
                    <div className="flex space-x-4">
                        <Link className="flex flex-col items-center px-14 py-5 bg-[#333333] rounded transition-colors ease-in-out duration-200 hover:bg-[#444444]" to="">
                            <img src={SlackLogo} alt="slack_logo" className="w-16 h-16 mb-2 object-contain" />
                            <span className="font-bold text-white whitespace-nowrap">Slack</span>
                        </Link>
                        <Link className="flex flex-col items-center px-14 py-5 bg-[#333333] rounded transition-colors ease-in-out duration-200 hover:bg-[#444444]" to="">
                            <img src={NotionLogo} alt="notion_logo" className="w-16 h-16 mb-2 object-contain" />
                            <span className="font-bold text-white whitespace-nowrap">Notion</span>
                        </Link>
                        <Link className="flex flex-col items-center px-14 py-5 bg-[#333333] rounded transition-colors ease-in-out duration-200 hover:bg-[#444444]" to="">
                            <img src={AsanaLogo} alt="asana_logo" className="w-16 h-16 mb-2 object-contain" />
                            <span className="font-bold text-white whitespace-nowrap">Asana</span>
                        </Link>
                    </div>
                    <Tasks />
                </div>
                <div className="w-2/4">
                    <Notifications
                        notification={{
                            type: 'travel',
                            title: 'Travel Request',
                            company: 'Some Company Name'
                        }}
                    />
                </div>
            </div>
            <div>
                <BadgeProgressTracker />
            </div>
        </div>
    )
}
