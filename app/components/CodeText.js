// app/components/CodeText.js
export default function CodeText({ text }) {
    return (
      <pre style={{
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: '#fafafa',
        padding: '1rem',
        borderRadius: '4px'
      }}>
        {text}
      </pre>
    );
  }