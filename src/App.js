import React, { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import "./styles/style.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  const aboutRef = useRef(null);
  const exprienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contectRef = useRef(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="App">
      <iframe src="/bg.html"></iframe>
      <header>
        <span>Sine Yang</span>
        <ul>
          <li
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            about
          </li>
          <li
            onClick={() =>
              exprienceRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            exprience
          </li>
          <li
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            projects
          </li>
          <li
            onClick={() =>
              contectRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            contect
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1ibfRsG7SItuG0U-hKCbWsW6yZTn4OARM/view?usp=drive_link"
              download
            >
              resume
              <i className="fa-solid fa-download"></i>
            </a>
          </li>
        </ul>
      </header>
      <section
        className={`about ${showContent ? "fade-in" : ""}`}
        ref={aboutRef}
      >
        <p>
          Hi 👋🏼 I am Sine <br /> A Taiwanese web developer who is <br />{" "}
          experienced in React and Node.js. <br /> Additionally, I am an
          enthusiast of <br /> frontend technologies and UI/UX.
        </p>
        <img src="/img/face.png" alt="" />
      </section>
      <section className="exprience" ref={exprienceRef}>
        <span className="expriencetitle">Exprience</span>
        <div className="colleage expriencediv">
          <div className="logo">
            <img src="/img/mingchuan_logo.png" alt="" />
          </div>
          <div className="content">
            <span className="title">
              MingChuan University{" "}
              <span className="date">Sat 2018 - Jun 2022</span>
            </span>
            <span className="category">Department of Commercial Design</span>
            <span className="prize">
              2022 IJungle Excellent Work / First Prize in Crowdfunding
              Competition
            </span>
          </div>
        </div>
        <div className="studio expriencediv">
          <div className="logo">
            <img src="/img/wyb_logo.png" alt="" />
          </div>
          <div className="content">
            <span className="title">
              wangyuanbing Design Studio{" "}
              <span className="date">Aug 2022 - Feb 2023</span>
            </span>
            <span className="category">Graphic Designer</span>
            <span className="prize">
              2023 Tokyo TDC Excellent Work / Maritime and Port Bureau Signage
              System Deisgn
            </span>
          </div>
        </div>
      </section>
      <section className="projects" ref={projectsRef}>
        <span>Projects</span>
        <div className="project">
          <Link
            to="https://opensea-client.onrender.com/"
            className="opensea projectdiv"
          >
            <div className="image">
              <video src="/img/opensea.mp4" loop autoPlay></video>
            </div>
            <div className="content">
              <span className="title">Opensea.io | Fork</span>
              <div className="languagediv">
                <span className="language">React</span>
                <span className="language">Node.js</span>
                <span className="language">MongoDB</span>
              </div>
              <span className="description">
                Opensea is currently the largest NFT marketplace. This project
                primarily focuses on replicating the frontend UI and
                interactions of Opensea's homepage and item pages.
              </span>
            </div>
          </Link>
          <Link
            to="https://platform-client-rjff.onrender.com/"
            className="course projectdiv"
          >
            <div className="image">
              <img src="/img/couresa.jpg" alt="" />
            </div>
            <div className="content">
              <span className="title">Online Course System</span>
              <div className="languagediv">
                <span className="language"> React</span>
                <span className="language"> Node.js</span>
                <span className="language"> JWT</span>
              </div>
              <span className="description">
                This project is an online course system where teachers can log
                in to search, create, update, and delete online courses. As a
                student, you can register for courses.
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className="contect" ref={contectRef}>
        <span className="contectword">Contect</span>
        <div className="main">
          <div className="link">
            <Link to="https://www.linkedin.com/in/%E5%87%B1%E9%BA%9F-%E6%A5%8A-6ab02423b/">
              <i class="fa-brands fa-linkedin"></i>
              <span>Linkedin</span>
            </Link>

            <Link to="https://github.com/kailinnnnn">
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </Link>

            <a
              href="https://drive.google.com/file/d/1ibfRsG7SItuG0U-hKCbWsW6yZTn4OARM/view?usp=drive_link"
              download
            >
              <i class="fa-solid fa-download"></i>
              <span>Resume</span>
            </a>
          </div>

          <img src="/img/call.png" alt="" />
        </div>

        {/* <p>Copyright © 2023 Sine Yang</p> */}
      </section>
    </div>
  );
}

export default App;
