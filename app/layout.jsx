import "./globals.css";

export const metadata = {
  title: "RWA Careers",
  description: "CMS-ready careers landing page for a real-world assets company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
