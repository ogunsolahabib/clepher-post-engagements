import { useState } from "react";
import { Reaction } from "../../../types";
import Button from "../../ui/Button";
import { DropDownContent, DropdownLabel, DropdownRoot } from "../../ui/Dropdown";
import ReactionItem from "./ReactionItem";
import Tag from "../../ui/Tag";
import Tooltip from "../../ui/Tooltip";

const reactions: Reaction[] = ["like", "love", "haha", "wow", "sad", "angry"]

export default function RequireReaction() {

    const [selectedReactions, setSelectedReactions] = useState<Reaction[]>([]);
    const handleRemoveReaction = (reaction: Reaction) => {
        setSelectedReactions(prev => prev.filter(prevR => prevR !== reaction))
    }

    const handleAddReaction = (reaction: Reaction) => {
        if (selectedReactions.includes(reaction)) return;
        setSelectedReactions(prev => [...prev, reaction])
    }

    return <div className="flex flex-col">
        <h5 className="border-b font-semibold">Require a post reaction</h5>
        <div className="flex flex-wrap gap-2 py-2">
            {selectedReactions.map(r => <Tag className="flex gap-1 capitalize" key={r} onClose={() => handleRemoveReaction(r)}>
                <ReactionItem size={'sm'} reaction={r} />{r}
            </Tag>)}
        </div>

        <DropdownRoot className="w-full dropdown-top dropdown-hover group mt-16">
            <DropdownLabel>
                <Button className="w-full">Require reaction</Button>
            </DropdownLabel>
            <DropDownContent className="w-full menu menu-dropdown menu-horizontal flex justify-between">
                {reactions.map((r, i) => <li key={r} onClick={() => handleAddReaction(r)}>

                    <Tooltip contentString={r}>
                        <ReactionItem className={"block transition-all hover:scale-125 group-hover:animate-bounce-once"} reaction={r} style={{ animationDelay: `${i * 40}ms` }} />
                    </Tooltip>
                </li>)}
            </DropDownContent>
        </DropdownRoot>
    </div>
}