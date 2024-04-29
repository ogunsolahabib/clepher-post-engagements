import { useEffect, useState } from "react"
import usePagination from "../../../custom-hooks/usePagination"
import Instagram from "../../icons/Instagram"
import Messenger from "../../icons/Messenger"
import Table from "../../ui/Table"
import Pagination from "../../ui/Pagination"
import CheckBox from "../../ui/Checkbox"
import Button from "../../ui/Button"
import Dropdown, { DropDownContent } from "../../ui/Dropdown"
import Input from "../../ui/Input"

const renderChannelIcon = (channel: any) => {
    switch (channel) {
        case 'messenger': return <Messenger width={12} height={12} />
        case 'instagram': return <Instagram width={12} height={12} />
        default: return null
    }
}
const allData = [
    { id: 1, name: "Accountability", engaged: 50, unique: 25, acquired: 66, conversion: 10, channel: 'messenger' },
    { id: 2, name: "Brand", engaged: 50, unique: 25, acquired: 66, conversion: 10, channel: 'messenger' },
].map(d => ({ ...d, checked: false }));

const pageSize = 1

export default function PostsTable() {

    const paginationData = usePagination(allData.length, 1, pageSize);

    const [currentData, setCurrentData] = useState<Array<any>>([]);

    useEffect(() => {
        const currentData = allData.slice(paginationData.startIndex, paginationData.endIndex + 1);
        setCurrentData(currentData)

    }, [paginationData.currentPage, paginationData.endIndex, paginationData.startIndex])


    const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const allDataCopy = [...allData];
        if (e.target.checked) {
            allDataCopy.forEach(d => d.checked = true);
        } else {
            allDataCopy.forEach(d => d.checked = false);
        }
        setCurrentData(allDataCopy.slice(paginationData.startIndex, paginationData.endIndex + 1))
    }


    const checkByKey = (key: number) => {
        const allDataCopy = [...allData];
        const itemIndex = allDataCopy.findIndex(d => d.id == key);

        allDataCopy[itemIndex].checked = !allDataCopy[itemIndex].checked

        setCurrentData(allDataCopy.slice(paginationData.startIndex, paginationData.endIndex + 1))

    }

    const isCheckAllIndeterminate = allData.some(d => d.checked) && allData.some(d => !d.checked);


    const columns = [
        { title: <CheckBox indeterminate={isCheckAllIndeterminate} onChange={checkAll} checked={allData.every(d => d.checked)} />, accessor: (data) => <CheckBox id={data.id} checked={data.checked} onChange={() => checkByKey(data.id)} />, width: "20px" },
        { title: "", accessor: (data) => renderChannelIcon(data.channel), width: "20px" },
        { title: "Name", accessor: (data: any) => data.name, width: "150px" },
        {
            title: "Engaged / Unique", accessor: (data) => `${data.engaged} / ${data.unique}`,
        },
        { title: "Acquired", accessor: (data) => data.acquired },
        { title: "Conversion", accessor: (data) => `${data.conversion}%` },

        {
            title: "Action", accessor: () => <Dropdown className='dropdown-end' labelNode={
                <Button size='xs' variant='outline'>Actions</Button>} contentNode={<DropDownContent className="menu menu-xs shadow bg-base-100">
                    <li><a>Edit</a></li>
                    <li><a>Rename</a></li>
                    <li><a>Delete</a></li>
                </DropDownContent>
                } />
        },
    ];

    return <>
        <div className="flex justify-between">

            <h1>Post Engagements</h1>
            <div className="flex gap-2">
                <Input type="search" id="search" placeholder="Search" className="input-bordered input-sm" />
                <Dropdown className="dropdown-end" labelNode={<Button size='sm' variant='outline'>Bulk Actions</Button>} contentNode={<DropDownContent className="menu shadow bg-base-100 p-2 menu-sm w-48 my-2">
                    <li><a>Delete</a></li>
                </DropDownContent>
                } />
            </div>
        </div>
        <Table data={currentData} columns={columns} />
        <Pagination dataLength={allData.length} pageSize={1} {...paginationData} /></>
}