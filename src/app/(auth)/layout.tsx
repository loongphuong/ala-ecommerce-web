export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="sign-in" className="flex justify-center h-screen items-center">
      {children}
    </section>
  );
}
