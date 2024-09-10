import React from "react";

interface BtnProps {
    children: React.ReactNode;
    theme: string;
    className: string;
}

const Btn: React.FC<BtnProps> = ({ children, theme = 'green', className = '' }) => {
    const cls: {[key: string]: any} = {
        'green': 'py-[10px] px-5 bg-green hover:bg-[#658C5D] active:bg-[#476E3F] uppercase font-normal text-white text-lg leading-[23px] ' + className,
        'light-green': 'border border-green text-green uppercase py-2 px-[18px] text-[15px] leading-[19px] font-normal hover:bg-green hover:text-white active:bg-[#658C5D] active:border-[#658C5D] active:text-white ' + className,
        'light': 'py-2 px-[18px] border border-black-1 uppercase text-[15px] leading-[19px] hover:bg-[rgba(19,19,19,0.15)] active:bg-[rgba(19,19,19,0.3)] ' + className,
    }
    return (
        <button className={cls[theme]}>
            {children}
        </button>
    )
}

export default Btn;