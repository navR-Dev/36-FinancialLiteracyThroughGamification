import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const companies = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
];

const generateData = () => {
  return companies.reduce((acc, company) => {
    const randomValue = Math.floor(Math.random() * 1000) + 100;
    acc[company] = randomValue;
    return acc;
  }, {});
};

const SG = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [investments, setInvestments] = useState({});
  const [investmentReturns, setInvestmentReturns] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateData();
      const timestamp = new Date().toLocaleTimeString();
      const updatedData = { name: timestamp, ...newData };
      setData((prevData) => [...prevData.slice(-19), updatedData]);
      calculateReturns(newData);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTooltip = (payload) => {
    if (payload && payload.length) {
      setCurrentData(payload[0].payload);
    }
  };

  const handleInvestment = (company, amount) => {
    const currentInvestment = investments[company] || 0;
    setInvestments((prevInvestments) => ({
      ...prevInvestments,
      [company]: currentInvestment + amount,
    }));
  };

  const calculateReturns = (newData) => {
    const returns = {};
    Object.keys(investments).forEach((company) => {
      if (newData[company]) {
        const currentInvestment = investments[company];
        const currentValue = newData[company];
        const returnAmount = (
          (currentValue / 1000) *
          currentInvestment
        ).toFixed(2);
        const profit = (returnAmount - currentInvestment).toFixed(2);
        returns[company] = { returnAmount, profit };
      }
    });
    setInvestmentReturns(returns);
  };

  return (
    <Container>
      
    <div className="app-container">
      <h1>Stock Market Simulator</h1>
      {currentData && (
        <div className="current-data">
          <h2>Current Data:</h2>
          <p>{`Time: ${currentData.name}`}</p>
          {companies.map((company, index) => (
            <p key={index}>{`${company}: ${currentData[company]}`}</p>
          ))}
        </div>
      )}
      <div className="investment-section">
        <h2>Investments</h2>
        {companies.map((company, index) => (
          <div key={index} className="investment-item">
            <p>{company}</p>
            <input
              type="number"
              min="0"
              onChange={(e) =>
                handleInvestment(company, parseInt(e.target.value))
              }
              value={investments[company] || ""}
            />
          </div>
        ))}
      </div>
      <div className="returns-section">
        <h2>Investment Returns</h2>
        {Object.keys(investmentReturns).map((company, index) => (
          <div key={index} className="return-item">
            <p>{company}</p>
            <p>Return Amount: {investmentReturns[company].returnAmount}</p>
            <p>Profit: {investmentReturns[company].profit}</p>
          </div>
        ))}
      </div>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
          }}
          formatter={(value, name) => [value, `${name}`]}
          labelFormatter={(label) => `Time: ${label}`}
          onMouseMove={handleTooltip}
        />
        <Legend />
        {companies.map((company, index) => (
          <Line
            type="monotone"
            dataKey={company}
            key={index}
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            dot={false}
          />
        ))}
      </LineChart>
    </div>
    </Container>
  );
};

export default SG;
