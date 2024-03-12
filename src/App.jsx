import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const id = createShapeId("hello");
    editor.createShapes([
      {
        id,
        type: "geo",
        x: 500,
        y: 500,
        props: {
          geo: "rectangle",
          w: 100,
          h: 100,
          dash: "draw",
          color: "yellow",
          size: "m",
        },
      },
    ]);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1000px",
        height: "1000px",
      }}
    >
      <Tldraw onMount={handleMount}></Tldraw>
    </div>
  );
}
