import "./globals.css";

export const metadata = {
  title: "RCIC Practice OS",
  description: "RCIC Practice OS development environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
