import Fond from './assets/Fond.jpg'

function Background() {

    return <img src={Fond} style={{display: "block", width: "100vw", height: "100vh", objectFit: "cover", filter: "blur(0.15vw)", zIndex: -1}} alt="Background" />;
}

export default Background