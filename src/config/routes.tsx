import { combineRoutes } from '../utils/components/app_router';
import { IRoute } from '../utils/components/app_router/custom_types';

import { routes as authRoutes } from '../modules/auth';
import { routes as acquisitionsRoutes } from '../modules/acquisitions';
import { routes as asegurabilidadRoutes } from '../modules/asegurabilidad';
import { routes as homeRoutes } from '../modules/home';
import { routes as notificationRoutes } from '../modules/notificacions';
import { routes as usersRoutes } from '../modules/users';
import { routes as occupationRoutes } from '../modules/inspection';
import { routes as InventoryRecordRoutes } from '../modules/Inventory_record';
import { routes as dispositionRoutes } from '../modules/disposition';
import { routes as documentManagementRoutes } from '../modules/document_management';
import { routes as generalListRoutes } from '../modules/general_list';

const useRoutes = (props = null): IRoute[] => {
    return combineRoutes(props, [
        authRoutes,
        acquisitionsRoutes,
        homeRoutes,
        asegurabilidadRoutes,
        notificationRoutes,
        documentManagementRoutes,
        usersRoutes,
        occupationRoutes,
        InventoryRecordRoutes,
        dispositionRoutes,
        generalListRoutes,
    ]);
};

export default useRoutes;
