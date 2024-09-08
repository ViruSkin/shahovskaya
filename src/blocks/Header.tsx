export default function Header() {
    return (
        <div className="relative w-full">
            <img src="/images/header.webp" className="md:w-full md:object-cover brightness-75" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mx-auto h-full max-w-screen-lg relative z-10">
                    <div className="flex flex-col h-full">
                        <div className="flex h-full items-end text-white mb-10">
                            <div className="space-y-3">
                                <div className="text-5xl font-thin">ШАХОВСКАЯ УСАДЬБА</div>
                                <div className="font-thin">УНИКАЛЬНЫЙ КЛУБНЫЙ ЖИЛОЙ КОМПЛЕКС В СЕРДЦЕ ПОДМОСКОВЬЯ</div>
                                <div>
                                    <button>ОБРАТНЫЙ ЗВОНОК</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
