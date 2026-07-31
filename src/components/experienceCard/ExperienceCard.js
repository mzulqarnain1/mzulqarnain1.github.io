import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

const VISIBLE_BULLET_COUNT = 3;
const STACK_PREFIX = "Stack:";

export default function ExperienceCard({cardInfo}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const allBullets = cardInfo.descBullets || [];
  const stackLine = allBullets.find(item => item.startsWith(STACK_PREFIX));
  const bullets = allBullets.filter(item => item !== stackLine);
  const techStack = stackLine
    ? stackLine
        .slice(STACK_PREFIX.length)
        .split("·")
        .map(tech => tech.trim())
        .filter(Boolean)
    : [];
  const hasOverflow = bullets.length > VISIBLE_BULLET_COUNT;
  const visibleBullets =
    expanded || !hasOverflow ? bullets : bullets.slice(0, VISIBLE_BULLET_COUNT);

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card">
      <div
        style={{background: rgb(colorArrays)}}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
        <h5 className="experience-text-company">{cardInfo.company}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <p className="subTitle experience-text-desc">{cardInfo.desc}</p>
        <ul className="experience-bullets">
          <GetDescBullets descBullets={visibleBullets} />
        </ul>
        {hasOverflow && (
          <button
            type="button"
            className="experience-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? "Show less"
              : `Show ${bullets.length - VISIBLE_BULLET_COUNT} more`}
          </button>
        )}
        {techStack.length > 0 && (
          <ul className="experience-stack-pills">
            {techStack.map((tech, i) => (
              <li key={i} className="stack-pill">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
