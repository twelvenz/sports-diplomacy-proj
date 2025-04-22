import Link from "next/link";

export default function BibPage(){
    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-rose-800 mb-8">
                    Bibliography
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 mb-12">
                    <ul className="text-gray-600 text-lg space-y-6 p-4">
                        <li>
                            Scrivner, Daniel. “Nelson Mandela’s ‘Sport Has the Power to Change the World’ Speech.” Daniel Scrivner, published December 16, 2023. https://www.danielscrivner.com/articles/nelson-mandelas-sport-has-the-power-to-change-the-world-laureus-lifetime-achievement-award-speech.
                        </li>
                        <li>
                            Yamato, Jen. “Dennis Rodman Gets Emotional Over North Korea In New Film – Video” Yahoo Entertainment, published January 20, 2015. https://www.yahoo.com/entertainment/dennis-rodman-gets-emotional-over-200900817.html
                        </li>
                        <li>
                            Luhnow, David. "Dennis Rodman Speaks: The Inside Story of How He Journeyed to North Korea." Yahoo Sports, published March 24, 2014. https://sports.yahoo.com/dennis-rodman-speaks-the-inside-story-of-how-he-journeyed-to-north-korea-191339515.html
                        </li>
                        <li>
                            Ruwitch, John. “50 Years Later, The Legacy Of U.S.-China ‘Pingpong Diplomacy’ Faces Challenges.” WLIW-FM, published April 10, 2021. https://www.wliw.org/radio/news/50-years-later-the-legacy-of-u-s-china-pingpong-diplomacy-faces-challenges/.
                        </li>
                        <li>
                            Brown, Luke. “When North met South: Unified Korean hockey team makes history ahead of Winter Olympics” The Independent, published February 4, 2018. https://www.independent.co.uk/sport/olympics/winter-olympics/unified-korea-ice-hockey-north-south-sweden-pyeongchang-2018-games-a8194346.html.
                        </li>
                        <li>
                            Griffiths, James. “The 2008 Olympics was a soft power victory for Beijing. A successful Games in 2022 could validate its authoritarian system.” CNN, published February 21, 2021. https://www.cnn.com/2021/02/21/asia/beijing-olympics-2008-2022-soft-power-dst-intl-hnk/index.html.
                        </li>
                        <li>
                            CNN Wire. “North, South Korea to March Together under 1 Flag at Winter Olympics.” KTLA, published January 17, 2018. https://ktla.com/news/nationworld/north-south-korea-to-march-together-under-1-flag-at-winter-olympics/.
                        </li>
                        <li>
                            9GAG. “North and South Korea Will March Together under One Flag at the Winter Olympics.” 9GAG, published August 7, 2021. https://9gag.com/gag/aK6ZweO.
                        </li>
                        <li>
                            Shinn, Peggy. "Ping Pong Diplomacy: The Art of Turning Sports into Politics." PUBLomacy, published November 15, 2017. http://www.publomacy.net/articals/ping-pong-diplomacy-article/
                        </li>
                        <li>
                            "Timeline of North-South Sports Cooperation." KEIA – Korea Economic Institute of America, published August 2, 2018.  https://keia.org/the-peninsula/timeline-of-north-south-sports-cooperation/
                        </li>
                        <li>
                            Moisi, Dominique. "Korea’s Diplomatic Games: May the Odds Be Ever in Your Favor." Institut Montaigne, published January 17, 2020. https://www.institutmontaigne.org/en/expressions/koreas-diplomatic-games-may-odds-be-ever-your-favor-interview-dominique-moisi
                        </li>

                    </ul>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <Link
                        href="/other"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                    >
                        ← Other
                    </Link>
                    <Link
                        href="/"
                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Home →
                    </Link>
                </div>
            </div>
        </div>
    );
}