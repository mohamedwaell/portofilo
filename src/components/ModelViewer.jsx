import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'

// ModelLoader component
function Model({ url, scale = 1, rotation = [0, 0, 0], castShadow = true, receiveShadow = true, autoRotateSpeed = 0.5 }) {
  const { scene } = useGLTF(url)
  const ref = useRef()

  // apply initial rotation
  React.useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(...rotation)
    }
  }, [rotation])

  // auto-rotate
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
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!modelUrl) {
    return (
      <div className="p-4 border rounded-md text-center text-sm text-red-600">
        No modelUrl provided. Pass a .glb or .gltf URL to <code>modelUrl</code>.
      </div>
    )
  }

  const computedHeight = isMobile ? '50vh' : height
  const computedScale = isMobile ? scale * 0.9 : scale

  return (
    <div className="model-viewer-wrapper" style={{ width, height: computedHeight, position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
        frameloop={autoRotate ? 'always' : 'demand'}
        style={{ background }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.3} />

        <Suspense fallback={null}>
          <group position={[0, -0.9, 0]}>
            <Model
              url={modelUrl}
              scale={computedScale}
              rotation={initialRotation}
              autoRotateSpeed={autoRotate ? autoRotateSpeed : 0}
            />
          </group>

          {/* Shadow ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.2} />
          </mesh>

          <Preload all />
        </Suspense>

        {/* OrbitControls with mobile restriction */}
        <OrbitControls
          enablePan={!isMobile}
          enableZoom={!isMobile}
          enableRotate={!isMobile} // 🔹 disables rotation on mobile
          makeDefault
          {...controls}
        />
      </Canvas>
    </div>
  )
}
