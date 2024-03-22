import React, { useState, useEffect } from "react";
import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const [xCoordinate, setXCoordinate] = useState(350); // Step 1: Add a state for the x coordinate
  const [editorInstance, setEditorInstance] = useState(null);

  const handleMount = (editor) => {
    setEditorInstance(editor); // Store the editor instance
  };

  useEffect(() => {
    if (editorInstance) {
      const rectangleId1 = createShapeId("rectangle1");
      editorInstance.createShapes([
        {
          id: rectangleId1,
          type: "geo",
          x: xCoordinate,
          y: 300,
          props: {
            geo: "rectangle",
            w: 150,
            h: 75,
            dash: "draw",
            color: "blue",
            size: "m",
          },
        },
      ]);
    }
  }, [xCoordinate, editorInstance]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <input
          type="range"
          min="0"
          max="1000"
          value={xCoordinate}
          onChange={(e) => setXCoordinate(Number(e.target.value))}
          style={{
            width: "300px",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "1000px",
          height: "1000px",
          marginTop: "50px", // Add margin to ensure the slider does not overlap the Tldraw component
        }}
      >
        <Tldraw onMount={handleMount}></Tldraw>
      </div>
    </>
  );
}
