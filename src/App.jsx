import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const shapes = [
      { id: createShapeId("rectangle1"), type: "geo", x: 22, y: -47, props: { align: "middle", color: "black", dash: "draw", fill: "none", font: "draw", geo: "rectangle", w: 149, h: 90, labelColor: "black", scale: 1, size: "l", text: "Color" } },
      { id: createShapeId("rectangle2"), type: "geo", x: 211, y: 88, props: { align: "middle", color: "orange", dash: "draw", fill: "solid", font: "draw", geo: "rectangle", growY: 0, h: 136, labelColor: "black", scale: 1, size: "xl", text: "", url: "", verticalAlign: "middle", w: 114 } },
      { id: createShapeId("rectangle3"), type: "geo", x: 210, y: 150, props: { geo: "rectangle", w: 100, h: 75, color: "red" } },
      { id: createShapeId("arrow"), type: "arrow", x: 100, y: 100 }
    ];

    const bindings = [
      { fromId: shapes[3].id, toId: shapes[0].id, type: "arrow", props: { terminal: "start", normalizedAnchor: { x: 0.5, y: 0.5 } } },
      { fromId: shapes[3].id, toId: shapes[1].id, type: "arrow", props: { terminal: "end", normalizedAnchor: { x: 0.5, y: 0.5 } } }
    ];

    editor.createShapes(shapes);
    editor.createBindings(bindings);
  };

  return (
    <div style={{ position: "absolute", width: 500, height: 300, top: "50px" }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}