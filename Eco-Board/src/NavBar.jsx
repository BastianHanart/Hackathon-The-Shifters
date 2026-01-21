import './index.css'

function nav_bar({choice, setChoice}) {

    return(
        <div className="nav_bar">
            <ul className="nav_bar_list">
                <div className={choice === 1 ? 'button_background' : null}>   
                    <button 
                        className={choice === 1 ? 'active_button' : 'nav_bar_list_button'}
                        onClick={() => setChoice(1)}
                    >
                        Pays
                    </button>
                </div>

                <div className={choice === 2 ? 'button_background' : null}>
                    <button 
                        className={choice === 2 ? 'active_button' : 'nav_bar_list_button'} 
                        onClick={() => setChoice(2)}
                    >
                        Régions
                    </button>
                </div>

                <div className={choice === 3 ? 'button_background' : null}>
                    <button 
                        className={choice === 3 ? 'active_button' : 'nav_bar_list_button'} 
                        onClick={() => setChoice(3)}
                    >
                        Départements
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default nav_bar