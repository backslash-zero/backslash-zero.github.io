import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { MeshStandardMaterial, MeshBasicMaterial } from 'three'

type GLTFResult = GLTF & {
  nodes: {
	celehead: THREE.Mesh
  }
  materials: {
	['kt_facebuilder_material.005']: THREE.MeshStandardMaterial
  }
}

const ModelSimple = ( props : JSX.IntrinsicElements['group'] ) => {
	var { nodes, materials } = useGLTF('/celestin.glb') as any

	// Rotatition animation
	let myMesh = React.useRef<any>();
	useFrame(({ clock }) => {
	const a = clock.getElapsedTime();
	if (myMesh.current)
		myMesh.current.rotation.y = a;
	});

  return (
	<group {...props} dispose={null}>
	  {/* <mesh
	  		ref={ myMesh }
	  		geometry={ nodes.celehead.geometry } 
			material={ assignMaterial(material) }
		/> */}
	  <mesh
	  		ref={ myMesh }
	  		geometry={ nodes.celehead.geometry } 
			material={ materials['kt_facebuilder_material.005']}
		/>
	</group>
  )
}

useGLTF.preload('/celestin.glb')

export default ModelSimple