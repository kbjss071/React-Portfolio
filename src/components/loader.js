import React from "react";
function Loader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Loader;