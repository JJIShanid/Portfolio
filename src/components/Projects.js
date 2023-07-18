import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FarmaPre",
      description: "Website For Farmer Using Prediction And Recommendation System With Deep Learning. Data ,HTML,Python",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio",
      description: "Portfolio Using React And Animated CSS. React , bootstrap , Animation",
      imgUrl: projImg2,
    },
    {
      title: "Meethub",
      description: "Multi-User Web Conferencing Application. HTML , JavaScript",
      imgUrl: projImg3,
    },
    {
      title: "Image Steganography",
      description: "Hiding information  in an image or in folder . We use AES algorithm having a Key for secure Communication . Python Language",
      imgUrl: projImg4,
    },
    {
      title: "WeatherApp",
      description: "Weather website using API",
      imgUrl: projImg5,
    },
    {
      title: "E-Commerce",
      description: "React, Javascript",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                 <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fourth">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Five">Experience </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Six">Tab 6</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>Research</h2>
                    <h2>1.Meethub</h2>
                      <p>This research paper introduces MeetHUB, a multi-user web conferencing application designed to facilitate seamless collaboration among remote participants. The paper highlights the key features, architecture, and underlying technologies employed in MeetHUB, along with its potential applications and benefits. Additionally, the research delves into the challenges faced during the development of MeetHUB and the solutions implemented to address them</p>
                      <h2>Published in International Journal of Scientific Research in Engineering and Management</h2>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2>Research</h2>
                    <h2>2.Carbon Content analysis of Coral Bleaching Using Remote Sensing Towards An Operational Algorithm</h2>
                      <p>This research paper focuses on the development of an operational algorithm for analyzing carbon content in coral reefs using remote sensing techniques. The study aims to improve our understanding of coral bleaching, a significant threat to coral ecosystems, by quantifying the carbon content as a key indicator of coral health. The paper discusses the methodology employed in deriving carbon content estimates from remote sensing data and presents the findings from case studies conducted in various coral reef regions.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <h2>Experience</h2>
                    <h2>2.Carbon Content analysis of Coral Bleaching Using Remote Sensing Towards An Operational Algorithm</h2>
                      <p>This research paper focuses on the development of an operational algorithm for analyzing carbon content in coral reefs using remote sensing techniques. The study aims to improve our understanding of coral bleaching, a significant threat to coral ecosystems, by quantifying the carbon content as a key indicator of coral health. The paper discusses the methodology employed in deriving carbon content estimates from remote sensing data and presents the findings from case studies conducted in various coral reef regions.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
