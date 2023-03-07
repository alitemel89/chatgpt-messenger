import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-slate-800 max-w-xs h-screen overflow-y-auto
          md:min-w-[20rem]">
            <Sidebar />
          </div>

          {/* Client Provider - Notification */}

          <div className="bg-slate-700 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}