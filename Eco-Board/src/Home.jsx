import Background from './Background.jsx'
import Header from './Header.jsx'
import Navbar from './NavBar.jsx'
import France_Pays from './France_Pays.jsx';
import { useState } from "react";
import France_Régions from './France_Régions.jsx';
import France_Départements from './France_Départements.jsx';

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
        
        <div className='header'>
          <Header />
        </div>

        <div 
          className='body' 
          style={{
              display: "flex", 
              flexDirection: "column", 
              flex: 1, 
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

        <Background></Background>

      </div>

    </>
  );
}

export default Home
