import Link from "next/link";
import Image from "next/image";

export default function Olympics() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-rose-800 mb-8">
                    Olympics
                </h1>

                <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">2008 Beijing Summer Olympics</h2>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-600 text-lg">
                                The 2008 Beijing Olympics was huge for China. It was the first time they have held the Olympics,
                                and they capitalized on every opportunity. The 2008 Olympics was a major success for China,
                                not only in terms of athletic achievement but also in terms of diplomacy and global
                                image-building.  Hosting the Olympics allowed China to display themselves as a modern, capable,
                                and emerging global power.
                            </p>
                            <Image
                                src="/2008olympics.jpg"
                                width={600}
                                height={500}
                                alt="Image of opening ceremony of 2008 olympics"
                                className="m-auto mb-6 p-5 w-80% h-auto"
                            />
                            <p className="text-gray-600 text-lg">
                                The 2008 Olympics were crucial in helping soften the global view of China. Throughout the games,
                                foreign visitors, athletes, and journalists were enveloped by Chinese culture and hospitality,
                                giving them a wonderful experience of China, which they openly praised to the media. Through their
                                grand opening ceremony and their efforts on hosting, China presented itself as a nation ready
                                to engage with the international community.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-rose-700 mb-4">The Koreas</h2>
                    <div className="block">
                        <p className="text-gray-600 text-lg">
                            The use of the Korean Unification Flag in Olympic Games is a powerful symbol of sports
                            diplomacy between countries with a deep political and ideological divide. The two Koreas are
                            still technically at war and have hostility towards each other, but sporting events like
                            the Olympics have provided opportunities for them to show unity. The flag was debuted at the
                            2000 Sydney Summer Olympics, where athletes from both Koreas displayed it as they marched
                            together in the opening ceremony. This was the first time the two Koreas had shown unity
                            since the Korean War. This same symbolic act was negotiated and repeated at the 2004 Athens
                            Summer Olympics and the 2006 Turin Winter Olympics, reinforcing the idea that despite ongoing
                            tensions, sports could provide a neutral and united space for the two countries.
                        </p>
                        <Image
                            src="/2000sydney.jpg"
                            width={500}
                            height={400}
                            alt="Image of the united korea flag in 2000"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
                        <p className="text-gray-600 text-lg">
                            The most shocking display was at the 2018 PyeongChang Winter Olympics, hosted in South
                            Korea. In this event, not only did the athletes march under the unification flag, but
                            they also agreed to competed together as a single women’s ice hockey team. This display of
                            unity was shocking, and it showed that these two countries can be unified through sports.
                        </p>
                        <Image
                            src="/unifiedhockey.jpg"
                            width={500}
                            height={400}
                            alt="Image of the united Korea team"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
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