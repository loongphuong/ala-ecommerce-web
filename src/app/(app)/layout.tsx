import { Nav } from "../../components/nav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />
      <section
        id="sign-in"
        className="flex justify-center h-screen items-center"
      >
        {children}
      </section>
    </main>
  );
}
