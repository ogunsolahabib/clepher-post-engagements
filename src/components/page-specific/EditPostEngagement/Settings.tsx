import Switch from "../../ui/Switch";
import ExcludeCommentsForm from "./ExcludeCommentsForm";
import PrivateReplyForm from "./PrivateReplyForm";
import RequireReaction from "./RequireReaction";
import TriggerCommentsForm from "./TriggerCommentsForm";

export default function Settings() {
    return <div className="flex flex-col gap-5 text-sm px-6 py-10 md:h-96 overflow-auto">
        <Switch id="enable-private" labelNode={<span className="label-text text-gray-400">Enable To Privately Reply To First-Level Comments Only</span>} />
        <Switch id="allow-same-user" labelNode={<span className="label-text text-gray-400">Send Message To The Same User Only Once Per Post</span>} />
        <RequireReaction />
        <ExcludeCommentsForm />
        <TriggerCommentsForm />
        <PrivateReplyForm />

    </div>
}