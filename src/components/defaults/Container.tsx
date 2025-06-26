import Header from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-[#010725] min-h-screen text-[#fff]">
      <Header />
      {children}
    </div>
  );
};

export default Container;
