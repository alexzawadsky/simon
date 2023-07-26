import camera from "../assets/camera.png";
import blister from "../assets/blister2.png";
import { Fade } from "react-reveal";

const Footer = () => {
    return (
        <section className="bg-secondary flex flex-col items-center pt-20 gap-10 ">
            <Fade bottom>
                <p className="text-center text-white font-primary text-xl lg:text-3xl max-md:px-7 md:w-1/2">
                    for me, <span className="text-accent">photography</span> is
                    more than just a way of earning money. First of all this is
                    my <span className="text-accent">hobby</span> and my{" "}
                    <span className="text-accent">passion</span>. My goals are
                    to have fun with my art and memorize your moments.
                </p>
            </Fade>
            <Fade bottom>
                <div className="relative w-64">
                    <img src={blister} className="drop-shadow-lg" />
                    <p className="absolute font-secondary text-white text-4xl drop-shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                        contact me
                    </p>
                </div>
                <p className="font-primary text-white text-lg lg:text-2xl text-center">
                    Telegram:{" "}
                    <a
                        href="https://t.me/RafSiemons"
                        target="_blank"
                        className="hover:underline"
                    >
                        RafSiemons
                    </a>
                    <br />
                    Mobile:{" "}
                    <a
                        href="tel:+31627313868"
                        target="_blank"
                        className="hover:underline"
                    >
                        +31627313868
                    </a>
                    <br />
                    Mail:{" "}
                    <a
                        href="mailto:photosem.jpg@gmail.com"
                        target="_blank"
                        className="hover:underline"
                    >
                        photosem.jpg@gmail.com
                    </a>{" "}
                    <br />
                    Instagram:{" "}
                    <a
                        href="https://www.instagram.com/photosem.jpg/"
                        target="_blank"
                        className="hover:underline"
                    >
                        photosem.jpg
                    </a>
                </p>
            </Fade>
            <Fade bottom>
                <img src={camera} className="w-3/4 md:w-3/5 lg:w-1/3" />
            </Fade>
        </section>
    );
};

export default Footer;
