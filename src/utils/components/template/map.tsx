import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import MapView from '@arcgis/core/views/MapView';
import {TemplateContext} from "./template_context";
interface MapProps {}

const Map: FC<MapProps> = () => {
    const context = useContext(TemplateContext);
    const ref = useRef(false);
    const [view, set_view] = useState<MapView>(null)
    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            const _view = new MapView({
                map: context.map,
                center: [-75.56359, 6.25184], // Longitude, latitude
                zoom: 13, // Zoom level
                container: 'viewDiv', // Div element
            });
            set_view(_view)
        }
    }, [ref.current]);
    return <div>
        <div></div>
        <div id="viewDiv" className="w-100" style={{height: 400}}></div>
    </div>;
};

export default Map;
