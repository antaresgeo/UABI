import Card from '../components/Card';
import Importer from "../../../utils/ui/importer";


const Home = () => {
    return (
        <>
            <section className="pt-5" id="texto-superior">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4>Bienvenido al sistema de información para administración de bienes inmuebles</h4>
                            <p className="mb-5">Encuentra aquí los accesos rápidos a las funciones más utilizadas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-cards">
                <section id="cards">
                    <div className="container">
                        <div className="row justify-content-center">
                           <Card name="Administrativo" links={[{ name: 'Asignación de Roles y Permisos' }]} />
                           <Card
                               name="Adquisición"
                                links={[
                                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                                    { name: 'Bienes inmuebles', to: '/acquisitions/real-estates/' },
                                    { name: 'Registro de BI', to: '/acquisitions/real-estates/create/' },
                                ]}
                            />
                            <Card
                                name="Asegurabilidad"
                                links={[
                                    { name: 'Registrar póliza', to: '/insurabilities/policy/' },
                                    { name: 'Gestionar corredor de seguros', to: '/insurabilities/company/' },
                                    { name: 'Gestionar compañía aseguradora', to: '/insurabilities/broker/' },
                                ]}
                            />
                        </div>
                        <div className="row justify-content-center mt-3">
                            <Card name="Inspección" links={[{ name: 'Gestionar inspección', to: '/inspection/' }]} />
                            <Card
                                name="Disposición"
                                links={[
                                    { name: 'Gestionar Disposición', to: '/disposition/list/' },
                                    { name: 'Gestionar Contratos', to: '/dispositions/contract/list' },
                                ]}
                            />
                            <Card name="Supervisión" links={[]} />
                        </div>
                        <div className="row justify-content-center mt-3">
                            <Card name="Mantenimiento" links={[]} />
                            <Card name="Consultas" links={[]} />
                            <Card name="Informes y Logs" links={[]} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;

