import React, { PropsWithChildren } from "react";

interface TimelineComponents {
    Item: React.FC<PropsWithChildren>;
    Point: React.FC<TimelinePointProps>;
    Content: React.FC<PropsWithChildren>;
    Time: React.FC<PropsWithChildren>;
    Title: React.FC<PropsWithChildren>;
    Body: React.FC<PropsWithChildren>;
}

const Timeline: React.FC<PropsWithChildren> & TimelineComponents = ({ children }) => {
    return <ol className="items-center sm:flex">{children}</ol>;
};

const TimelineItem: React.FC<PropsWithChildren> = ({ children }) => {
    return <li className="relative mb-6 sm:mb-0">{children}</li>;
};

interface TimelinePointProps {
    icon: React.ReactNode;
}
const TimelinePoint: React.FC<TimelinePointProps> = ({ icon }) => {
    return (
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            {icon}
        </div>
    );
};

const TimelineContent: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="mt-3 sm:pe-8">{children}</div>;
};

const TimelineTime: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{children}</time>
    );
};

const TimelineTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>;
};

const TimelineBody: React.FC<PropsWithChildren> = ({ children }) => {
    return <p className="text-base font-normal text-gray-500 dark:text-gray-400">{children}</p>;
};

Timeline.Item = TimelineItem;
Timeline.Point = TimelinePoint;
Timeline.Content = TimelineContent;
Timeline.Time = TimelineTime;
Timeline.Title = TimelineTitle;
Timeline.Body = TimelineBody;

export default Timeline;
