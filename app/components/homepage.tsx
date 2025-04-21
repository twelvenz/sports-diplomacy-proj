import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
    return (
        <div className="w-full px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold text-center text-rose-800 mb-2">Sport Diplomacy</h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <Image
                        src="/introkorea.jpg"
                        width={900}
                        height={400}
                        alt="Image of Unified Korea Flag"
                        className="m-auto mt-10 mb-24 p-5 w-80% h-auto"
                    />
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">Introduction</h2>
                    <div className="space-y-4 text-gray-600">
                        <p className="text-gray-500 text-lg">
                            Sports have always served as a platform for engagement.
                            Through moments of sportsmanship and fair competition, nations have found
                            common ground, built bridges, and sometimes even eased tensions during
                            periods of conflict.
                        </p>
                        <Image
                            src="/mandelaquote.jpg"
                            width={600}
                            height={600}
                            alt="Image of Nelson Mandela quote"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/ppd"
                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Ping Pong Diplomacy →
                    </Link>
                </div>
            </div>
        </div>
    );
}