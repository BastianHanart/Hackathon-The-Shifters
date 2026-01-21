import Logo from './assets/arbre.png';
import Filtrer from './assets/filter.png';
import Rechercher from './assets/Rechercher.png';

function Header() {
  return (
    <div className="card">
        <div className="left">
            <img className="logo" src={Logo} alt="Logo" />
            <h1 className="EcoBoard">Eco Board</h1>
        </div>
      
        <div className="right">
            <img className="Filtrer" src={Filtrer} alt="Filtre" />
            <input
                type="text"
                className="search-bar"
                placeholder="Rechercher"
            />
        
        <img className="Rechercher" src={Rechercher} alt="rechercher" />
        </div>
    </div>
  );
}

export default Header;
