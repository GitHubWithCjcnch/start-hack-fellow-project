import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import NavMenu from "../Pages/GlobalTeamDashboard/NavMenu/NavMenu";
import productLogo from '../../../public/Productlogo.png'

async function getByNameStartups(startupName: any) {
    try {
        const res = await axios.post("http://3.75.226.182:8080/api/appuser/getStartups");
        console.log(res)
        const startups = res.status === 200 ? res.data.startups.rows : [];
        const startup = startups.find((startup: any) => startup.name === startupName);
        console.log(startup)
        return startup;
    } catch (err) {
        console.error(err)
    }
}

export const StartupDetailed = () => {
    let { startupname } = useParams()
    const [startup, setStartup] = useState(null)
    useEffect(() => {
        getByNameStartups(startupname).then((data) => setStartup(data))
    }, [startupname])

    return (
        <div className="flex">
            <div className="w-64 bg-gray-900 text-white min-h-screen">
                <NavMenu />
            </div>
            <div className="flex-grow bg-black min-h-screen">
                {startup && (
                    <div className="h-full flex flex-col p-12 gap-14 rounded">
                        <div className="flex flex-row">
                            <Link to="/dashboards#startups"><h1 className="font-bold text-white text-4xl">STARTUPS</h1></Link><h1 className="font-bold text-white text-4xl">{">"} Product Ltd.</h1>
                        </div>
                        <div className="bg-[#191919] text-white p-5 flex flex-col">
                            <div className="flex flex-row mb-5 space-x-5">
                                <img
                                    className="w-2/6 h-2/6 object-contain"
                                    src={productLogo}
                                    alt={`${startup.name} logo`}
                                />
                                <div className="flex flex-col space-y-3">
                                    <h1 className="text-3xl font-bold">{startup.name}</h1>
                                    <p>{startup.description}</p>
                                    <div className="flex flex-row flex-wrap gap-2 py-1">
                                        <span className="px-1.5 py-1 bg-[#460004] font-medium text-white text-xs rounded-[5px]">
                                            {startup.badge}
                                        </span>
                                        {startup.startup_industries.map((industrial, index) => (
                                            <span
                                                key={index}
                                                className="px-1.5 py-1 bg-[#444444] font-medium text-white text-xs rounded-[5px]"
                                            >
                                                {industrial.industry.name}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="download-link" download className="text-blue-500">Download Link</a>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <div className="flex flex-col bg-[#333333] p-2 space-y-3">
                                        <img
                                            className="w-4/5 h-4/5 object-contain"
                                            src={productLogo}
                                            alt={`${startup.name} logo`}
                                        />
                                        <p>Founded in: {startup.foundedYear}</p>
                                        <p>Company Size: {startup.foundedYear}</p>
                                        <p>Founded at: {startup.region}</p>
                                    </div>
                                    <button className="bg-[#FF6100] px-5 py-2 text-white">Schedule Meeting</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
