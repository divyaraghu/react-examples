import React from "react";

export default function addAlert(OrigComponent) {

  const clickCounter = () => {
    alert("hello I got clicked ");
  }
  return function updatedComp() {
    return (
      <OrigComponent clickHandler={clickCounter} />
    );
  }
}