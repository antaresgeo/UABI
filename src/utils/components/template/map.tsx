import { FC, useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import  _Map from '@arcgis/core/Map';
interface MapProps {
    center: [number, number];
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
                basemap: 'arcgis-navigation', // Basemap layer service
            });
            const _view = new MapView({
                map: _map,
                center, // Longitude, latitude
                zoom, // Zoom level
                container: 'viewDiv', // Div element
            });
            set_view(_view);
        }
    }, [ref.current]);
    return <div id="viewDiv" className="w-100" style={{ height: 400 }} />;
};

Map.defaultProps = {
    zoom: 13,
};

export default Map;
