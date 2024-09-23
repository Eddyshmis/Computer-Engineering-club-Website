import Cards from "../../components/Cards-folder/Cards";
import Card from "react-bootstrap/Card";
import NavigationTabs from "../../components/Nav-folder/NavigationTabs";
import NavigationBar from "../../components/NavigationBar";
import WebDevImage from "../../assets/WebDevImage.png";
import GameDevImage from "../../assets/PythonGameDevImage.png"
import CompEngineeringImage from "../../assets/ComputerEngineeringImage.png"
import "./Home.css";

const home = () => {
  return (
    <>
      <NavigationBar />
      <div className="block-section">
        <Card style={{ width: "110rem",height:"12rem"}} className="text-bg-dark shadow">
          <Card.Body>
            <Card.Title className="fs-1">
              The Computer Engineering Club
            </Card.Title>
            <Card.Text>
              Our club is dedicated to expanding the world of technology,
              innovation and engineering within our school. Whether you’re a
              seasoned programmer, hardware tinkerer or just curious, our club
              offers opportunities to learn and gain hands-on experience. We
              empower our students to learn, innovate, and develop their own
              unique skills.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="card_container">
        <Cards cardTitle="Web Dev" hyperLink="WebDev" image={WebDevImage} classes={"custom-text card_indie shadow"}>
          <p>Learn how to create and design dynamic, interactive websites and web applications using the latest technologies.</p>
        </Cards>
        <Cards cardTitle="Game Dev" hyperLink="GameDev" image={GameDevImage} classes={"custom-text card_indie shadow"}>
          <p>Create 2D games using Python, focusing on designing gameplay and coding simple yet engaging interactive experiences.</p>
        </Cards>
        <Cards cardTitle="Computer Engineering" hyperLink="CompEngineering" image={CompEngineeringImage} classes={"custom-text card_indie shadow"}>
          <p>Explore the fusion of hardware and software to build and optimize the technology that powers modern computing systems.</p>
        </Cards>
      </div>
      
    </>
  );
};

export default home;
