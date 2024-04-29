import { useCallback, useEffect, useState } from "react"
import usePagination from "../../../custom-hooks/usePagination"
import Instagram from "../../icons/Instagram"
import Messenger from "../../icons/Messenger"
import Table from "../../ui/Table"
import Pagination from "../../ui/Pagination"
import CheckBox from "../../ui/Checkbox"
import Button from "../../ui/Button"
import Dropdown, { DropDownContent } from "../../ui/Dropdown"
import Input from "../../ui/Input"
import getFilteredList from "../../../utills/getFilteredList"
import Search from "../../icons/Search"
import ArrowDown from "../../icons/ArrowDown"

const renderChannelIcon = (channel: any) => {
    switch (channel) {
        case 'messenger': return <Messenger width={12} height={12} />
        case 'instagram': return <Instagram width={12} height={12} />
        default: return null
    }
}


const testData = [
    { name: "Operations", channel: 'instagram' },
    { name: "Directives", channel: 'messenger' },
    { name: "Branding", channel: 'messenger' },
    { name: "Program", channel: 'messenger' },
    { name: "Division", channel: 'messenger' },
    { name: "Tactics", channel: 'instagram' },
    { name: "Implementation", channel: 'messenger' },
    { name: "Paradigm", channel: 'instagram' },
    { name: "Accountability", channel: 'instagram' },
    { name: "Intranet", channel: 'messenger' },
    { name: "Response", channel: 'instagram' },
    { name: "Markets", channel: 'instagram' },

].map((d, index) => ({ ...d, id: index + 1, engaged: 50, unique: 25, acquired: 66, conversion: 10, checked: false }));

export default function PostsTable() {


    const [currentData, setCurrentData] = useState<Array<any>>([]);

    const [searchInputValue, setSearchInputValue] = useState('');

    const dataLengthValue = searchInputValue ? currentData.length : testData.length

    const paginationData = usePagination(dataLengthValue);
    useEffect(() => {
        const currentData = testData.slice(paginationData.startIndex, paginationData.endIndex + 1);
        if (!searchInputValue) return setCurrentData(currentData)
        setCurrentData(getFilteredList(testData, searchInputValue))
    }, [searchInputValue, paginationData.endIndex, paginationData.startIndex])

    useEffect(() => {
        const currentData = testData.slice(paginationData.startIndex, paginationData.endIndex + 1);
        setCurrentData(currentData)

    }, [paginationData.currentPage, paginationData.endIndex, paginationData.startIndex]);




    const checkAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const testDataCopy = [...testData];
        if (e.target.checked) {
            testDataCopy.forEach(d => d.checked = true);
        } else {
            testDataCopy.forEach(d => d.checked = false);
        }
        setCurrentData(testDataCopy.slice(paginationData.startIndex, paginationData.endIndex + 1))
    }, [paginationData.endIndex, paginationData.startIndex])


    const checkByKey = useCallback((key: number) => {
        const testDataCopy = [...testData];
        const itemIndex = testDataCopy.findIndex(d => d.id == key);

        testDataCopy[itemIndex].checked = !testDataCopy[itemIndex].checked

        setCurrentData(testDataCopy.slice(paginationData.startIndex, paginationData.endIndex + 1))

    }, [paginationData.endIndex, paginationData.startIndex])

    const isCheckAllIndeterminate = testData.some(d => d.checked) && testData.some(d => !d.checked);


    const columns = [
        { title: <CheckBox indeterminate={isCheckAllIndeterminate} onChange={checkAll} checked={testData.every(d => d.checked)} />, accessor: (data) => <CheckBox id={data.id} checked={data.checked} onChange={() => checkByKey(data.id)} />, width: "20px" },
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
        <div className="flex my-2 items-center justify-between">
            <h1 className="text-xl truncate">Post Engagements</h1>
            <div className="flex gap-2 items-center">
                <label className="input input-bordered flex items-center gap-2 size-fit pl-0 pr-2">

                    <Input value={searchInputValue} onChange={e => setSearchInputValue(e.target.value)} type="search" id="search" placeholder="Search" className="input-sm grow border-0 focus:outline-none" autoComplete="off" />
                    <Search />

                </label>
                <Dropdown className="dropdown-end" labelNode={<Button size='sm' variant='outline'>Bulk Actions <ArrowDown /></Button>} contentNode={<DropDownContent className="menu shadow bg-base-100 p-2 menu-sm w-48 my-2">
                    <li><a>Delete</a></li>
                </DropDownContent>
                } />
            </div>
        </div>
        <Table data={currentData} columns={columns} />
        <Pagination dataLength={dataLengthValue}  {...paginationData} />
    </>
}