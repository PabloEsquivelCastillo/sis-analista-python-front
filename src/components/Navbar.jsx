


function Navbar(){
    
    return(
        <>
            <nav className="navbar navbar-expand bg-light">
                <div className="container" style={{justifyContent: "space-between", padding: "5px"}}>
                    <span className="navbar-brand mb-0 h1" style={{ color: "#2C89F5", fontWeight: "bold", fontSize: "30px" }}>Python Analyzar</span>
                    <a href="#" style={{ color: "black", fontWeight: "normal", fontSize: "16px" }}> Crear cuenta</a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;