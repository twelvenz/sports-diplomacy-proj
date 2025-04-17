import Link from "next/link";

export default function Homepage() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-center text-rose-800 mb-4">Sport Diplomacy</h1>
                    <p className="text-lg text-gray-600 text-center">
                        Exploring the role sports play in international diplomacy and relations.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">Introduction</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Sports have always served as a platform for engagement.
                            Through moments of sportsmanship and fair competition, nations have found
                            common ground, built bridges, and sometimes even eased tensions during
                            periods of conflict.
                        </p>
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