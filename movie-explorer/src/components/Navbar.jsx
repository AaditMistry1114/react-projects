
function Navbar( { setActiveView } ) {
    return (
        <nav>
            <h2>🎬 Movie Explorer</h2>
            <div className="nav-links" >
                <button onClick={() => setActiveView("home")}>Home</button>
                <button onClick={() => setActiveView("favorites")}>Favorites</button>
            </div>
        </nav>
    )
    }

export default Navbar
