import { useState } from "react"
import PostId from "./PostId"
import SelectPost from "./SelectPost"
import mergeClassNames from "../../../utills/mergeClassNames";



const tabList = [
    {
        id: 'select-post',
        title: 'Select a Post',
        content: <SelectPost />
    },
    {
        id: 'post-id',
        title: 'Post ID',
        content: <PostId />
    }
]

const activeTabClassName = 'tab-active !rounded-none border-b-0'
export default function PostsConfig() {

    const [activeTab, setActiveTab] = useState('select-post');


    return <div >
        <div role="tablist" className="tabs tabs-lg tabs-boxed bg-base-100 rounded-none p-0">
            {tabList.map(item => <a role="tab" className={mergeClassNames("tab !rounded-none border-b-base-300 border-b-2", item.id === activeTab ? activeTabClassName : '')} onClick={() => setActiveTab(item.id)}>{item.title}</a>)}


        </div>
        <div className="flex flex-col gap-5 text-sm px-6 py-10 md:h-[60vh] overflow-auto">
            {tabList.find(t => t.id === activeTab)?.content}
        </div>
    </div>
}