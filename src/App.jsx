import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const centerX = 300;
    const centerY = 200;
    const petal_width = 40;
    const petal_height = 100;
    const sepal_width = 50;
    const sepal_height = 110;
    const angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];
    const anglesBack = angles.map((angle) => angle + Math.PI / 3); // Adjusted angles

    const shapes = [
      // Back petals (light-violet, using sepal dimensions)
      ...anglesBack.map((angle, index) => {
        const id = createShapeId(`bgEllipseBack${index + 1}`);
        const x = centerX + Math.sin(angle) * (sepal_width / 2);
        const y = centerY - Math.cos(angle) * (sepal_width / 2);
        return {id,type: "geo",x,y,rotation: angle,props: { h: sepal_width, w: sepal_height, color: "light-violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" }};
      }),
      // Front petals (violet)
      ...angles.map((angle, index) => {
        const id = createShapeId(`bgEllipse${index + 1}`);
        const x = centerX + Math.sin(angle) * (petal_width / 2);
        const y = centerY - Math.cos(angle) * (petal_width / 2);
        return {id,type: "geo",x,y,rotation: angle,props: { h: petal_width, w: petal_height, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" }};
      }),
      // Center Ellipse
      {id: createShapeId("centerEllipse"),type: "geo",x: centerX - 25,y: centerY - 25,props: { h: 50, w: 50, color: "yellow", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" }},
    ];

    // Create shapes
    editor.createShapes(shapes);
  };

  return (
    <div style={{ position: "absolute", width: 600, height: 400, top: "50px" }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}