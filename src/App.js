import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, ContactShadows, CameraShake } from "@react-three/drei"
import Model from './Scenes'
import './app.css'

const config = {
  maxYaw: 0.1,
  maxPitch: 0.1,
  maxRoll: 0.1,
  yawFrequency: 0.1,
  pitchFrequency: 0.2,
  rollFrequency: 0.5,
  intensity: 0.5,
  decay: false,
  decayRate: 0.65,
  controls: undefined,
}

function App() {
  return (
    <div className="container">
      <Canvas
        concurrent pixelRatio={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 60 }}>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />       
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.7}/>
        <CameraShake {...config} />
        <Suspense fallback={null}>
          <Model />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -1, 0]} opacity={0.25} width={10} height={10} blur={2} far={15} />
        </Suspense>
      </Canvas>
    </div >
  );
}

export default App;
