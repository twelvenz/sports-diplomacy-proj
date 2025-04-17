import Link from "next/link";

export default function Nav() {
    const linkStyle = "p-1 m-2 text-xl hover:underline hover:bg-rose-300"
    return (
        <nav className="p-2 m-4">
            <Link href={`/`} className={linkStyle}>Home</Link>
            <Link href={`/ppd`} className={linkStyle}>Ping Pong Diplomacy</Link>
            <Link href={`/olympics`} className={linkStyle}>Olympics</Link>
            <Link href={`/other`} className={linkStyle}>Other</Link>
            <Link href={`/bib`} className={linkStyle}>Bibliography</Link>
        </nav>
    )
}