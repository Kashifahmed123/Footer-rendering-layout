// For Header & footer

import Navbar from "./components/Navbar"
import Footer from "./footer/page"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      style = {{backgroundColor: "black"}}
      >
        <Navbar/>
        {children}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </body>
    </html>
  );
}

// Children variable will show the content of the page/route