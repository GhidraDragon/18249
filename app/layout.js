// app/layout.js

export const metadata = {
    title: "Hate Crime Acts – 18 U.S. Code § 249",
    description: "Information about 18 U.S. Code § 249 (Hate Crime Acts).",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <nav>
            <a href="/">Home</a>
            <a href="/the-law">The Law</a>
            <a href="/disorders">Disorders</a>
            <a href="/resources">Resources</a>
          </nav>
          {children}
        </body>
      </html>
    );
  }