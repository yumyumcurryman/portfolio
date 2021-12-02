import React from "react";
import micah from "../img/micah.jpeg";
import "../styles/home.css";
import Skill from "../components/skill";

import java from "../icons/java.svg";
import python from "../icons/python.svg";
import javascript from "../icons/javascript.svg";
import figma from "../icons/figma.svg";
import react from "../icons/react.svg";
import nodejs from "../icons/nodejs.svg";
import firebase from "../icons/firebase.svg";
const resumePath = "../icons/firebase.svg";

const Home = () => {
  return (
    <div id="home-container">
      <img id="micah" src={micah} alt="" />
      <h2>Micah Elias</h2>
      <h4>Full stack developer based in Orinda, CA</h4>
      <h3 className="section-content-header">About</h3>
      <p className="section-content">
        I am currently a student at Amherst College majoring in Computer Science
        and Statistics. Having always been interested in computers, I started
        programming at the age of 11 and have gained experience in many
        different areas including iOS, game dev, and web development. I am
        currently working on a platform called{" "}
        <a href="https:/socialwings.app">Socialwings</a>.
      </p>
      <p className="section-content">
        I enjoy working on every aspect of a project from start to finish. As a
        result, I have experience with graphic design, animation and 3D
        modelling and have used tools like Blender, Photoshop, Figma, and others
        to help complete projects. I always enjoy learning new tools, languages,
        or frameworks to reach project goals.
      </p>
      <div className="contact-section">
        <a href="resources/resume.pdf" download>
          <button>
            <i class="material-icons">file_download</i>
            My Resume
          </button>
        </a>
        <a href="mailto:micahkelias@gmail.com">
          <button>
            <i className="material-icons">email</i>
            Contact Me
          </button>
        </a>
      </div>
      <h3 id="skills-section" className="section-content-header ">
        Skills
      </h3>
      <div className="skills-grid">
        <Skill img={java} skill="Java" />
        <Skill img={python} skill="Python" />
        <Skill img={javascript} skill="JavaScript" />
        <Skill img={firebase} skill="Firebase" />
        <Skill img={react} skill="React" />
        <Skill img={nodejs} skill="NodeJS" />
        <Skill img={figma} skill="Figma" />
      </div>
    </div>
  );
};

export default Home;
