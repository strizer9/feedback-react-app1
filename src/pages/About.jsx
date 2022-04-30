import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>Learning React</p>
        <p>version 1.0.1</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
