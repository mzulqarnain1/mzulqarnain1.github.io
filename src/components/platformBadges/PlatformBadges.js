import React from "react";
import "./PlatformBadges.scss";
import ToptalBadge from "../toptalBadge/ToptalBadge";
import UpworkBadge from "../upworkBadge/UpworkBadge";

export default function PlatformBadges() {
  return (
    <div className="platform-badges-section">
      <p className="platform-badges-label">
        <span className="platform-badges-icon" aria-hidden="true">
          🏆
        </span>
        Freelance Platform Recognition
      </p>
      <div className="platform-badges-row">
        <ToptalBadge />
        <UpworkBadge />
      </div>
    </div>
  );
}
