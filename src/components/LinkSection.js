import React, { useState } from "react";
import LinkItem from "./LinkItem";

const linkData = [
  {
    link: "http://twitter.com/etim_abasima",
    id: "mytwitter",
    label: " Twitter Link",
    title: "",
  },
  {
    link: "https://training.zuri.team/",
    id: "btn__zuri",
    label: "Zuri Team",
    title: "",
  },
  {
    link: "http://books.zuri.team",
    id: "books",
    label: " Zuri Books",
    title: "This is where you find books about design and coding",
  },
  {
    link: "https://books.zuri.team/python-for-beginners?ref_id=12345",
    id: "book_python",
    label: "Python Books",
    title:
      "Are you in need of python books to enhance you python skills? This is where you find python books about design and coding",
  },
  {
    link: "https://background.zuri.team",
    id: "pitch",
    label: "This is one place there is background checks on coders",
    title: "",
  },
  {
    link: "https://books.zuri.team/design-rules",
    id: "book__design",
    label: "Design Books",
    title: "Zuri offers you free design books. Read, Learn, Design.",
  },
];

const LinkSection = () => {
  const [data, setData] = useState(linkData);

  return (
    <section id="link_section">
      {data.map((el) => (
        <LinkItem key={el.id} {...el} />
      ))}
    </section>
  );
};

export default LinkSection;
