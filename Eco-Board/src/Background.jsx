import Fond from './assets/Fond.jpg'

function Background() {

    return <img src={Fond} style={{width: "100vw", height: "100vh", objectFit: "cover", filter: "blur(2.5px)"}} alt="Background" />;
}

export default Background