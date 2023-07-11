import React from "react";
import PhotoSection from "./PhotoSection";
import sections from "../../data";

const Gallery = () => {
  return (
    <section>
      {sections.map((section, key) => (
        <PhotoSection
          title={section.title}
          images={section.images}
          url={section.url}
          key={key}
          first={key === 0}
        />
      ))}
    </section>
  );
};

export default Gallery;
