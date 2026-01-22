import Background from './Background.jsx'
import Header from './Header.jsx'
import Navbar from './NavBar.jsx'
import France_Pays from './France_Pays.jsx';
import { useState } from "react";
import France_Régions from './France_Régions.jsx';
import France_Départements from './France_Départements.jsx';
import Board from './DashBoard.jsx';

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
            
          <div 
            className='body_right'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "60vw",
              overflowY: "scroll",  // Ça du coup c'est justement le scroll
              marginTop: "30px",    //
              marginBottom: "10px", //Les deux margin pour éviter que ce soit coller aux extrémités
            }}
          >
            <Board />
          </div>

        </div>

        <Background/>

      </div>

    </>
  );
}

export default Home