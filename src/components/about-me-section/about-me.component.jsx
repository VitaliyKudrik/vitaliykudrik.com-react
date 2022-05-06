import { useState, useEffect } from "react";
import "./about-me.styles.css";

const AboutMe = () => {
  const description = `I was born in Chernivitsi, Ukraine (fun fact, Mila Kunis was also born there). When I was 5 years old my family and I moved to the US and we
    have been living in Washington state ever since. (Isn't it neat how the Python logo has the same color scheme as the Ukrainian flag!)`;
  const descriptionKnowledge = `I am a first generation college graduate and have recently completed my degree in Computer Science at Washington State University. I pursued
    CS because I've always enjoyed making, breaking, and fixing things, and have been captivated by computers and technology since childhood.
    Through my four year experience at college, I have had my eyes opened to a whole new world of innovation and creativity. Although I've
    graduated now, I haven't stopped learning. I have recently taken a Python class and a JavaScript class on Udemy. The JavaScript class in
    particular, has come in handy for building this portfolio website.`;

  const descriptionHobby = `High school and college introduced me to a whole slew of hobbies that I currently enjoy to this day.`;
  const descriptionHobby2 = `Chess: In high school I was president of the Chess club and would spend most of my lunch breaks beating my teachers.`;
  const descriptionHobby3 = `Volleyball: At Clark college, I took a volleyball class and played volleyball for the first time ever in my life. I immediately fell in love
    with the sport and have now been playing for about 7 years. Clark college volleyball intramurals was also where I met my lovely wife Emma,
    who is also a very strong volleyball player. Since starting the sport, I have participated in and won a few men's doubles and also
    reverse-coed doubles tournaments alongside my wife in the Vancouver/Portland area. `;
  const descriptionHobby4 = `Table Tennis: Washington State University was where I was introduced to Table Tennis and eventually ended up forming the WSU Table Tennis
    Club with a few friends. As a club we held a few recreational tournaments and I thoroughly enjoyed playing in them and winning a few.`;

  const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    setWindowSize(getWindowWidth());
  }, [windowSize]);

  window.addEventListener("resize", setWindowSize);

  function getWindowWidth() {
    return window.innerWidth;
  }

  // Changes css based on screensize
  const setView = (screenSize, tag) => {
    return (
      <div id={screenSize} className={`section__container-${tag}`}>
        About me
        <h3 id={screenSize} className={`section__organizer-${tag}`}>
          Origin
        </h3>
        <h2 id={screenSize} className={`section__description-${tag}`}>
          {description}
          <br />
          <br />
        </h2>
        <h3 id={screenSize} className={`section__organizer-${tag}`}>
          Education
        </h3>
        <h2 id={screenSize} className={`section__description-${tag}`}>
          {descriptionKnowledge}
          <br />
          <br />
        </h2>
        <h3 id={screenSize} className={`section__organizer-${tag}`}>
          Hobbies
        </h3>
        <h2 id={screenSize} className={`section__description-${tag}`}>
          {descriptionHobby}
          <br />
          <br />
          {descriptionHobby2}
          <br />
          <br />
          {descriptionHobby3}
          <br />
          <br />
          {descriptionHobby4}
          <br />
          <br />
        </h2>
      </div>
    );
  };

  const sectionHandler = () => {
    let section;
    if (windowSize >= 1025) {
      const sectionName = windowSize > 1920 ? "content-desktop-big" : "content-desktop";
      section = (
        <section className="section" id="section--1">
          {setView(sectionName, "desktop")}
        </section>
      );
    } else if (windowSize < 1025 && windowSize > 370) {
      section = (
        <section className="section" id="section--1">
          {setView("content-mobile", "mobile")}
        </section>
      );
    } else {
      section = (
        <section className="section" id="section--1">
          {setView("#content-mobile-small", "tiny")}
        </section>
      );
    }

    return section;
  };

  return sectionHandler();
};

export default AboutMe;
