import { useEffect, useRef, useState } from "react";

const InfHSlider = ({ images }) => {
    const [imagesList, setImagesList] = useState(images);
    const elementRef = useRef();

    useEffect(() => {
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setImagesList((prevImages) => [...prevImages, ...images]);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.0,
        };
        const observer = new IntersectionObserver(callback, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <ul className="flex overflow-x-auto snap-x">
            {imagesList.map((el, key) => (
                <li
                    key={key}
                    className="snap-start min-w-[80vw] md:min-w-[24rem]"
                >
                    <img
                        src={el}
                        className="aspect-[2/3] object-cover w-[80vw] md:w-96"
                    ></img>
                </li>
            ))}
            <span ref={elementRef} className="w-[1px]">
                .
            </span>
        </ul>
    );
};

export default InfHSlider;
