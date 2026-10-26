import { ArrowIcon } from "./icons";

export default function ArrowLink({href, color="$000", children}) {
    return (
        <a href={href} className="link inline-flex items-center">{children} <ArrowIcon color={color} /></a>
    )
}