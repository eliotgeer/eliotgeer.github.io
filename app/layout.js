import "./globals.css";

export const metadata = {
  title: "Eliot Geer",
  icons: {
    icon: "/assets/Favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body>{children}</body>
    </html>
  );
}
