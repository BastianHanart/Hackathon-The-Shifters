import { useEffect, useState } from "react";
import soleil from "./assets/soleil.png";
import nuage from "./assets/nuage.png";
import pluie from "./assets/pluie.png";

function Carte() {

  const [meteo, setMeteo] = useState(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true")
      .then(res => res.json())
      .then(data => setMeteo(data));
  }, []);

  if (!meteo) return <div>Chargement...</div>;

  function getIcon(code) {
    if (code === 0) return soleil;
    if (code <= 3) return nuage;
    if (code >= 51) return pluie;
    return soleil;
  }

  function getLabel(code) {
    if (code === 0) return "Ensoleillé";
    if (code <= 3) return "Nuageux";
    if (code >= 51) return "Pluvieux";
  return "Temps calme";
}

    const today = new Date();

    const jour = today.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short"
    });

    const annee = today.getFullYear();

    return (
        <div className="carte">
            <div className="carteheader">
                <img className="icon" src={getIcon(meteo.current_weather.weathercode)}></img>
                <div className="météo">
                    <div className="premiertitre">Aujourd'hui</div>
                    <div className="deuxiemetitre"> {getLabel(meteo.current_weather.weathercode)}</div>
                </div>
                <div className="date">
                    <div className="case1">{jour}</div>
                    <div className="case2">{annee}</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Données supplémentaires</h2>
                
                <div className="idée">
                    <span className="detail-label">Température : 17°</span>
                    <span className="detail-label">Indice UV : 2</span>
                    <span className="detail-label">Vitesse des vents : 36 km/h</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
