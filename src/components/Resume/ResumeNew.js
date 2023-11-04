import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
          <h1><b>RULES</b></h1>
          <br></br>
          <li>Time :- 10 mins</li>
          <li>Minimum Players-2</li>
          <li>Maximum Players- 4</li>
          <li>Base Balance- Rs. 50000</li>
          <br></br>

          <h5>ROI (Return Of Investment):</h5>
          1. FD- 8% of ROI every 30 sec <br></br>
          2. Bonds- 5% of investment every 20 sec <br></br>
          3. Index Funds- less Volatile, less returns <br></br>
          4. Stocks- High risk, High reward <br></br>
          
          <br></br>
          <h2>The player with the most money at the end wins :)</h2>
        
      </Container>
    </div>
  );
}

export default ResumeNew;
