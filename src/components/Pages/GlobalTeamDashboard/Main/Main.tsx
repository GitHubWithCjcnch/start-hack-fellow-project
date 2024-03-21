import { FC } from "react";

interface MainProps {
    page: any;
}

const Main: FC<MainProps> = ({ page }) => {
    return (
        <div className="flex-grow break-all overflow-auto">
            {page}
        </div>
    )
}

export default Main;