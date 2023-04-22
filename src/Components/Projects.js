import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificatCard } from "./CertificatCard";
 import projImg1 from "../assets/img/project-img1.png";
 import projImg2 from "../assets/img/project-img2.png";
 import projImg3 from "../assets/img/dip_gest.jpeg";
 import projImg4 from "../assets/img/dip_poly.jpeg";
 import projImg6 from "../assets/img/certifCloud.PNG";
 import projImg7 from "../assets/img/CertifDataPy.PNG";
 import projImg8 from "../assets/img/certifDevops.PNG";
 import projImg9 from "../assets/img/certifIntroDevops.PNG";
 import projImg10 from "../assets/img/CertifPythonFunct.PNG";
 import projImg11 from "../assets/img/CertifReact.PNG";
 import projImg12 from "../assets/img/CertifScrum.PNG";
 import projImg13 from "../assets/img/CertifMOOC.PNG";
 import test2 from "../assets/img/test2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Diplôme Bac Option Sciences Physique",
      description: "2013/2014",
      imgUrl: projImg1,
    }
    ,
    {
      title: "Attestation Bureautique  ",
      description: "2014/2015",
      imgUrl: projImg4,
    },
   
    {
      title: "Diplôme Technicien spécialisé en Développement Informatique",
      description: "2017/2019",
      imgUrl: projImg2,
    },
    
    {
      title: "Diplôme Technicien spécialisé en Gestion des Entreprises",
      description: "2015/2017",
      imgUrl: projImg3,
    }
   
  ];
  const certificats = [
   
    {
      title: "Certificat IBM",
      description: "Introduction to Cloud Computing",
      imgUrl: projImg6,
    },
    {
      title: "Certificat University of Mechigan ",
      description: "Data Collection and Processing with Python",
      imgUrl: projImg7,
    },
    {
      title: "Certificat IBM",
      description: "Devops , Cloud and Agile Foundations ",
      imgUrl: projImg8,
    },
    {
      title: "Certificat IBM",
      description: "Introduction to Devops",
      imgUrl: projImg9,
    },
    {
      title: "Certificat University of Mechigan",
      description: "Python Functions , Files and Dictionnaries",
      imgUrl: projImg10,
    },
    ,
    {
      title: "Certificat Meta ",
      description: "Advanced React",
      imgUrl: projImg11,
    },
    {
      title: "Certificat IBM",
      description: "Introduction to Agile Devlopment and Scrum",
      imgUrl: projImg12,
    },
    {
      title: "Certificat MOOC",
      description: "Comptabilité des opérations courantes",
      imgUrl: projImg13,
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
                <h2>Cursus</h2>
                <p>Glissez la souris sur les Cards pour plus d'infos</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Diplômes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Expériences</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                      <Row>
                        {
                          certificats.map((certificat, index) => {
                            return (
                              <CertificatCard
                                key={index}
                                {...certificat}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <table>
                      <tr>
                          <td>Stage de 01/08/2022 au 31/08/2022 Développeur informatique chez SEOCOM :</td>
                          <td>
                            <ul>
                              <li>Création application Web sous Wordpress pour location des voitures.</li>
                              <li>Création  application Web sous Php pour e-commerce.</li>
                          </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Stage de 01/02/2021 au 01/03/2021 Développeur informatique chez KAINET Communication :</td>
                          <td>
                            <ul>
                              <li>Création application Web  sous Wordpress pour bureau d’architecture.</li>
                              <li>Création deux applications Web  sous Php pour agence de voyage touristique.</li>
                          </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Stage de 20/01/2020 au 28/02/2020 Technicien spécialisé en développement  informatique chez NovaPrint :</td>
                          <td>
                            <ul>
                              <li>Création application mobile de design t-shirt (Android Java).</li>
                              <li>Création application bureau de gestion de stock (Linq to SQL).</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Stage de 15/01/2018 au 28/02/2018 Assistante RH chez BEST RH :</td>
                          <td>
                            <ul>
                              <li>gestion de rendez-vous avec clients.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Stage de 03/04/2017 au 02/05/2017 Employé de bureau chez Fiduciaire ALBOUSTANE :</td>
                          <td>
                            <ul>
                              <li>Gestion d’accueil et des dossiers.</li>
                              <li>Saisie des bulletins de paie et des opérations courantes en logiciel TOPAZE.</li>
                              <li>Déclaration du TVA et télé déclaration.</li>
                            </ul>
                          </td>
                        </tr>

</table>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="forth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={test2}></img>
    </section>
  )
}