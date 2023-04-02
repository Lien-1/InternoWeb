import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";

ButtonComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

function ButtonComponent(props) {
  return (
    <>
      {!props.isLoading ? (
        <Button
          variant={props.variant}
          color={props.color}
          endIcon={props.icon}
          size="large"
          children={props.children}
          sx={{
            fontSize: 16,
            fontFamily: `"Jost", sans-serif`,
            textTransform: `math-auto`,
            fontWeight: 400,
            borderRadius: 3,
            paddingX: 4,
            paddingY: 2,
          }}
        >
          {/* {props.children} */}
        </Button>
      ) : (
        <LoadingButton
          variant={props.variant}
          loading={props.loading}
          loadingPosition="end"
          color={props.color}
          endIcon={props.icon}
          size="large"
          children={props.children}
          sx={{
            fontSize: 16,
            fontFamily: `"Jost", sans-serif`,
            fontWeight: 400,
            textTransform: `math-auto`,
            borderRadius: 3,
            paddingX: 4,
            paddingY: 2,
          }}
        ></LoadingButton>
      )}
    </>
  );
}

export default ButtonComponent;
