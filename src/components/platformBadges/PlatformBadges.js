import React, {useContext} from "react";
import "./PlatformBadges.scss";
import ToptalBadge from "../toptalBadge/ToptalBadge";
import UpworkBadge from "../upworkBadge/UpworkBadge";
import StyleContext from "../../contexts/StyleContext";

export default function PlatformBadges() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="platform-badges-section">
      <p
        className={
          isDark
            ? "platform-badges-label dark-mode-text"
            : "platform-badges-label"
        }
      >
        Verified on
      </p>
      <div className="platform-badges-row">
        <ToptalBadge />
        <UpworkBadge />
      </div>
    </div>
  );
}
