"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { FaVk } from "react-icons/fa";

export default function Component() {
    return (
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Careers</Footer.Link>
                            <Footer.Link href="#">Brand Center</Footer.Link>
                            <Footer.Link href="#">Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">iOS</Footer.Link>
                            <Footer.Link href="#">Android</Footer.Link>
                            <Footer.Link href="#">Windows</Footer.Link>
                            <Footer.Link href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Шаховская усадьба" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://vk.com/ShakhovskayaUsadba"
                            icon={FaVk}
                            className="hover:text-[#4C75A3]"
                        />
                        <Footer.Icon
                            href="https://t.me/ShakhovskayaUsadba"
                            icon={BsTelegram}
                            className="hover:text-[#0088cc]"
                        />
                        <Footer.Icon
                            href="https://facebook.com/ShakhovskayaUsadba"
                            icon={BsFacebook}
                            className="hover:text-[#1877F2]"
                        />
                        <Footer.Icon
                            href="https://instagram.com/ShakhovskayaUsadba"
                            icon={BsInstagram}
                            className="hover:text-[#E1306C]"
                        />
                        <Footer.Icon
                            href="https://x.com/ShakhovskayaUsadba"
                            icon={BsTwitter}
                            className="hover:text-[#1DA1F2]"
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
