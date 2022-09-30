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

interface ModelProps {
	props?: JSX.IntrinsicElements['group'],
	material : string,
}

const Model = ({ props, material }: ModelProps) => {
	var { nodes, materials } = useGLTF('/celestin.glb') as any
	const lyonMaterial = new THREE.MeshStandardMaterial(
		{ 
			color : "red",
			roughness : 1,
			metalness : 1,
			wireframe: true
		}
	)
	const berlinMaterial = new THREE.MeshStandardMaterial(
		
		{ 
			color : "0x000000",
			roughness : 0,
			metalness : 1
		}
	)
	// Rotatition animation
	let myMesh = React.useRef<any>();
	useFrame(({ clock }) => {
	const a = clock.getElapsedTime();
	if (myMesh.current)
		myMesh.current.rotation.y = a;
	});

	const assignMaterial = (materialString : string) : THREE.MeshStandardMaterial =>  {
		switch (materialString) {
			case "lyon" : {
				return (lyonMaterial);
			}
			case "berlin" : {
				return (berlinMaterial);
			}
			default : {
				return (materials['kt_facebuilder_material.005']);
			}
		}
	}

  return (
	<group {...props} dispose={null}>
	  <mesh
	  		ref={ myMesh }
	  		geometry={ nodes.celehead.geometry } 
			material={ assignMaterial(material) }
		/>
	  {/* <mesh
	  		ref={ myMesh }
	  		geometry={ nodes.celehead.geometry } 
			material={ materials['kt_facebuilder_material.005']}
		/> */}
	</group>
  )
}

useGLTF.preload('/celestin.glb')

export default Model