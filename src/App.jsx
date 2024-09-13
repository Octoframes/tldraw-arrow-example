import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const centerX = 300;
    const centerY = 200;
    const petal_width = 10;
    const petal_height = 20;
    const angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];

    // Create shapes with adjusted positions and dimensions
    const shapes = [
      // Background Ellipses (petals) with swapped width and height
      ...angles.map((angle, index) => {
        const id = createShapeId(`bgEllipse${index + 1}`);
        // Adjust position calculations to use the new dimensions
        const x = centerX + Math.sin(angle) * (petal_width / 2);
        const y = centerY - Math.cos(angle) * (petal_width / 2);
        return {id,type: "geo",x,y,rotation: angle,props: { h: petal_width, w: petal_height, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" },
        };
      }),
      // Center Ellipse
      {id: createShapeId("centerEllipse"),type: "geo",x: centerX - 2.5,y: centerY - 2.5,props: { h: 5, w: 5, color: "yellow", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" },
      },
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