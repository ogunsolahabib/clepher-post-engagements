import { useCallback, useState } from "react"
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const defaultStaticComments = ['quod optio possimus consequuntur', 'aspernatur sint eum earum', 'in recusandae possimus saepe']

export default function ReplyInComments() {

    const [commentType, setCommentType] = useState("static");

    const [addedComments, setAddedComments] = useState(defaultStaticComments);


    const handleChangeComment = useCallback((index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const arCopy = [...addedComments];
        arCopy[index] = e.target.value;

        setAddedComments(arCopy);
    }, [addedComments])

    const handleAddCommentButtonClick = () => {
        if (addedComments.at(-1) === '') return
        setAddedComments(prev => [...prev, ''])
    }
    return <>
        <h5 className="border-b font-semibold">Reply in Comments</h5>
        <label className="form-control" htmlFor="comment_type">
            <div className="label">
                Select Comment type
            </div>
            <select className="select select-bordered" value={commentType} onChange={(e) => setCommentType(e.target.value)}>
                <option disabled>Select Comment type</option>
                <option value="static">Static</option>
                <option value="open_ai">Open AI</option>
            </select>
        </label>

        {/* Static Type Options */}
        {commentType === "static" && <div className="form-control flex flex-col gap-3">
            {addedComments.map((comment, index) => <div className='badge badge-xl bg-base-200 flex gap-3 size-fit p-1.5 rounded' key={index}>

                <Input value={comment} onChange={handleChangeComment(index)} type="text" name="comment" id="comment" placeholder="Type your comment here" className="input-bordered focus:outline-offset-0 join-item w-full" autoComplete="off" />
                <span role='button' onClick={() => setAddedComments(addedComments.filter((c) => c !== comment))} className="cursor-pointer btn btn-circle btn-sm">✕</span>
            </div>)}

            <Button onClick={handleAddCommentButtonClick} className="w-fit m-auto mt-2">Add comment</Button>
        </div>}


        {/* Open AI Type Options */}
        {commentType === "open_ai" && <div className="form-control flex flex-col gap-3">
            <label htmlFor="select_integration" className="form-control">
                <div className="label">
                    Select Integration
                </div>
                <select className="select select-bordered" name="select_integration" id="select_integration" >
                    <option value={''} disabled>Select integration</option>
                    <option value={'1'}>Integration 1</option>
                    <option value={'2'}>Integration 2</option>
                </select>
            </label>
            <label htmlFor="select_assistance" className="form-control">
                <div className="label">
                    Select Assistance
                </div>
                <select className="select select-bordered" name="select_assistance" id="select_assistance" >
                    <option value={''} disabled>Select assistance</option>
                    <option value={'1'}>Assistance 1</option>
                    <option value={'2'}>Assistance 2</option>
                </select>
            </label>
        </div>}

    </>
}