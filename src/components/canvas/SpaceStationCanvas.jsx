import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const SpaceStation = () => {
  const { scene } = useGLTF("/space_station/scene.gltf");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.5} />;
};

const SpaceStationCanvas = () => (
  <Canvas camera={{ position: [0, 0, 10], fov: 45 }} style={{ height: "90vh" }}>
    <ambientLight intensity={6} />
    <directionalLight position={[10, 10, 10]} intensity={2} />
    <SpaceStation />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default SpaceStationCanvas; 