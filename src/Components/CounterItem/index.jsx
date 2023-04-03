import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function CounterItem(props) {
  const { counter } = props;
  return (
    <div className="counter__item col-4">
      <h2>{counter.number}</h2>
      <span>{counter.description}</span>
    </div>
  );
}

CounterItem.propTypes = {};

export default CounterItem;
