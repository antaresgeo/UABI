import { FC, useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import  _Map from '@arcgis/core/Map';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
interface MapProps {
    center?: [number, number];
    zoom?: number;
}

const Map: FC<MapProps> = ({ center, zoom }) => {
    const ref = useRef(false);
    const [view, set_view] = useState<MapView>(null);
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            const _map = new _Map({
                basemap: 'hybrid', // Basemap layer service
            });
            const _view = new MapView({
                map: _map,
                center, // Longitude, latitude
                zoom, // Zoom level
                container: 'viewDiv', // Div element
            });
            const layer = new FeatureLayer({
                url: "https://www.medellin.gov.co/mapas/rest/services/ServiciosSuministros_y_Servicios/BienesInmuebles/MapServer/1/query?where=CBML%3D10130340011&f=geojson"
            });
            _map.add(layer)
            set_view(_view);
        }
    }, [ref.current]);
    return <div id="viewDiv" className="w-100" style={{ height: 400 }} />;
};

Map.defaultProps = {
    center: [-75.570934, 6.262476],
    zoom: 13,
};

export default Map;
