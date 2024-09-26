import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/1.jpg";
import heroImage from "../../public/img/me_smile_cover.jpeg";

const heroContent = {
    shapeImage: shapeImage,
    heroImage: heroImage,
    name: "Lauren Shores",
    description: `Harnessing data to create understanding and provide solutions for over 8 years.`,
};

const Hero = () => {
    return (
        //    HERO
        <div className="edina_tm_hero" id="home">
            <div className="content">
                <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
                    <Image src={heroContent.heroImage} alt="brand"/>
                </div>
                <div className="extra">
                    <h3
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                        className="hello"
                    >
                        {heroContent.name}
                    </h3>
                    <h1
                        className="name"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
            <span className="typer-toper">
              <ReactTyped
                  loop
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["Data Scientist", "Instructor", "Speaker"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
              />
            </span>
                    </h1>
                    <p
                        className="text"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        {heroContent.description}
                    </p>

                    <div
                        className="social"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                    >
                        <Social/>
                    </div>
                    <div
                        className="edina_tm_button"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                    >
                        <a href="/img/sample.pdf" download className="color">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // /HERO
    );
};

export default Hero;
