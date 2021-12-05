import { useState } from "react";
import Image from "next/image";

import NavbarLinks from "components/Navbar/NavbarLinks";
import { IconButton } from "components/Button";

import { navigationLinks } from "constants/navigation";
import IconEmail from "assets/icon-email.svg";
import IconTelephone from "assets/icon-telephone.svg";
import IconTwitter from "assets/icon-twitter.svg";
import IconFacebook from "assets/icon-facebook.svg";
import IconLinkedin from "assets/icon-linkedin.svg";
import IconInstagram from "assets/icon-instagram.svg";

function FooterInfo() {
    return (
        <div className="footer-information-container">
            <div className="flex flex-row">
                <h1 className="flex text-primary text-header2 font-bold">Tanya</h1>
                <h1 className="text-white text-header2 ml-3 font-bold">Notaris</h1>
            </div>
            <div className="footer-address-container">
                <h3 id="footer-section-title">PT. Tanya Notaris</h3>
                <p id="footer-address-text">
                    Gedung The East Lt. 42, Jl. DR. Ide Anak Agung Gde Agung No.1, RT.10/RW.1, East
                    Kuningan, Setiabudi, South Jakarta City, Jakarta 12950
                </p>
                <p className="pt-3" id="footer-address-text">
                    Jam Kerja pelayanan 08.00 - 17.00
                </p>
            </div>
        </div>
    );
}

function FooterNav() {
    const [links, setLinks] = useState(navigationLinks);

    return (
        <div className="footer-nav-container">
            <div className="flex-1">
                <h3 id="footer-section-title">Perusahaan</h3>
                <nav id="footer-nav-text">
                    <ul>
                        {links.map(({ link, name }, i) => (
                            <NavbarLinks
                                key={`item-${i}`}
                                link={link}
                                name={name}
                                style={i !== links.length - 1 ? { marginBottom: "0.8rem" } : {}}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex-1">
                <h3 id="footer-section-title">Kontak Kami</h3>
                <div className="flex flex-row mt-4">
                    <Image
                        src={IconEmail}
                        alt="Tanya Notaris Logo"
                        objectFit="contain"
                        width="24"
                        height="24"
                    />
                    <p className="text-body text-white ml-2">info@tanyanotaris.id</p>
                </div>
                <div className="flex flex-row mt-2">
                    <Image
                        src={IconTelephone}
                        alt="Tanya Notaris Logo"
                        objectFit="contain"
                        width="24"
                        height="24"
                    />
                    <p className="text-body text-white ml-2">083806169710</p>
                </div>
            </div>
        </div>
    );
}

function FooterSocialMedia() {
    const [socialMedia, setSocialMedia] = useState([
        {
            icon: IconTwitter,
            alt: "Twitter",
            redirectUrl: "https://twitter.com/tanyanotarisid",
        },
        {
            icon: IconFacebook,
            alt: "Facebook",
            redirectUrl: "https://www.facebook.com/tanyanotaris",
        },
        {
            icon: IconLinkedin,
            alt: "Linkedin",
            redirectUrl: "https://www.linkedin.com/company/tanya-notaris",
        },
        {
            icon: IconInstagram,
            alt: "Instagram",
            redirectUrl: "https://www.instagram.com/tanyanotarisid",
        },
    ]);

    const handleOpenSocialMedia = (item) => {
        if (!item || !item.redirectUrl) return false;
        window.open(item.redirectUrl);
        return true;
    };

    return (
        <div className="footer-social-container">
            <h3 className="text-white font-bold text-header4 mb-4">Follow Us</h3>
            <div className="flex flex-row">
                {socialMedia.map((item, index) => (
                    <IconButton
                        key={Math.random()}
                        src={item.icon}
                        onClick={() => handleOpenSocialMedia(item)}
                        alt={item.alt}
                        styles={{
                            padding: 0,
                            marginLeft: index !== 0 ? "1rem" : 0,
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function index() {
    return (
        <footer className="footer-container">
            <FooterInfo />
            <FooterNav />
            <FooterSocialMedia />
            <p className="copyright-text">© 2021 PT. Tanya Notaris. All rights reserved.</p>
        </footer>
    );
}
