import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CanvasSmoke from '../components/background/CanvasSmoke'
import Link from 'next/link'
import MainMenuButton from '../components/buttons/MainMenuButton'
import CelestinOverlay from '../components/background/CelestinOverlay'

const Home: NextPage = () => {
	return (
		<>
			<CelestinOverlay/>
			<ul className='w-full h-full
							flex flex-col items-center justify-center gap-10
							text-stone-800
							'>
				<li><MainMenuButton name="/About" link="/About"/></li>
				<li><MainMenuButton name="/Work" link="/Work"/></li>
				<li><MainMenuButton name="/Art" link="/Art"/></li>
			</ul>
		</>
	)
}

export default Home
