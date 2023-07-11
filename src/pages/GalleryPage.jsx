import React, { useEffect } from "react";
import { useParams } from "react-router";
import galleries from "../../galleries.json";
import InfHSlider from "../components/InfHSlider";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const { gallery } = useParams();
  const galleryImagesInfo = galleries[gallery].images;
  const images = galleryImagesInfo.map((k, si) =>
    Array(k)
      .fill(0)
      .map((_, pi) => `/images/${gallery}/${si + 1}/${pi + 1}.jpg`)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-secondary min-h-screen grid gap-10 pt-10 max-w-full overflow-hidden place-content-start">
      <h1 className="group w-fit ml-10">
        <Link
          to="/"
          className="font-secondary text-6xl text-accent flex transition-all items-center gap-10"
        >
          <img
            src={arrow}
            className="h-10 transition-all group-hover:scale-125"
          />
          {galleries[gallery].title}
        </Link>
      </h1>
      {images.map((photoshoot, key) => (
        <InfHSlider key={key} images={photoshoot} />
      ))}
    </section>
  );
};

export default GalleryPage;
