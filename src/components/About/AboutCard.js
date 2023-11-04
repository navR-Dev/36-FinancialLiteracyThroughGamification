import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to<span className="purple"> Stocks And Ladders </span>
            - Your Gateway to Learning Trading Through Gaming! <br></br>
            <br /> Are you an aspiring trader looking to break into the exciting world of financial markets,
             but find traditional resources daunting and complex? Look no further!<br></br><br></br>
             <span className="purple">Stocks And Ladders</span> is here to make learning how to trade a fun and engaging experience.
            <br />
            <br></br>
            <span className="purple">What Sets Us </span>Apart:
            <br></br>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"><b>Learn by Doing:</b></span> We understand that hands-on experience is invaluable. Our platform allows you to apply trading concepts in a simulated environment, making it easy to understand the dynamics of real-world markets.
            </li><br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"><b>Beginner-Friendly:</b></span> No prior trading knowledge required! We cater to beginners and ensure that our content is approachable, with step-by-step guidance and interactive lessons.
            </li><br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"><b>Game-Based Learning:</b></span> We've gamified the learning experience. Our platform features a captivating trading game that enables you to practice your skills in a risk-free setting, making learning both entertaining and effective.
            </li><br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"><b>Comprehensive Resources:</b></span> In addition to the game, we provide a wealth of educational resources, ensuring you have access to a well-rounded learning experience.
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
