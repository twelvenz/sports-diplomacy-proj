import Link from "next/link";

export default function Nav() {
    const linkStyle = "block md:inline-block p-2 md:p-1 m-1 md:m-2 text-lg md:text-xl hover:underline hover:bg-rose-300"
    return (
        <nav className="flex flex-col md:flex-row p-2 m-2 md:m-4 text-center">
            <Link href={`/`} className={linkStyle}>Home</Link>
            <Link href={`/ppd`} className={linkStyle}>Ping Pong Diplomacy</Link>
            <Link href={`/olympics`} className={linkStyle}>Olympics</Link>
            <Link href={`/other`} className={linkStyle}>Other</Link>
            <Link href={`/bib`} className={linkStyle}>Bibliography</Link>
        </nav>
    )
}