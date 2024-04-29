import Switch from "../../ui/Switch";
import ReplyInComments from "./ReplyInComments";

export default function AutoResponse() {
    return <div className="flex flex-col gap-5 text-sm px-6 py-10 md:h-[60vh] overflow-auto">
        <Switch id="enable-private" labelNode={<span className="label-text text-gray-400">Enable to automatically like Comments</span>} />
        <ReplyInComments />
    </div>
}