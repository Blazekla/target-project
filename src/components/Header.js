import React from "react";
import HeaderMain from "./header_sub_components/HeaderMain";
import HeaderSecondary from "./header_sub_components/HeaderSecondary";
import SignInToast from "./header_sub_components/SignInToast";

function Header() {
  return (
    <div>
      <HeaderMain />
      <HeaderSecondary />
      <SignInToast />
    </div>
  );
}

export default Header;
