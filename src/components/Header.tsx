export default function Header() {
    return (
        <div className="relative w-full">
            <div className="md:hidden mx-32 mt-8">
                <img src="/images/logotype3.svg" alt="логотип" />
            </div>
            <img src="/images/header.jpg" alt="Header Background" className="w-full h-full object-cover" />

            <div className="hidden md:flex flex-col items-center absolute top-0 left-0 w-full h-full">
                <img
                    src="/images/logotype.svg"
                    alt="логотип"
                    className="max-w-full h-auto -mt-5 w-72 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
            </div>
        </div>
    );
}
