import Link from "next/link";
import Image from "next/image";

export default function PPD() {
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-rose-800 mb-8">
                    Ping Pong Diplomacy
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 mb-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                            31st World Table Tennis Championships
                        </h2>
                        <p className="text-gray-600 text-lg">
                            During the 31st World Table Tennis Championship in Nagoya, Japan, American player Glenn Cowan
                            got lost and accidentally boarded the Chinese team’s bus. Since we are in the Cold War era,
                            there were tensions between the US and China, which explains why many of the Chinese players
                            did not approach Cowan. But one player, Zhuang Zedong, came up and extended an arm to Cowan.
                            Zhuang helped Cowan and then gifted him a silk-screen portrait. Cowan shared his story, and
                            the media reported about it. To the public, the kind gesture by Zhuang humanized Communist China,
                            which opened the door for engagement through cultural and athletic exchanges. It became the spark
                            that ignited Ping Pong Diplomacy, opening the door to a shift in relations between US and China.
                        </p>
                        <Image
                            src="/ppd.jpeg"
                            width={600}
                            height={500}
                            alt="Image of Glenn Cowan and Zhuang Zedong"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                            China Invites US Team
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Because of the headlines, China took the opportunity to officially invite the US Table
                            Tennis team to visit China. There, the US Team interacted with the Chinese people and
                            played a series of friendly exhibition matches in cities like Beijing and Shanghai. The
                            visit was warmly received by the Chinese public and extensively covered by international
                            media. These interactions helped shift public perception on both sides, fostering respect.
                            The image shows a player from the Chinese Table Tennis team training with a player from the
                            US Table Tennis team. This was an image that showed respect and compassion between the two
                            countries, which worked to thaw the effects of the Cold War.

                        </p>
                        <Image
                            src="/teamvisit.jpg"
                            width={600}
                            height={500}
                            alt="Image of Chinese and US Table Tennis players together"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                            Nixon&#39;s Visit
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Kissinger makes a secret trip to China in July of 1971 to visit Premier Zhou Enlai and set
                            the groundwork for a historic event, the US president visiting China. This was a success, as
                            President Nixon officially visits China in February of 1972 and meets Chairman Mao, marking
                            the start of better relations between the two countries. The visit marked the beginning of a
                            new era of relationships and engagement between the two countries, making talks between the
                            two superpowers normal.
                        </p>
                        <Image
                            src="/nixonchina.jpg"
                            width={600}
                            height={500}
                            alt="Image of Nixon and Mao Zedong"
                            className="m-auto mb-6 p-5 w-80% h-auto"
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                    >
                        ← Home
                    </Link>
                    <Link
                        href="/olympics"
                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Olympics →
                    </Link>
                </div>
            </div>
        </div>
    );
}
