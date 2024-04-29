import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function PostId() {
    return <div className="join">
        <Input placeholder="Post ID / URL" className="join-item w-full input-bordered focus:outline-offset-0" value="" />
        <Button className="join-item">Grab Post</Button>
    </div>
}