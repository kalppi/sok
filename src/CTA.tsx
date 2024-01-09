import React from "react";

import { Button, IButton } from "./Button";

import './CTA.css';

interface ICTA {
  header: string;
  text: string;
  buttonLabel: string;
  buttonOnClick: IButton["onClick"];
}

export const CTA = ({ header, text, buttonLabel, buttonOnClick }: ICTA) => {
  return (
    <div className="cta">
      <div>
        <img alt="" src="img.png" />
      </div>
      <h3 className="cta-title">{header}</h3>
      <p className="cta-text">{text}</p>
      <Button label={buttonLabel} onClick={buttonOnClick} className="cta-button" />
    </div>
  );
};
