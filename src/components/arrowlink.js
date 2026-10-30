import { ArrowIcon } from "./icons";
import Link from 'next/link';

export default function ArrowLink({href, color="$000", children}) {
    return (
        <Link href={href} className="link inline-flex items-center">{children} <ArrowIcon color={color} /></Link>
    )
}