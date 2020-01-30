import React from "react";
import OfferDetail from "./footer_components/OfferDetail";
import FooterMenu from "./footer_components/FooterMenu";
import FooterLayer from "./footer_components/FooterLayer";
import FooterLogo from "./footer_components/FooterLogo";

function Footer() {
  return (
    <div>
      <OfferDetail />
      <FooterMenu />
      <FooterLayer />
      <FooterLogo />
    </div>
  );
}

export default Footer;
