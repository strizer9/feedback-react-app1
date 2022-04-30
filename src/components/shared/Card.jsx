import React from "react";
import PropTypes from "prop-types";

function Card({ children }) {
  // conditional class
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  return <div className={`card`}>{children}</div>;
  //  Conitional Styles
  //    return (
  //     <div
  //       className="card"
  //       style={{ backgroundColor: reverse ? "black" : "#fff" }}
  //     >
  //       {children}
  //     </div>
  //   );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
