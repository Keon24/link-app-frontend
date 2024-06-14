import React from 'react';
import './links.css';

const LinksDisplay = ({ links }) => {
  const calculateCoordinates = (index, totalLinks) => {
    const x = 100;
    const baseY = 200;
    const spacings = [109, 65, 60, 69, 60, 70, 80, 110];
    const accumulatedSpacing = spacings.slice(0, index + 1).reduce((a, b) => a + b, 0);
    const y = baseY + accumulatedSpacing;
    const fontSize = 22;
    return { x, y, fontSize };
  };

  return (
    <div>
      {links.map((link, index) => {
        const { x, y, fontSize } = calculateCoordinates(index, links.length);
        return (
          <a className="link-anchor" href={link.url} key={index} target="_blank" rel="noopener noreferrer">
            <text className="link-text" x={x} y={y} fontSize={fontSize} fill="orange">
              {link.platform}
            </text>
          </a>
        );
      })}
    </div>
  );
};

export default LinksDisplay;
