import Background from './Background.jsx'
import Header from './Header.jsx'
import Navbar from './NavBar.jsx'
import France_Pays from './France_Pays.jsx';
import { useState } from "react";
import France_Régions from './France_Régions.jsx';
import France_Départements from './France_Départements.jsx';
import Carte from "./Carte.jsx"
import Carte2 from "./Carte2.jsx"
import Carte3 from "./Carte3.jsx"
import Carte4 from "./Carte4.jsx"
import Carte5 from "./Carte5.jsx"
import Carte6 from "./Carte6.jsx"
import Carte7 from "./Carte7.jsx"
import Carte8 from "./Carte8.jsx"
import Carte9 from "./Carte9.jsx"
import Carte10 from "./Carte10.jsx"
import Carte11 from "./Carte11.jsx"
import Carte12 from "./Carte12.jsx"


function Home() {
  const [choice, setChoice] = useState(1);
  
  return(
    <>
      <div 
        className='fullPage' 
        style={{
          display: "flex", 
          flexDirection: "column", 
          height: "100vh"
        }}
      >
        
        <div className='header'
          style={{
            height: "15vh",
          }}
        >
          <Header />
        </div>

        <div 
          className='body'
          style={{
            display: "flex",
            flex: 1,
            minHeight: 0, //J'ai changé ça pour permettre le scroll interne
          }}
        >

          <div 
            className='body_left' 
            style={{
                display: "flex", 
                flexDirection: "column",
                width: "40vw", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "20px",
            }}
          >
            <Navbar choice={choice} setChoice={setChoice}/>
            {choice === 1 ? <France_Pays /> : null}
            {choice === 2 ? <France_Régions /> : null}
            {choice === 3 ? <France_Départements /> : null}

          </div>
            
          <div className = "Cartes" >
            <div className = "list">
              <Carte/><Carte6/><Carte10/><Carte12/>
            </div>
            <div className = "list">
              <Carte4/><Carte5/><Carte8/><Carte11/>
            </div>
            <div className = "list">
              <Carte7/><Carte2/><Carte9/><Carte3 />
            </div>
          </div>

        </div>

        <Background/>

      </div>

    </>
  );
}

export default Home