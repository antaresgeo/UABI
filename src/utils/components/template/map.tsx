import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import { TemplateContext } from './template_context';
interface MapProps {
    center?: [number, number];
    zoom?: number;
}

const Map: FC<MapProps> = ({ center, zoom }) => {
    const context = useContext(TemplateContext);
    const ref = useRef(false);
    const [view, set_view] = useState<MapView>(null);
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            const _view = new MapView({
                map: context.map,
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
    center: [-75.56359, 6.25184],
    zoom: 13,
};

export default Map;
