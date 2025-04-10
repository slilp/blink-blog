import { ThemeProvider } from "../providers/ThemeProvider";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NavBar />
      <main className="container mx-auto pt-10 min-h-[calc(100dvh-5rem)] p-4">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
