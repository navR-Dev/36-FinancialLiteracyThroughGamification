import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <span className="purple"><h1>RESOURCES</h1></span>
          </Row>
          <br></br>
          <h4><b>What is Trading?</b></h4>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
          <p>
            Trading is essentially the exchange of goods and services between two entities. In this context, the entities are investors/traders who are exchanging
             stocks of different companies. Stock trading takes place in the stock market. With online trading and investing, stock markets have become accessible 
             to a larger section of people.
          </p><br></br>
          <br></br>
          </Row>

          <h4><b>Types of trading in Stock Market</b></h4><br></br>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <ul>
                <li>
                  <p><b>Day Trading: </b> This form of trade involves purchasing and selling stocks in a single day. A single day in stock market terms means 9:15 am to 3:30 pm on a weekday (barring market holidays).
                    In the case of day trading, individuals hold stocks for a few minutes or hours.A trader involved in such trade needs to close his/her transactions prior to the day’s market closure. 
                    It is popular for capitalizing on small-scale fluctuations in NAV of stocks.  
                  </p>
                </li>

                <li>
                  <p><b>Swing Trading: </b> This style of stock market trading is used to capitalise on the short-term stock trends and patterns.
                    Swing trading is used to earn gains from stock within a few days of purchasing it; ideally one to seven days. 
                    Traders technically analyse the stocks to gauge the movement patterns they are following for proper execution of their investment objectives.</p>
                </li>

                <li>
                  <p><b>Momentum Trading: </b> In case of momentum trading, a trader exploits a stock’s momentum, i.e. a substantial value movement of stock, either upwards or downwards. 
                    A trader tries to capitalise on such momentum by identifying the stocks that are either breaking out or will break out. In case of upward momentum,
                    the trader sells the stocks he/she is holding, thus yielding higher than average returns. In case of downward movement, the trader purchases a 
                    considerable volume of stocks to sell when its price increases. 
                  </p>
                </li>

                <li>
                  <p><b>Position Trading: </b>Position traders hold securities for months aiming to capitalise on the long-term potential of stocks rather than short-term price movements. 
                    This style of trade is ideal for individuals who are not market professionals or regular participants of the market. 
                  </p>
                </li>
              </ul> 

              <h4><b>Different Type Of Stock:-</b></h4>
              <div className="w3-panel w3-leftbar w3-light-grey">
            
              <li>Large-cap stocks</li>
              <li>Mid-cap stocks</li>
              <li>Small-cap stocks</li>
              <li>Domestic stock</li>
              <li>International stocks</li>
              <li>IPO stocks</li>
              <li>Dividend stocks</li>
              <li>Blue chip stocks</li>
              <li>Penny stocks</li>
            
          </div>
          </Row>
            
          
          
        
      </Container>
    </Container>
  );
}

export default Projects;
