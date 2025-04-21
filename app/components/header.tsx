import Nav from "@/app/components/nav";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 bg-white mb-8 p-4">
            <h1 className="p-1 m-2 text-xl md:text-2xl font-bold">Sports Diplomacy</h1>
            <Nav/>
        </header>
    )
}