import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const shapes = [
      { id: createShapeId("rectangle1"), type: "geo", x:  22, y: -47, props: { h:  90, w: 149, color: "black",  dash: "draw", fill: "none",  font: "draw", geo: "rectangle", size: "l",  text: "Color" } },
      { id: createShapeId("rectangle2"), type: "geo", x: 124, y: 127, props: { h:  75, w: 100, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "rectangle", size: "xl"          } },
      { id: createShapeId("rectangle3"), type: "geo", x: 211, y:  88, props: { h: 136, w: 114, color: "orange", dash: "draw", fill: "solid", font: "draw", geo: "rectangle", size: "xl"          } },
      { id: createShapeId("rectangle4"), type: "geo", x: 265, y:  32, props: { h: 136, w: 114, color: "blue",   dash: "draw", fill: "solid", font: "draw", geo: "rectangle", size: "xl"          } },
      { id: createShapeId("arrow"),      type: "arrow", x: 100, y: 100 }
    ];

    const bindings = [
      { fromId: shapes[4].id, toId: shapes[0].id, type: "arrow", props: { terminal: "start", normalizedAnchor: { x: 0.5, y: 0.5 } } },
      { fromId: shapes[4].id, toId: shapes[1].id, type: "arrow", props: { terminal: "end",   normalizedAnchor: { x: 0.5, y: 0.5 } } }
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