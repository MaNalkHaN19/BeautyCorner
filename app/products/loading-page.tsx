import React from "react";
import classes from "./loading.module.css";
export default function loading() {
  return (
    <>
      <div className={classes.box}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </>
  );
}
