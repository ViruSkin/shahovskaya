export default function Header() {
    return (
        <div
            className="relative w-full"
            style={{
                paddingTop: "56.25%",
                backgroundImage: `url('/images/header.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
                <img
                    src="/images/logotype.svg"
                    alt="логотип"
                    className="max-w-full h-auto -mt-5 w-72 transition-all duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
            </div>
        </div>
    );
}
