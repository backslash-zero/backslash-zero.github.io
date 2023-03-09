interface ContentWrapperProps extends React.PropsWithChildren {}
function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div
      className="w-full h-full  
		  pt-16
		  overflow-auto
			md:flex md:items-center md:justify-center 
			p-6 md:p-8"
    >
      <div className="w-full md:max-w-screen-md">{children}</div>
    </div>
  );
}

export default ContentWrapper;
