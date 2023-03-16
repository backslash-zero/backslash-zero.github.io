import dynamic from "next/dynamic";

interface CardLayoutProps extends React.PropsWithChildren {
  first: boolean;
}

const CardGridLayout = ({ first, children }: any) => {
  return (
    <div
      className={`pt-4 pb-4
								${!first ? "border-t" : "border-none"} 
								border-stone-800/20 border-t
                text-xs
								flex flex-col gap-2
                md:grid grid-cols-[120px_1fr] mdLgap-1
								`}
    >
      {children}
    </div>
  );
};

export default CardGridLayout;
