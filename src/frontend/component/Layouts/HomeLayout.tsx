import { ReactNode } from "react";
type HomeProps = {
  children: ReactNode;
};
const HomeLayout = (props: HomeProps) => {
  return (
    <div className="px-3 max-w-[1024px] sm:w-[70%] mx-auto z-10">
      {props.children}
    </div>
  );
};

export default HomeLayout;
