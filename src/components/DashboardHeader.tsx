import { Bell, Search } from "lucide-react";
import MyButton from "./ui/Button";

type MainFeaturesNavigationType = {
    id: number;
    title: string;
    isDisable: boolean;
}[]

const mainFeaturesNavigation: MainFeaturesNavigationType = [
    {
        id: 0,
        title: "Tasks",
        isDisable: false,
    },
    {
        id: 1,
        title: "Notes",
        isDisable: false,
    },
    {
        id: 2,
        title: "Chat",
        isDisable: true,
    },
]


const DashboardHeader = () => {
    return (
        <div className="flex items-center w-full h-full gap-10">

            <div className="w-full h-full flex justify-start items-center">
                <Search className="absolute text-TextColorLightMode translate-x-3 translate-y-0.5" size={20} color="#313131" strokeWidth={'1'} />
                <input type="text" name="" id="" className="w-full h-10 bg-SoftPrimary rounded-md placeholder:text-sm px-10 py-3 focus:outline-none border border-PrimaryLight" placeholder="Search" />
            </div>

            <div className="w-full h-full flex items-center gap-10 text-TextColorLightMode text-sm justify-center">
                {mainFeaturesNavigation.map((a, i) => (
                    <a href="" key={i} className={`w-fit h-fit px-2 ${i === a.id ? 'hover:border-b hover:border-b-LightStroke ' : ''}`}>{a.title}</a>
                ))}
            </div>

            <div className="w-full h-full flex items-center gap-7 justify-end">
                    {/* Notification Icon */}
                <span className="w-fit h-fit rounded-full bg-SoftPrimary px-3 py-3">
                    <Bell size={20} strokeWidth={1.5} color="#313131" />
                </span>

                    {/* NewTask Button */}
                <MyButton buttonType={"button"} size={"medium"} variant={"primary"}>+New Task</MyButton>
            </div>

        </div>
    )
}

export default DashboardHeader;