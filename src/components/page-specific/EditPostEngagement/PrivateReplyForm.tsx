import { useEffect, useState } from "react"

export default function PrivateReplyForm() {
    const [messageType, setMessageType] = useState("flow");

    const [selectedFlow, setSelectedFlow] = useState('welcome_message');

    const [singleMessageOptions, setSingleMessageOptions] = useState<string[]>([]);

    useEffect(() => {
        if (selectedFlow === 'welcome_message') {
            setSingleMessageOptions(["Welcome Message -  Text Card #1", "Welcome Message -  Text Card #2"])
        }
        else if (selectedFlow === 'default_reply') {
            setSingleMessageOptions(["Default Reply -  Text Card #1"])
        }

    }, [selectedFlow])

    return <form>
        <h5 className="border-b font-semibold">Private Reply after Post engagement</h5>
        <div className="mt-3 flex flex-col gap-3">
            <label className="form-control" htmlFor="message">
                <div className="label">
                    Select Message type
                </div>
                <select className="select select-bordered" value={messageType} onChange={(e) => setMessageType(e.target.value)} name="message" id="message" >
                    <option disabled value={''}>Select Message type</option>
                    <option value="flow">Flow</option>
                    <option value="single">Single Message</option>
                </select>
            </label>

            {!!messageType && <label htmlFor="select_flow" className="form-control">
                <div className="label">
                    Select Flow
                </div>
                <select className="select select-bordered" name="select_flow" id="select_flow" value={selectedFlow} onChange={(e) => setSelectedFlow(e.target.value)} >
                    <option value={''} disabled>Select flow</option>
                    <option value={'welcome_message'}>Welcome message</option>
                    <option value={'default_reply'}>Default reply</option>
                </select>
            </label>

            }

            {messageType === "single" && <label htmlFor="select_message" className="form-control">
                <div className="label">
                    Select Message
                </div>
                <select className="select select-bordered" name="select_message" id="select_message" >
                    <option value={''} disabled>Select message</option>
                    {singleMessageOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
            </label>
            }


        </div>



    </form>
}