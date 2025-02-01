export const metadata = {
    title: "Hate Crime Acts",
    description: "Next.js 15 site displaying 18 U.S. Code § 249 text",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }