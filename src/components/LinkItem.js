import React from "react";

const LinkItem = ({ title, id, label, link }) => {
  return (
    <div className="link__item">
      <a href={link} title={title} id={id}>
        {label}
      </a>
    </div>
  );
};

export default LinkItem;
