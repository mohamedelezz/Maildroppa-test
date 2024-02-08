import { Footer, Navbar } from "@/src/components";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
