import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const rectangleId1 = createShapeId("rectangle1"); // Blue rectangle
    const rectangleId2 = createShapeId("rectangle2"); // Yellow rectangle
    const arrowId = createShapeId("arrow"); // arrow starting from blue rectangle and ending at yellow rectangle

    editor.createShapes([
      {
        id: rectangleId1,
        type: "geo",
        x: 350,
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
      {
        id: rectangleId2,
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

    editor.createShapes([
      {
        id: arrowId,
        type: "arrow",
        props: {
          start: {
            // Bind to the center of rectangle1
            type: "binding",
            boundShapeId: rectangleId1,
            normalizedAnchor: { x: 0.5, y: 0.5 },
            isExact: false,
            isPrecise: true,
          },
          end: {
            // Bind to the center of rectangle2
            type: "binding",
            boundShapeId: rectangleId2,
            normalizedAnchor: { x: 0.5, y: 0.5 },
            isExact: false,
            isPrecise: true,
          },
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
