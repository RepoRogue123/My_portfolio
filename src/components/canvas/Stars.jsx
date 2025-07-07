import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

const StarsCanvas = () => (
  <div className='w-full h-auto absolute inset-0 z-[-1]'>
    <Canvas
      camera={{ position: [0, 0, 1] }}
      frameloop="demand"
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Stars
          radius={100}   // inner sphere radius
          depth={50}     // star distance span
          count={3000}   // total stars
          factor={4}     // size multiplier
          fade           // adds subtle fade in/out
          speed={0.6}    // rotation speed
        />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
