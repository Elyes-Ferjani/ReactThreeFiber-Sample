import React, { useRef } from 'react'
import { useFrame } from "react-three-fiber"
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  useFrame(() => (group.current.rotation.y += 0.01));

  const { nodes, materials } = useGLTF('/shoemodel.glb')
  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={13.15}>
        <group position={[0.01, -0.04, -0.04]} rotation={[1.58, 0, -3.12]}>
          <mesh geometry={nodes.Mesh_0.geometry} material={materials.bigstar_low} scale={[1.22, 1.22, 1.22]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shoemodel.glb')
