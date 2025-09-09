import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html, Preload } from '@react-three/drei'

// ModelLoader component: loads a GLTF/GLB model and applies simple controls
function Model({ url, scale = 1, rotation = [0, 0, 0], castShadow = true, receiveShadow = true, autoRotateSpeed = 0.5 }) {
  const { scene } = useGLTF(url)
  const ref = useRef()

  // apply initial rotation
  React.useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(...rotation)
    }
  }, [rotation])

  // small auto-rotate
  useFrame((state, delta) => {
    if (ref.current && autoRotateSpeed) {
      ref.current.rotation.y += autoRotateSpeed * delta * 0.1
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    />
  )
}

// Simple fallback loader
function Loader() {
  return (
    <Html center>
      <div className="bg-white/90 text-sm rounded-md p-3 shadow-lg">Loading 3D model...</div>
    </Html>
  )
}

export default function ModelViewer({
  modelUrl,
  width = '100%',
  height = '480px',
  background = 'transparent',
  autoRotate = true,
  autoRotateSpeed = 0.5,
  scale = 1,
  initialRotation = [0, 0, 0],
  cameraPosition = [0, 1.5, 4],
  controls = {},
}) {
  if (!modelUrl) {
    return (
      <div className="p-4 border rounded-md text-center text-sm text-red-600">
        No modelUrl provided. Pass a .glb or .gltf URL to <code>modelUrl</code>.
      </div>
    )
  }

  return (
    <div className="model-viewer-wrapper" style={{ width, height, position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background }}
      >
        {/* Basic lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.3} />

        <Suspense fallback={<Loader />}>
          <group position={[0, -0.9, 0]}>
            <Model
              url={modelUrl}
              scale={scale}
              rotation={initialRotation}
              autoRotateSpeed={autoRotate ? autoRotateSpeed : 0}
            />
          </group>

          {/* optional ground shadow */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.2} />
          </mesh>

          <Preload all />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          makeDefault
          {...controls}
        />
      </Canvas>

      {/* small overlay UI example (Tailwind) */}
      <div className="absolute left-3 top-3 z-20">
       
      </div>
    </div>
  )
}



