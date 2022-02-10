import { useEffect, useState } from "react";
import popupStyles from "./PopUp.scss";
import PropTypes from "prop-types";
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
        position:"absolute",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;
