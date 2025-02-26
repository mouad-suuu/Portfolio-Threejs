import Sidebar from "@/components/component/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex h-screen overflow-hidden bg-background">
          {/* Sidebar */}
          <Sidebar />
          {/* Main content */}
          <main className="flex-1 overflow-y-auto focus:outline-none">
            {/* Render children components */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
