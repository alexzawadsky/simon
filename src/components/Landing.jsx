import blister from "../assets/blister1.png";
import TextCircle from "./TextCircle";
import { Fade } from "react-reveal";

const Landing = () => {
  return (
    <>
      <section
        className="bg-[url('/images/portrait.png')] min-h-screen bg-no-repeat bg-cover bg-center max-md:bg-[45%_0%] bg-fixed"
        id="img-bg"
      >
        <div className="w-full h-[5vh] bg-secondary relative">
          <img
            src={blister}
            className="w-52 absolute bottom-0 translate-y-8 drop-shadow-lg left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="max-md:w-[10%] w-1/6 h-[75vh] bg-secondary relative">
            <Fade left>
              <p
                className="font-primary text-white text-xl lg:text-3xl absolute bottom-1/2 translate-y-1/2 right-2  md:right-10 !rotate-180"
                style={{
                  "writing-mode": "vertical-rl",
                }}
              >
                @photosem.jpg
              </p>
            </Fade>
          </div>
          <div className="max-md:w-[10%] w-1/6 h-[75vh] bg-secondary">
            <Fade right>
              <p className="absolute text-right text-accent text-5xl md:text-8xl lg:text-9xl font-secondary top-40 right-5 lg:right-32">
                kuleshov <br /> simon
              </p>
            </Fade>
          </div>
        </div>
        <Fade>
          <TextCircle text={"you can buy photos you can't buy memories - "} />
        </Fade>
        <div className="w-full h-[20vh] bg-secondary"></div>
      </section>
      <Fade bottom>
        <p className="py-14 max-md:px-10 md:w-1/2 mx-auto font-primary text-xl md:text-3xl leading-8 lg:leading-10 text-center">
          My name is Kuleshov Simon. I am a beginner photographer living in
          Amsterdam. My photography and video career started in 2020. Now, I am
          taking my hobby further and turning it into a professional career. I
          {`'`}m in search of new people, projects, and photoshoots to put my
          creativity and energy into. Today, the main goal for me is not to
          stand still.
        </p>
      </Fade>
    </>
  );
};

export default Landing;
