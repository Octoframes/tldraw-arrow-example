import { useState } from "react";
import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {

  const handleMount = (editor) => {
    editor.createShapes([
      {
        id: createShapeId(),
        type: "geo",
        x: 300,
        y: 300,
        props: {
          geo: "rectangle",
          w: 150,
          h: 75,
          color: "blue",
        },
      },
    ]);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          top: "50px",
        }}
      >
        <Tldraw onMount={handleMount}></Tldraw>
      </div>
    </>
  );
}
