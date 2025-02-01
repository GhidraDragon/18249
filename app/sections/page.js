// app/sections/page.js
import Link from 'next/link';
import codeSections from '@/lib/codeData';

export default function SectionsPage() {
  return (
    <div>
      <h1>All Sections of 18 U.S. Code § 249</h1>
      <ul>
        {codeSections.map((section) => (
          <li key={section.id}>
            <Link href={`/sections/${section.id}`}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}