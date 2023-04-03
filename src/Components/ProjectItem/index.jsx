import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import ButtonComponent from "../Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";

function ProjectItem(props) {
  const { project } = props;
  return (
    <div className="project__item col-7">
      <div className="project__thumb">
        <img src={project.project_thumb} alt="" className="img" />
      </div>
      <div className="project__description">
        <div className="content">
          <h4>{project.project_name || ""}</h4>
          <span>{project.project_category || ""}</span>
        </div>
        <IconButton
          aria-label="arrow"
          size="large"
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "#F4F0EC",
            marginRight: 2,
          }}
        >
          <ArrowForwardIosIcon color="secondary" sx={{ fontSize: 16 }} />
        </IconButton>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
