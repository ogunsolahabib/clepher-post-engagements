import { Reaction } from "../../../types"
import mergeClassNames from "../../../utills/mergeClassNames"

interface ReactionItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    reaction: Reaction,
    size?: "sm" | "lg",
}

export default function ReactionItem({ reaction, size = "lg", style, className, ...props }: ReactionItemProps) {

    return <span role="img" className={mergeClassNames(`bg-cover rounded-full reaction`, size === "sm" ? "size-4" : "size-10", className)} style={{ ...style, backgroundImage: `url(https://app.dev.clepher.com/plugins/meta/reactions/images/reactions_${reaction}.png)` }} {...props} />
}