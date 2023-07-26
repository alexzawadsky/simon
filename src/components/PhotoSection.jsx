import flower from "../assets/flower.png";
import blister from "../assets/blister1.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import InfHSlider from "./InfHSlider";

const PhotoSection = ({ title, images, first, url }) => {
    return (
        <Fade bottom>
            <figure className={`relative ${!first ? "mt-36" : "mt-10"}`}>
                <img
                    src={flower}
                    className="w-32 lg:w-40 absolute left-1/2 -translate-x-1/2 -top-16"
                />
                <InfHSlider images={images} />
                <Link
                    to={url}
                    className="w-60 lg:w-72 absolute left-1/2 -translate-x-1/2 -bottom-10"
                >
                    <div className="relative">
                        <img src={blister} className="drop-shadow-lg" />
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-secondary text-secondary text-4xl drop-shadow-md">
                            {title}
                        </p>
                    </div>
                </Link>
            </figure>
        </Fade>
    );
};

export default PhotoSection;
