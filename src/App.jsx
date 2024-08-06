import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const arrowId = createShapeId("arrow");

    const shapes = [
      {
        id: createShapeId("rectangle1"),
        type: "geo",
        x: 22,
        y: -47,
        props: {
          align: "middle",
          color: "black",
          dash: "draw",
          fill: "none",
          font: "draw",
          geo: "rectangle",
          w: 149,
          h: 90,
          labelColor: "black",
          scale: 1,
          size: "l",
          text: "Color",
        },
      },
      {
        id: createShapeId("rectangle2"),
        type: "geo",
        x: 150,
        y: 150,
        props: { geo: "rectangle", w: 50, h: 50, color: "yellow" },
      },
      {
        id: createShapeId("rectangle3"),
        type: "geo",
        x: 210,
        y: 150,
        props: { geo: "rectangle", w: 100, h: 75, color: "red" },
      },
      { id: arrowId, type: "arrow", x: 100, y: 100 },
    ];

    const bindings = [
      {
        fromId: arrowId,
        toId: shapes[0].id,
        type: "arrow",
        props: { terminal: "start", normalizedAnchor: { x: 0.5, y: 0.5 } },
      },
      {
        fromId: arrowId,
        toId: shapes[1].id,
        type: "arrow",
        props: { terminal: "end", normalizedAnchor: { x: 0.5, y: 0.5 } },
      },
    ];

    editor.createShapes(shapes);
    editor.createBindings(bindings);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 300,
          top: "50px",
        }}
      >
        <Tldraw onMount={handleMount}></Tldraw>
      </div>
    </>
  );
}
