import React, { FC, useRef, useState } from 'react';
import { Card } from '../../../utils/ui';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

interface SchedulerProps {}

const Scheduler: FC<SchedulerProps> = ({}) => {
    const [_events, set_events] = useState([]);
    const calendarRef = useRef();
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card>
                        <button className="btn btn-primary" onClick={() => {}}>
                            New Event
                        </button>
                        <div className="relative z-0">
                            <FullCalendar
                                ref={calendarRef}
                                locale={esLocale}
                                plugins={[dayGridPlugin]}
                                events={_events}
                                initialView="dayGridMonth"
                                editable={true}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                            />
                        </div>
                        modal
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Scheduler;
