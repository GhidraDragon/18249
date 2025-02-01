// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>18 U.S. Code § 249 - Hate crime acts</h1>
      <p>
        Welcome to our resource on <strong>18 U.S. Code § 249</strong> – the federal 
        hate crimes statute. This site provides the full text of the statute along 
        with explanations.
      </p>
      <p>
        Use the navigation above to explore each subsection or read detailed 
        explanations about how this law is applied in practice.
      </p>
      <Link href="/sections">
        <button>View All Sections</button>
      </Link>
    </div>
  );
}