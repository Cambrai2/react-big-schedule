import  { Scheduler, SchedulerData, ViewType, DATE_FORMAT, type EventItem } from "react-big-schedule";
import dayjs from "dayjs";
import "react-big-schedule/dist/css/style.css";
import WrapperFun from "./WrapperFun";
import { type ReactNode, useState } from "react";
import * as dayjsLocale from 'dayjs/locale/en-gb';
import * as antdLocale from 'antd/locale/en_GB';

const DemoData = {
  resources: [{
    id: 'r0',
    name: 'Resource0',
    groupOnly: true
  }, {
    id: 'r1',
    name: 'Resource1',
    parentId: 'r0'
  }, {
    id: 'r2',
    name: 'Resource2',
    parentId: 'r3'
  }, {
    id: 'r3',
    name: 'Resource3',
    parentId: 'r1'
  }, {
    id: 'r4',
    name: 'Resource4'
  }, {
    id: 'r5',
    name: 'Resource5'
  }, {
    id: 'r6',
    name: 'Resource6'
  }, {
    id: 'r7',
    name: 'Resource7'
  }],
  events: [{
    id: 1,
    start: '2022-12-18 09:30:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r1',
    title: 'I am finished',
    bgColor: '#D9D9D9',
    showPopover: false
  }, {
    id: 2,
    start: '2022-12-18 12:30:00',
    end: '2022-12-26 23:30:00',
    resourceId: 'r2',
    title: 'I am not resizable',
    resizable: false
  }, {
    id: 3,
    start: '2022-12-19 12:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r3',
    title: 'I am not movable',
    movable: false
  }, {
    id: 4,
    start: '2022-12-19 14:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r4',
    title: 'I am not start-resizable',
    startResizable: false
  }, {
    id: 5,
    start: '2022-12-19 15:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r5',
    title: 'I am not end-resizable',
    endResizable: false
  }, {
    id: 6,
    start: '2022-12-19 15:35:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r6',
    title: 'I am normal'
  }, {
    id: 7,
    start: '2022-12-19 15:40:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r7',
    title: 'I am exceptional',
    bgColor: '#FA9E95'
  }, {
    id: 8,
    start: '2022-12-19 15:50:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r1',
    title: 'I am locked',
    movable: false,
    resizable: false,
    bgColor: 'red'
  }, {
    id: 9,
    start: '2022-12-19 16:30:00',
    end: '2022-12-27 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 1'
  }, {
    id: 10,
    start: '2022-12-19 17:30:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r1',
    title: 'R1 has recurring tasks every week on Tuesday, Friday',
    rrule: 'FREQ=WEEKLY;DTSTART=20221219T013000Z;BYDAY=TU,FR',
    bgColor: '#f759ab'
  }, {
    id: 11,
    start: '2022-12-19 18:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 3'
  }, {
    id: 12,
    start: '2022-12-20 18:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 4'
  }, {
    id: 13,
    start: '2022-12-21 18:30:00',
    end: '2022-12-24 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 5'
  }, {
    id: 14,
    start: '2022-12-23 18:30:00',
    end: '2022-12-27 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 6'
  }],
  eventsForTaskView: [{
    id: 1,
    start: '2022-12-18 09:30:00',
    end: '2022-12-18 23:30:00',
    resourceId: 'r1',
    title: 'I am finished',
    bgColor: '#D9D9D9',
    groupId: 1,
    groupName: 'Task1'
  }, {
    id: 2,
    start: '2022-12-18 12:30:00',
    end: '2022-12-26 23:30:00',
    resourceId: 'r2',
    title: 'I am not resizable',
    resizable: false,
    groupId: 2,
    groupName: 'Task2'
  }, {
    id: 3,
    start: '2022-12-19 12:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r3',
    title: 'I am not movable',
    movable: false,
    groupId: 3,
    groupName: 'Task3'
  }, {
    id: 7,
    start: '2022-12-19 15:40:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r7',
    title: 'I am exceptional',
    bgColor: '#FA9E95',
    groupId: 4,
    groupName: 'Task4'
  }, {
    id: 4,
    start: '2022-12-20 14:30:00',
    end: '2022-12-21 23:30:00',
    resourceId: 'r4',
    title: 'I am not start-resizable',
    startResizable: false,
    groupId: 1,
    groupName: 'Task1'
  }, {
    id: 5,
    start: '2022-12-21 15:30:00',
    end: '2022-12-22 23:30:00',
    resourceId: 'r5',
    title: 'I am not end-resizable',
    endResizable: false,
    groupId: 3,
    groupName: 'Task3'
  }, {
    id: 9,
    start: '2022-12-21 16:30:00',
    end: '2022-12-21 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks',
    groupId: 4,
    groupName: 'Task4'
  }, {
    id: 6,
    start: '2022-12-22 15:35:00',
    end: '2022-12-23 23:30:00',
    resourceId: 'r6',
    title: 'I am normal',
    groupId: 1,
    groupName: 'Task1'
  }, {
    id: 8,
    start: '2022-12-25 15:50:00',
    end: '2022-12-26 23:30:00',
    resourceId: 'r1',
    title: 'I am locked',
    movable: false,
    resizable: false,
    bgColor: 'red',
    groupId: 1,
    groupName: 'Task1'
  }, {
    id: 10,
    start: '2022-12-26 18:30:00',
    end: '2022-12-26 23:30:00',
    resourceId: 'r2',
    title: 'R2 has many tasks',
    groupId: 4,
    groupName: 'Task4'
  }, {
    id: 11,
    start: '2022-12-27 18:30:00',
    end: '2022-12-27 23:30:00',
    resourceId: 'r4',
    title: 'R4 has many tasks',
    groupId: 4,
    groupName: 'Task4'
  }, {
    id: 12,
    start: '2022-12-28 18:30:00',
    end: '2022-12-28 23:30:00',
    resourceId: 'r6',
    title: 'R6 has many tasks',
    groupId: 3,
    groupName: 'Task3'
  }],
  eventsForCustomEventStyle: [{
    id: 1,
    start: '2022-12-18 09:30:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r1',
    title: 'I am finished',
    bgColor: '#D9D9D9',
    type: 1
  }, {
    id: 2,
    start: '2022-12-18 12:30:00',
    end: '2022-12-26 23:30:00',
    resourceId: 'r2',
    title: 'I am not resizable',
    resizable: false,
    type: 2
  }, {
    id: 3,
    start: '2022-12-19 12:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r3',
    title: 'I am not movable',
    movable: false,
    type: 3
  }, {
    id: 4,
    start: '2022-12-19 14:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r4',
    title: 'I am not start-resizable',
    startResizable: false,
    type: 1
  }, {
    id: 5,
    start: '2022-12-19 15:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r5',
    title: 'I am not end-resizable',
    endResizable: false,
    type: 2
  }, {
    id: 6,
    start: '2022-12-19 15:35:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r6',
    title: 'I am normal',
    type: 3
  }, {
    id: 7,
    start: '2022-12-19 15:40:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r7',
    title: 'I am exceptional',
    bgColor: '#FA9E95',
    type: 1
  }, {
    id: 8,
    start: '2022-12-19 15:50:00',
    end: '2022-12-19 23:30:00',
    resourceId: 'r1',
    title: 'I am locked',
    movable: false,
    resizable: false,
    bgColor: 'red',
    type: 2
  }, {
    id: 9,
    start: '2022-12-19 16:30:00',
    end: '2022-12-27 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 1',
    type: 3
  }, {
    id: 10,
    start: '2022-12-20 18:30:00',
    end: '2022-12-20 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 2',
    type: 1
  }, {
    id: 11,
    start: '2022-12-21 18:30:00',
    end: '2022-12-22 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 3',
    type: 2
  }, {
    id: 12,
    start: '2022-12-23 18:30:00',
    end: '2022-12-27 23:30:00',
    resourceId: 'r1',
    title: 'R1 has many tasks 4',
    type: 3
  }]
};

