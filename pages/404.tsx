import AppHead from "../components/head/AppHead";
import MainLayout from "../components/layouts/MainLayout";

const Custom404 = () => {
	return ( 
		<>
			<AppHead/>
			<MainLayout>
				<div className="w-full h-full absolute">
					<h1>
						Nothing here 😭
					</h1>
				</div>
			</MainLayout>
		</>
	 );
}

export default Custom404;