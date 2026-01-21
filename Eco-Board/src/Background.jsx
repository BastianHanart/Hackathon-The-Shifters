import Fond from './assets/Fond.jpg'

function Background() {

    return <img src={Fond} style={{display: "block", width: "100vw", height: "100vh", objectFit: "cover", filter: "blur(0.15vw)", position: "absolute", zIndex: -1, top: 0, left: 0}} alt="Background" />;
}

export default Background