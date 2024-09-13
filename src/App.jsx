import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    const centerX = 300;
    const centerY = 200;
    const width = 40;
    const height = 100;
    const angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];

    // Create shapes with adjusted positions and dimensions
    const shapes = [
      // Background Ellipses (petals) with swapped width and height
      ...angles.map((angle, index) => {
        const id = createShapeId(`bgEllipse${index + 1}`);
        // Adjust position calculations to use the new dimensions
        const x = centerX + Math.sin(angle) * (width / 2);
        const y = centerY - Math.cos(angle) * (width / 2);
        return {id,type: "geo",x,y,rotation: angle,props: { h: width, w: height, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" },
        };
      }),
      // Center Ellipse
      {id: createShapeId("centerEllipse"),type: "geo",x: centerX - 25,y: centerY - 25,props: { h: 50, w: 50, color: "yellow", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "m" },
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