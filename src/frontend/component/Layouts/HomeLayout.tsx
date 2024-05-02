import { ReactNode } from "react";
type HomeProps = {
  children: ReactNode;
};
const HomeLayout = (props: HomeProps) => {
  return (
    <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto">
      {props.children}
    </div>
  );
};

export default HomeLayout;
