import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

import style from "./style.module.css";

function SelectOption(props) {
  return (
    <div className={style.customSelect}>
      <label className={style.lable}>{props.lable}</label>
      <div className={style.inputSection}>
        <input
          type={props.type === "text" ? "text" : "select"}
          placeholder={props.placeHolder}
          value={props.value}
          className={style.input}
        />
        {props.Icon}
      </div>
      <div className={style.dropdown}></div>
    </div>
  );
}

SelectOption.propTypes = {
  options: PropTypes.array.isRequired,
  lable: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  Icon: PropTypes.any.isRequired,
};

export default SelectOption;
