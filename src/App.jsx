import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function App() {
  const handleMount = (editor) => {
    // Store shape IDs
    const bgEllipse1Id = createShapeId("bgEllipse1");
    const bgEllipse2Id = createShapeId("bgEllipse2");
    const bgEllipse3Id = createShapeId("bgEllipse3");
    const centerEllipseId = createShapeId("centerEllipse");

    // Center position where we want the shapes to be centered
    const centerX = 300; // Adjusted to center the shapes in the canvas
    const centerY = 200;

    // Dimensions of the ellipses
    const width = 100;
    const height = 40;

    // Angles for rotation
    const angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];

    // Function to calculate the adjusted position
    const getRotatedPosition = (x, y, angle, cx, cy) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const nx = cos * (x - cx) - sin * (y - cy) + cx;
      const ny = sin * (x - cx) + cos * (y - cy) + cy;
      return { x: nx, y: ny };
    };

    // Create shapes with adjusted positions and rotations
    const shapes = [
      // Background Ellipses (petals)
      ...angles.map((angle, index) => {
        const id = [bgEllipse1Id, bgEllipse2Id, bgEllipse3Id][index];
        // Calculate position so that rotation occurs around the center
        const { x, y } = getRotatedPosition(
          centerX,
          centerY - height / 2,
          angle,
          centerX,
          centerY
        );
        return {
          id,
          type: "geo",
          x,
          y,
          rotation: angle,
          props: { h: height, w: width, color: "violet", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "xl" },
        };
      }),
      // Center Ellipse
      { id: centerEllipseId, type: "geo", x: centerX - 25, y: centerY - 25, props: { h: 50, w: 50, color: "yellow", dash: "draw", fill: "solid", font: "draw", geo: "ellipse", size: "m" } },
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