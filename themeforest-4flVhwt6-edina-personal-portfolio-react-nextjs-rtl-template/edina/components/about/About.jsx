import {useState} from "react";
import Image from "next/image";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    return (
        //    ABOUT
        <div className="edina_tm_about" id="about">
            <div className="container">
                <div className="about_title">
                    <h3>About Me</h3>
                </div>
                <div className="content">
                    <div
                        className="leftpart"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                    >
                        <div className="info">
                            <h3>
                                Hi, Im <span>Lauren Shores</span>
                            </h3>
                            <p>
                                I’m a data scientist who loves digging into data to solve problems and uncover insights
                                to better understand the world and make decisions. With professional experience in both
                                supply chain and real estate, I’ve led multi-million-dollar projects at a Fortune 500
                                company, creating machine learning models and forecasting solutions that make a real
                                impact.
                            </p>
                            <br/>
                            <p>
                                I earned my MS in Predictive Analytics from Northwestern University, and I’m also
                                passionate about mentoring and helping Black professionals in data through my work
                                at BlackTIDES Data. Clear communication is one of my superpowers—it’s how I keep
                                projects moving and everyone on the same page.
                            </p>
                            <br/>
                            <p>
                                Outside of work, you’ll find me diving into personal data projects on topics
                                like race, place, and food. When I’m not geeking out on data, I’m probably exploring new
                                cuisines, reading, watching movies, traveling, or trying something new.
                            </p>
                        </div>
                    </div>
                    {/* End leftpart */}

                    <div className="rightpart">
                        <div className="image">
                            <Image
                                width={445}
                                height={599}
                                src="/img/thumbs/26-35.jpg"
                                alt="thumb"
                            />

                            <div
                                className="main"
                                style={{
                                    backgroundImage: "url(/img/about/3.jpeg)",
                                }}
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                            ></div>

                            <div
                                className="experience"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                            >
                                <div className="info">
                                    <h3>8+ Years</h3>
                                    <span>Of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End righttpart */}
                </div>
            </div>
        </div>
    );
};

export default About;
