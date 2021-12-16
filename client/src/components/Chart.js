import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import CategoryItems from "./CategoryItems";

const Chart = () => {
  const [stats, setStat] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    funcSelectStats();
  }, []);

  return (
    <div className="main">
      <>
        <Row>
          <Col>
            <Container style={{ paddingTop: "30px" }}>
              <Row>
                <Col style={{ textAlign: "right" }}>
                  <Button onClick={funcSelectStats}>조회</Button>
                </Col>
              </Row>
              <Row>
                <LineChart
                  width={1000}
                  height={300}
                  data={stats}
                  onClick={fncOnClick}
                  margin={{
                    top: 5,
                    right: 50,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}

                  <XAxis dataKey="category1" />

                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="buyCount"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </Row>
            </Container>
          </Col>
        </Row>
      </>
      {categoryName && <CategoryItems categoryName={categoryName} />}
    </div>
  );
  function funcSelectStats() {
    axios
      .post("/chart", { type: "getChart" })
      .then((response) => {
        if (response.data.json) {
          const results = response.data.json;
          if (results.length > 0) {
            setStat(results);
          }
        }
      })
      .catch();
  }
  function fncOnClick(e) {
    if (e === null) {
      return;
    } else if (e.activeLabel !== null) {
      setCategoryName(e.activeLabel);
    }
  }
};

export default Chart;