type Events = {
  id: number
  start: string
  end: string
  resourceId: string
  title: string
}

type ResourcesType = {
  name: string
  id: string
  groupOnly?: boolean
  parentId?: string
}

const NewScheduler = () => {
    const schedulerData = new SchedulerData(dayjs().format(DATE_FORMAT), ViewType.Week);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { resources, events } = DemoData
  
//set locale dayjs to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
schedulerData.setSchedulerLocale(dayjsLocale);
console.log("antdLocale: ", antdLocale)
    schedulerData.setCalendarPopoverLocale(antdLocale as unknown as string);
    schedulerData.setResources(resources as ResourcesType[]);
    schedulerData.setEvents(events as Events[]);

const [viewModel, setViewModel] = useState<SchedulerData>(schedulerData);
const prevClick = (schedulerData: SchedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(events as Events[]);
    setViewModel(schedulerData);
  };

  const nextClick = (schedulerData: SchedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(events as Events[]);
    setViewModel(schedulerData);
  };

  const onViewChange = (schedulerData: SchedulerData, view: { viewType: ViewType | undefined; showAgenda: boolean | undefined; isEventPerspective: boolean | undefined; }) => {
    const start = new Date();
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(events as Events[]);
    setViewModel(schedulerData);
    function secondsBetween(date1: Date, date2: Date) {
      const diff = Math.abs(date1.getTime() - date2.getTime());
      return diff / 1000;
    }

    console.log(`Elapsed seconds: ${secondsBetween(start, new Date())}`);
  };

  const onSelectDate = (schedulerData: SchedulerData, date: string | undefined) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events as Events[]);
    setViewModel(schedulerData);
  };

  const ops1 = (schedulerData: SchedulerData<EventItem>, event: EventItem) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  const ops2 = (schedulerData: SchedulerData<EventItem>, event: EventItem) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  const newEvent = (schedulerData: SchedulerData, slotId: string, slotName: string, start: string, end: string, type: string, item: EventItem) => {
    // return <NewEventModal />
    if (confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item?.title}}`)) {
      let newFreshId = 0;
      schedulerData.events.forEach(item => {
        if (item.id as number >= newFreshId) newFreshId = item.id as number + 1;
      });

      const newEvent = {
        id: newFreshId,
        title: 'New event you just created',
        start,
        end,
        resourceId: slotId,
        bgColor: 'purple',
      };
      schedulerData.addEvent(newEvent);
      console.log(newEvent)
      setViewModel(schedulerData);
    }
  };

  const updateEventStart = (schedulerData: SchedulerData, event: EventItem, newStart: string) => {
    if (confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
      schedulerData.updateEventStart(event, newStart);
    }
    setViewModel(schedulerData);
  };

  const updateEventEnd = (schedulerData: SchedulerData, event: EventItem, newEnd: string) => {
    if (confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    setViewModel(schedulerData);
  };

  const moveEvent = (schedulerData: SchedulerData, event: EventItem, slotId: string, slotName: string, start: string, end: string) => {
    if (
      confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      setViewModel(schedulerData);
    }
  };

  const onScrollRight = (schedulerData: SchedulerData, schedulerContent: ReactNode, maxScrollLeft: number) => {
    if (schedulerData.viewType === ViewType.Day) {
      schedulerData.next();
      schedulerData.setEvents(events as Events[]);
      setViewModel(schedulerData);

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  const onScrollLeft = (schedulerData: SchedulerData, schedulerContent: ReactNode) => {
    if (schedulerData.viewType === ViewType.Day) {
      schedulerData.prev();
      schedulerData.setEvents(events as Events[]);
      setViewModel(schedulerData);

      schedulerContent.scrollLeft = 10;
    }
  };

  const onScrollTop = (schedulerData: SchedulerData, schedulerContent: ReactNode, maxScrollTop: number) => {
    console.log('onScrollTop');
  };

  const onScrollBottom = (schedulerData: SchedulerData, schedulerContent: ReactNode, maxScrollTop: number) => {
    console.log('onScrollBottom');
  };

  const toggleExpandFunc = (schedulerData: SchedulerData, slotId: string) => {
    schedulerData.toggleExpandStatus(slotId);
    setViewModel(schedulerData);
  };
    return (<Scheduler
        schedulerData={viewModel}
        prevClick={prevClick}
        nextClick={nextClick}
        onSelectDate={onSelectDate}
        onViewChange={onViewChange}
        viewEventClick={ops1}
        viewEventText="Ops 1"
        viewEvent2Text="Ops 2"
        viewEvent2Click={ops2}
        updateEventStart={updateEventStart}
        updateEventEnd={updateEventEnd}
        moveEvent={moveEvent}
        newEvent={newEvent}
        onScrollLeft={onScrollLeft}
        onScrollRight={onScrollRight}
        onScrollTop={onScrollTop}
        onScrollBottom={onScrollBottom}
        toggleExpandFunc={toggleExpandFunc}
      />);

}

export default WrapperFun(NewScheduler);