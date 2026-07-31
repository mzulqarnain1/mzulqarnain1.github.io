import React, {useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const navItems = [
    skillsSection.display && {id: "skills", label: "Skills"},
    workExperiences.display && {id: "experience", label: "Work Experiences"},
    openSource.display && {id: "opensource", label: "Open Source"},
    achievementSection.display && {
      id: "achievements",
      label: "Achievements"
    },
    blogSection.display && {id: "blogs", label: "Blogs"},
    talkSection.display && {id: "talks", label: "Talks"},
    {id: "contact", label: "Contact Me"}
  ].filter(Boolean);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {rootMargin: "-40% 0px -50% 0px", threshold: 0}
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <label className="menu-backdrop" htmlFor="menu-btn"></label>
      </header>
    </Headroom>
  );
}
export default Header;
