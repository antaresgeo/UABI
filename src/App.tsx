import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
function App() {
    const routes = useRoutes();
    return (
        <>
            <Router routes={routes} template={Template} />
        </>
    );
}

export default App;
