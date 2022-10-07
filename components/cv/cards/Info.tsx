interface InfoProps {
	url: string,
	content: string;
}
 
const Info = ({url , content} : InfoProps) => {
	return ( 
		<div>
		{
			url == null ?
				<p> 
					{ content } 
				</p>
			:
				<a className="underline underline-offset-4"
					href={url}>
					{content}
				</a>
		}
		</div>
	 );
}
 
export default Info;