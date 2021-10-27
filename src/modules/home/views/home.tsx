import Card from '../components/Card';

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
                                ]}
                            />
                            <Card
                                name="Asegurabilidad"
                                links={[
                                    { name: 'Registrar póliza' },
                                    { name: 'Gestionar corredor de seguros' },
                                    { name: 'Gestionar compañía aseguradora' },
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
