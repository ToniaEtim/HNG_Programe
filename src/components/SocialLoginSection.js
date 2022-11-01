import React from "react";

import slackIcon from "../images/slack_icon.png";

const SocialLoginSection = () => {
  return (
    <>
      <section id="social_section">
        <div id="social_icons">
          <div id="image">
            <img alt="slack" src={slackIcon} />
          </div>
          <div id="github">
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>
        </div>
      </section>
      <section>
        <div id="line">
          <hr />
        </div>
      </section>
    </>
  );
};

export default SocialLoginSection;
