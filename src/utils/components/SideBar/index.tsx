import tmpImg from "./../../assets/img/medellin.png";
import SBItem from "./components/SBItem";

const SideBar = () => {
    return (
        <div id="sidebar" className="d-md-block d-lg-block mt-4 w-100">
            {/*<div className="p-2" style={{ backgroundColor: "#6DA3FC" }}>*/}
            {/*    <img src={tmpImg} className='img-fluid' alt='' />*/}
            {/*</div>*/}

            <ul className="list-unstyled ps-0">
                <SBItem id="" name="Inicio" collapse={false} sublinks={[{ to: "", name: "Inicio" }]} />
                <SBItem
                    id="users"
                    name="users"
                    sublinks={[{ to: "/users", name: "Usuarios"}]}
                />
                <SBItem
                    id="acquisitions"
                    name="Adquisición"
                    sublinks={[
                        { to: "/projects", name: "Proyectos" },
                        { to: "/real-estates", name: "Bienes Inmuebles" },
                    ]}
                />
                {/* <SBItem
					id='registroContable'
					name='Registro Contable - UABI'
					sublinks={[{ to: '/', name: 'Registro Contable - UABI' }]}
				/> */}
                <SBItem
                    id="insurability"
                    name="insurability"
                    sublinks={[{ to: "/policy", name: "Poliza"}]}
                />
                <SBItem id="disposition" name="Disposición" sublinks={[{ to: "/real-estates/areas", name: "Áreas" }]} />
                <SBItem id="adquisisiones" name="Supervisión" />
                <SBItem id="adquisisiones" name="Facturación" />
                <SBItem id="adquisisiones" name="Mantenimiento" />
                <SBItem id="adquisisiones" name="Consultas" />
                <SBItem id="adquisisiones" name="Informes y Logs" />
            </ul>
        </div>
    );
};

export default SideBar;
