import { useEffect, useState } from 'react';
import './App.css'
import Instagram from './components/icons/Instagram';
import Messenger from './components/icons/Messenger';
import Header from './components/sections/Header'
import CheckBox from './components/ui/Checkbox';
import Dropdown, { DropDownContent } from './components/ui/Dropdown';
import Pagination from './components/ui/Pagination';
import Table from './components/ui/Table'
import usePagination from './custom-hooks/usePagination';
import EditPostEngagement from './pages/EditPostEngagement';
import Button from './components/ui/Button';


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
function App() {
  const pageSize = 1

  const totalPages = Math.ceil(allData.length / pageSize);

  const paginationData = usePagination(totalPages);

  const [currentData, setCurrentData] = useState<Array<any>>([]);

  useEffect(() => {
    const currentData = allData.slice(paginationData.startIndex, paginationData.endIndex + 1);
    setCurrentData(currentData)

  }, [paginationData.currentPage, paginationData.endIndex, paginationData.startIndex])


  const checkAll = (e) => {
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
  return (
    <div className='bg-base-200'>
      <Header />
      <h4 className="truncate text-xl">Post Engagements</h4>
      <Table data={currentData} columns={columns} />
      <Pagination totalPages={totalPages} {...paginationData} />


      <EditPostEngagement />

    </div>
  )
}

export default App
