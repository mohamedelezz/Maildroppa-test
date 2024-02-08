import { Footer, Navbar } from "@/src/components";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
