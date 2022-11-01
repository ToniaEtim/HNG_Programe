import React from "react";

import myImage from "../images/myimage.png";

const ProfileSection = () => {
  return (
    <section id="profile_section">
      <img alt="My profile" id="profile__img" src={myImage} />
      <div id="profile__overlay">
        <i className="fa fa-camera"></i>
      </div>
      <h2 id="twitter">Abasima Etim</h2>
      <p id="slack">Tonia</p>
      <div id="share-icon">
        <i className="three-dotsbtn">...</i>
        <i className="share-btn fa fa-share"></i>
        <div id="hover-box">Share Link</div>
      </div>
    </section>
  );
};

export default ProfileSection;
