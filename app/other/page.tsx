import Link from "next/link";
import Image from "next/image";

export default function Other() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-rose-800 mb-8">
                    Other
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">Other Notable Events</h2>
                    <div className="block my-5">
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-3">1991 World Table Tennis</h3>
                            <p className="text-gray-600 text-lg">
                                One of the earliest and most significant moments of sports diplomacy between North and
                                South Korea occurred at the 41st World Table Tennis Championships in Chiba, Japan. The
                                two countries agreed to form a unified Korean team, so they competed under a single flag
                                and name. The Korea team upset their longtime rival, the Chinese team, to win themselves the
                                championship. It was a victory that resonated far beyond the sport itself. The teamwork
                                and unity displayed by athletes from the Koreas showed the power of cooperation and peace
                                between the nations. It highlighted the potential of sports to bridge deep political divides.
                            </p>
                            <Image
                                src="/1991pingpong.jpg"
                                width={600}
                                height={500}
                                alt="Image of the unified Korea team in 1991 World Table Tennis Championship"
                                className="m-auto mb-6 p-5 w-80% h-auto"
                            />
                        </div>
                        <div className="my-5">
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Dennis Rodman in North Korea</h3>
                            <p className="text-gray-600 text-lg">
                                Dennis Rodman&#39;s visit to North Korea in 2013 shows how popular athletes can bridge political
                                and cultural divides too, sometimes even better than traditional diplomacy. Rodman used
                                his celebrity status and friendship with Kim Jong Un open communications between North Korea
                                and other countries. Though the visit was highly controversial and widely criticized, Rodman&#39;s
                                trip showed the power of sports in fostering dialogue and easing tensions. His trip helped
                                further relations between the US and North Korea, with Rodman&#39;s influence expanding to even
                                negotiating a prisoner release from North Korea. This would not have been possible without
                                sports, because Kim Jong Un reportedly was a fan of Dennis Rodman the Chicago Bulls basketball
                                team.
                            </p>
                            <Image
                                src="/rodman.jpeg"
                                width={600}
                                height={500}
                                alt="Image of Kim Jong Un and Dennis Rodman"
                                className="m-auto mb-6 p-5 w-80% h-auto"
                            />
                        </div>
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