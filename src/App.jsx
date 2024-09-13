import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const shapes = [
      // Background Ellipses (petals) with rotation
      { id: createShapeId("bgEllipse1"), type: "geo", x: 150, y: 150, rotation: 3.14* 0, props: { h: 120, w: 80, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } },
      { id: createShapeId("bgEllipse2"), type: "geo", x: 150, y: 150, rotation: 3.14* 1/3, props: { h: 120, w: 80, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } },
      { id: createShapeId("bgEllipse3"), type: "geo", x: 150, y: 150, rotation: 3.14* 2/3, props: { h: 120, w: 80, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } },

      { id: createShapeId("centerEllipse"), type: "geo", x: 210, y: 150, rotation: 0, props: { h: 50, w: 50, color: "yellow", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "m" } }
    ];

    editor.createShapes(shapes);
  };

  return (
    <div style={{ position: "absolute", width: 600, height: 400, top: "50px" }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}
