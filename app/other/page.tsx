import Link from "next/link";

export default function Other() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-center text-rose-800">Other Sport Diplomacy Events</h1>
                </div>

                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">Dennis Rodman in North Korea</h2>
                    <div className="text-gray-600 space-y-4">
                        <p> text</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">The Asian Games</h2>
                    <div className="text-gray-600 space-y-4">
                        <p> text </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/olympics"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                    >
                        ← Olympics
                    </Link>
                    <Link
                        href="/bib"
                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Bibliography →
                    </Link>
                </div>
            </div>
        </div>
    );
}