import dynamic from "next/dynamic";

interface CardLayoutProps extends React.PropsWithChildren {
  first: boolean;
}

const CardLayout = ({ first, children }: CardLayoutProps) => {
  return (
    <div
      className={`pt-4 pb-4
								${!first ? "border-t" : "border-none"} 
								flex flex-col
                gap-2
								border-t border-stone-800/20 text-sm
								`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
