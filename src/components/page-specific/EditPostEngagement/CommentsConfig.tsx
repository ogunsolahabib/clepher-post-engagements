import { useState } from "react";
import AutoResponse from "./AutoResponse";
import Settings from "./Settings";
import mergeClassNames from "../../../utills/mergeClassNames";

const tabList = [
    {
        id: 'settings',
        title: 'Settings',
        content: <Settings />
    },
    {
        id: 'auto-response',
        title: 'Auto-Response',
        content: <AutoResponse />
    }
]

export default function CommentsConfig() {

    const [activeTab, setActiveTab] = useState('settings');
    return <>
        <div role="tablist" className="tabs tabs-lg tabs-bordered ">
            {tabList.map(tab => (
                <a role="tab" key={tab.id} className={mergeClassNames(activeTab === tab.id ? "tab tab-active" : "tab border-b-base-300 border-b-2", "text-sm")} onClick={() => setActiveTab(tab.id)}>{tab.title}</a>
            ))}
        </div>
        {tabList.find(tab => tab.id === activeTab)?.content}
    </>
}