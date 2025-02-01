// app/sections/[sectionId]/page.js
import codeSections from '@/lib/codeData';
import CodeText from '@/app/components/CodeText';

export default function SectionDetailPage({ params }) {
  const { sectionId } = params;
  const section = codeSections.find((sec) => sec.id === sectionId);

  if (!section) {
    return (
      <div>
        <h1>Section Not Found</h1>
        <p>We could not find the specified section.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{section.title}</h1>
      <CodeText text={section.content} />
    </div>
  );
}