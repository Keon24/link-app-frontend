import React from 'react';

const LinksDisplay = ({ links }) => {
  // Adjust these coordinates to slide links to the right
  const xOffset = 60; // Additional pixels to move text to the right

  // Example positions directly match the colored rectangles in the SVG
  const coordinates = [
    { x: 73.5, y: 185 + 8, width: 160, height: 16 }, // Adjust the initial x by adding xOffset
    { x: 117.5, y: 214 + 4, width: 72, height: 8 },
    { x: 35, y: 278 + 22, width: 237, height: 44 },
    { x: 35, y: 342 + 22, width: 237, height: 44 },
    { x: 35, y: 406 + 22, width: 237, height: 44 },
    { x: 35, y: 470 + 22, width: 237, height: 44 },
    { x: 35, y: 534 + 22, width: 237, height: 44 }
  ];

  return (
    <g>
      {links.map((link, index) => {
        const coord = coordinates[index % coordinates.length];
        return (
          <a xlinkHref={link.url} key={index} target="_blank" rel="noopener noreferrer">
            <rect x={coord.x + xOffset} y={coord.y - coord.height / 2} width={coord.width} height={coord.height} fill="transparent" />
            <text x={coord.x + xOffset + 5} y={coord.y} fontSize="14" fill="white" fontWeight="bold" dominantBaseline="middle">
              {link.platform}
            </text>
          </a>
        );
      })}
    </g>
  );
};

export default LinksDisplay;
