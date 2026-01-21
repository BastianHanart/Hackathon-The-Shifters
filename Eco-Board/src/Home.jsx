import Background from './Background.jsx'
import Header from './Header.jsx'
import Navbar from './NavBar.jsx'
import France_Pays from './France_Pays.jsx';

function Home() {
  
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
          <Navbar />
          <France_Pays />
        </div>

        <Background></Background>

      </div>

    </>
  );
}

export default Home
