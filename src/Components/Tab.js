import React, { useState } from "react";
export default function Tab({ children }) {
  const [highLight, setHighlight] = useState({ left: 0, opacity: 0 });
  function mouseMove(e) {
    setHighlight({ left: e.nativeEvent.layerX - 150, opacity: 0.5 });
  }
  function hideHighlight(e) {
    setHighlight({ left: e.nativeEvent.layerX - 150, opacity: 0 });
  }
  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={mouseMove}>
      <div className="highlight" style={highLight} />
      {children}
    </div>
  );
}
