import { useState } from "react";
import AutoResponse from "./AutoResponse";
import Settings from "./Settings";
import mergeClassNames from "../../../utills/mergeClassNames";

export default function Comments() {

    const [activeTab, setActiveTab] = useState('settings');

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
    return <>
        <div role="tablist" className="tabs tabs-lg tabs-bordered">
            {tabList.map(tab => (
                <a role="tab" key={tab.id} className={mergeClassNames(activeTab === tab.id ? "tab tab-active" : "tab", "text-sm")} onClick={() => setActiveTab(tab.id)}>{tab.title}</a>
            ))}
        </div>
        {tabList.find(tab => tab.id === activeTab)?.content}
    </>
}