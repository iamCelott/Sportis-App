import { ReactNode } from "react";
type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto">
      {props.children}
    </div>
  );
};

export default MainLayout;
