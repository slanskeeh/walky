import "./globals.scss";

export const metadata = {
  title: "Walky - travel app",
  description:
    "Your personal travel advisor with lots of useful information from people all around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
