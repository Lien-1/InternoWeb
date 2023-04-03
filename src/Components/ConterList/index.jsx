import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CounterItem from "../CounterItem";

function CounterList(props) {
  const { counters } = props;
  return (
    <div className="counter__list col-10">
      {counters.map((counter, index) => {
        return <CounterItem key={index} counter={counter} />;
      })}
    </div>
  );
}

CounterList.propTypes = {};

export default CounterList;
