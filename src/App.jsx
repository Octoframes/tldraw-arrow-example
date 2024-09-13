import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const centerX = 300
    const centerY = 200
    const scale = 4
    const petalW = 4 * scale
    const petalH = 10 * scale
    const sepalW = 5 * scale
    const sepalH = 11 * scale
    const r = 1 * scale

    const anglesPetal = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];
    const anglesSepal = anglesPetal.map((a) => a + Math.PI / 3);

    const shapes = [
      // Sepals
      ...anglesSepal.map((a, i) => ({ id: createShapeId(`sepal${i + 1}`), type: "geo", x: centerX + Math.sin(a) * (sepalW / 2), y: centerY - Math.cos(a) * (sepalW / 2), rotation: a, props: { h: sepalW, w: sepalH, color: "light-violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } })),
      // Petals
      ...anglesPetal.map((a, i) => ({ id: createShapeId(`petal${i + 1}`), type: "geo", x: centerX + Math.sin(a) * (petalW / 2), y: centerY - Math.cos(a) * (petalW / 2), rotation: a, props: { h: petalW, w: petalH, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } })),
      // Center Ellipse
      { id: createShapeId("centerEllipse"), type: "geo", x: centerX - r, y: centerY - r, props: { h: r * 2, w: r * 2, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" } },
    ];

    editor.createShapes(shapes);
  };

  return (
    <div style={{ position: "absolute", width: 600, height: 400, top: 50 }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}