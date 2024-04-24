import { useState, useEffect } from "react";
import "./CardStream.scss";
import CardStream from "./CardStream";

function CardStreamList() {
  const streamerList = [
    {
      name: "SQUEEZIE",
      image: "/public/twitch/squeezie.jpeg",
      description:
        "Squeezie, numéro un sur Youtube, captive son public avec son humour vif et ses sessions de jeu passionnantes sur Twitch, attirant des millions de spectateurs à chaque stream.",
      video: "/public/twitch/squeezie.mp4",
      class: "card1",
    },
    {
      name: "MAGHLA",
      image: "/public/twitch/maghla.jpeg",
      description:
        "Maghla, créatrice talentueuse, attire un large public grâce à son gameplay expert, rassemblant une communauté dévouée notamment lors de ses streams sur les jeux d'horreur",
      video: "/public/twitch/maghla.mp4",
      class: "card2",
    },
    {
      name: "DOMINGO",
      image: "/public/twitch/domingo.jpeg",
      description:
        "Domingo, streamer très populaire sur Twitch grâce à son émission Popcorn basée sur des interviews et des jeux avec des célébrités actuelles, rassemble une communauté passionnée.",
      video: "/public/twitch/domingo.mp4",
      class: "card3",
    },
    {
      name: "MISTER MV",
      image: "/public/twitch/mistermv.jpeg",
      description:
        "Mister MV, un streamer renommé sur Twitch, séduit son public avec son expertise dans les jeux vidéo rétro et son style de narration captivant, attirant une base de fans fidèles à chaque stream et vidéo Youtube.",
      video: "/public/twitch/misterm.mp4",
      class: "card4",
    },
  ];
  const [showAllCards, setShowAllCards] = useState();

  useEffect(() => {
    const handleResize = () => {
      setShowAllCards(window.innerWidth > 650);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 650) {
      setShowAllCards(false);
    } else {
      setShowAllCards(true);
    }
  });

  return (
    <>
      <div>
        {!showAllCards && (
          <div>
            <div>
              <h2>STREAM</h2>
            </div>
            <div className="streamer_list">
              {streamerList.slice(0, 2).map((streamer) => (
                <CardStream stream={streamer} key={streamer.name} />
              ))}
            </div>
            <div className="button">
              <button type="button" onClick={() => setShowAllCards(true)}>
                Voir plus
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {showAllCards && (
          <div>
            <div>
              <h2>STREAM</h2>
            </div>
            <div className="streamer_list">
              {streamerList.map((streamer) => (
                <CardStream stream={streamer} key={streamer.name} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardStreamList;
