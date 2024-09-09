import React from "react";

interface TitleProps {
    children: React.ReactNode;
    theme: String
}

const Title: React.FC<TitleProps> = ({ children, theme=null }) => {
    return (<div className={`text-[80px] leading-[100px] ${theme == 'light' ? 'text-white' : 'text-black-1'} font-bold relative inline-block pl-8`}>
        <div className={`h-[1px] w-[95px] ${theme == 'light' ? 'bg-white' : 'bg-black-1'} absolute top-1/2 translate-y-[-50%] right-9`}>
            <span className={`w-[7px] h-[7px] rounded-full ${theme == 'light' ? 'bg-white' : 'bg-black-1'} block absolute top-1/2 -right-[5px] translate-y-[-50%]`}></span>
        </div>
        <span className="opacity-20">{children}</span>
    </div>)
}

export default Title;