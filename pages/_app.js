// pages/_app.js
import "../styles/global.css"; // Global stylesheet

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* This is like your global layout */}
      <nav>
        <a href="/">Home</a>
        <a href="/the-law">The Law</a>
        <a href="/disorders">Disorders</a>
        <a href="/resources">Resources</a>
      </nav>

      {/* Render the page component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;