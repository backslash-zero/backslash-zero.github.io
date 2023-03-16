interface ContentWrapperProps extends React.PropsWithChildren {}
function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div
      className="w-full h-full  
		  pt-16
		  overflow-auto
			p-6"
    >
      <div className="w-full">{children}</div>
    </div>
  );
}

export default ContentWrapper;
