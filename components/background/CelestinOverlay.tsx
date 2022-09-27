const CelestinOverlay = () => {
	const overlayColor : string = "fill-stone-300"
	return (
		<div className="absolute w-screen h-screen
						grid grid-cols-2 md:grid-cols-4 gap-4
		">
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%"  viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H6.82741C6.51015 0 6.20558 0.126903 5.97716 0.35533L4.01015 2.32234C3.78173 2.55076 3.65482 2.85533 3.65482 3.17259V3.66751H0V6.8401C0 7.15736 0.114213 7.46193 0.34264 7.69036L2.30964 9.65736C2.53807 9.88579 2.84264 10 3.1599 10H10V7.33503H2.66497V6.33249H6.33249V2.67767H10Z" />
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`}  preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H0V2.67767H3.65482V7.33503H0V10H10V7.33503H6.33249V6.34518H10V3.66751H6.33249V2.67767H10Z"/>
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.66497 0H0V10H2.66497V6.34518H3.66751V10H6.8401C7.14467 10 7.44924 9.8731 7.67766 9.65736L9.64467 7.69036C9.8731 7.46193 10 7.15736 10 6.8401V3.66751H7.32234V7.33503H6.33249V6.82741C6.33249 6.51015 6.20558 6.20558 5.97716 5.98985L4.01015 4.02284C3.78173 3.79442 3.47716 3.66751 3.17259 3.66751H2.66497V0Z" />
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H0V2.67767H3.65482V7.33503H0V10H10V7.33503H6.33249V6.34518H10V3.66751H6.33249V2.67767H10Z"/>
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H6.82741C6.51015 0 6.20558 0.126903 5.97716 0.35533L4.01015 2.32234C3.78173 2.55076 3.66751 2.85533 3.66751 3.1599V3.66751H0V6.33249H7.32234V7.33503H0V10H6.91624C7.18274 10 7.43655 9.89848 7.61421 9.72081L9.70812 7.6269C9.88579 7.44924 10 7.19543 10 6.92893V3.66751H6.33249V2.67767H10Z" />
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H0V2.67767H3.65482V3.66751H0V6.34518H3.65482V10H6.33249V6.34518H10V3.66751H6.33249V2.67767H10Z" />
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 2.67767V0H0V2.67767H3.65482V7.33503H0V10H10V7.33503H6.33249V2.67767H10Z" />
				</svg>
			</div>
			<div className="relative">
				<svg className={`${overlayColor} absolute left-0 top-0 w-full h-full`} preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.66497 10V6.34518H3.17259C3.47716 6.34518 3.78173 6.21827 4.01015 5.98985L5.97716 4.02284C6.20558 3.79442 6.33249 3.48985 6.33249 3.18528V2.67767H7.32234V10H10V3.17259C10 2.85533 9.8731 2.55076 9.64467 2.32234L7.67766 0.35533C7.44924 0.126903 7.14467 0 6.82741 0H3.65482V3.66751H2.66497V0H0V10H2.66497Z"/>
				</svg>
			</div>
		</div>
	);
}

export default CelestinOverlay;