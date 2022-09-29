import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements, useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
	celehead: THREE.Mesh
  }
  materials: {
	['kt_facebuilder_material.005']: THREE.MeshStandardMaterial
  }
}

const Model = (props: JSX.IntrinsicElements['group']) => {
	const { nodes, materials } = useGLTF('./assets/gltf/celestin.glb') as any
	let myMesh = React.useRef<any>();
	useFrame(({ clock }) => {
	const a = clock.getElapsedTime();
	if (myMesh.current)
		myMesh.current.rotation.y = a;
	});

  return (
	<group {...props} dispose={null}>
	  <mesh 
	  		ref={ myMesh }
	  		geometry={nodes.celehead.geometry} 
			material={materials['kt_facebuilder_material.005']}
		/>
	</group>
  )
}

useGLTF.preload('/celestin.glb')

export default Model