import React from "react";

function Pre(props) {
  return (
    <>
      <style>
        {`
          #preloader-none {
            opacity: 0;
          }
        `}
      </style>
      <div
        className="fixed top-0 left-0 w-full h-full z-[999999] bg-backgroundColor bg-[url('./Assets/pre.svg')] bg-no-repeat bg-center"
        id={props.load ? "preloader" : "preloader-none"}
      ></div>
    </>
  );
}

export default Pre;
