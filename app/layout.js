// app/layout.js
import './global.css';
import Link from 'next/link';

export const metadata = {
  title: '18 U.S. Code § 249 - Hate crime acts',
  description: 'A Next.js 15 application detailing 18 U.S. Code § 249 - Hate crime acts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sections">Sections</Link>
          <Link href="/explanations">Explanations</Link>
        </nav>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Hate Crime Acts Reference</p>
        </footer>
      </body>
    </html>
  );
}