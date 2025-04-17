import Link from "next/link";

export default function Olympics() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Main Title */}
                <h1 className="text-3xl font-bold text-center text-rose-800 mb-8">
                    Olympics
                </h1>

                <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">2008 Beijing Summer</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">China</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">North/South Korea</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">NK/SK United Flag</h2>
                    <div className="block">
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">2000 Sydney Summer</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">2004 Athens Summer</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">2006 Turin Winter</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">2018 Pyeongchang Winter</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">NK/SK Olympic Union Attempts</h2>
                    <div className="block my-5">
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-3">1964 Tokyo Summer</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-3">1988 Seoul Summer</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-3">1991 World Table Tennis</h3>
                            <p className="text-gray-600">
                                text.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/ppd"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                    >
                        ← Ping Pong Diplomacy
                    </Link>
                    <Link
                        href="/other"
                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Other Events →
                    </Link>
                </div>
            </div>
        </div>
    );
}