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
                            Throughout history, sports have proven to be far more than just games being played. Sports are
                            a reflection of culture, values, and relationships. For example, in times of political tension
                            or ideological division, sporting events helped mend ties when traditional diplomacy struggled,
                            as sports offer a platform for sportsmanship, engagement and communication.
                        </p>
                        <p className="text-gray-500 text-lg">
                            So, how have sporting events contributed to diplomatic efforts and conflict resolution between
                            countries? Well, sporting events have in many cases promoted dialogue, created understandings,
                            and ignited engagement between conflicting parties. In the world of politics, events such as
                            Ping Pong Diplomacy between the United States and China, everything that happened during the
                            2008 Beijing Olympics, and the efforts of both North and South Korea to collaborate in international
                            sporting events, all highlight the role of athletics in easing tensions and building bridges.
                            These moments show that even in the midst of tension and conflict, nations can find common ground
                            through the shared values of competition and respect in sports.
                            Sports are one of the few places where cooperation is heavily promoted, where teamwork is valued,
                            and where nations can come together not as adversaries, but as participants in a larger picture,
                            a global sports community. Sports bring people, and countries, together. As Nelson Mandela says,
                            "Sport has the power to change the world."
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