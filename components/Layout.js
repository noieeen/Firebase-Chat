import React from "react";

const style = {
  html: "py-24 md:py-32 bg-white",
  container: "container px-4 mx-auto",
  main: "",
};

const Layout = ({children}) => {
  return (
    <div className={style.html}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Layout;
