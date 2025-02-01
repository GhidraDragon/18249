// app/page.js

import React from "react";

export default function HomePage() {
  return (
    <main className="container">
      <h1>18 U.S. Code § 249 - Hate Crime Acts</h1>
      <p>
        Welcome to our informational site about <strong>U.S. Code Title 18 § 249</strong>,
        commonly referred to as the <em>Hate Crime Acts</em>. We provide an overview of
        this important law, focusing on how it protects individuals on the basis of
        race, religion, national origin, gender, sexual orientation, gender identity,
        and disability (including mental disorders like schizophrenia).
      </p>

      <p>
        Navigate through the sections above to:
      </p>
      <ul>
        <li><strong>The Law</strong>: Read the full text of 18 U.S. Code § 249.</li>
        <li><strong>Disorders</strong>: Learn how mental disorders, such as schizophrenia, are addressed under the law.</li>
        <li><strong>Resources</strong>: Additional materials, disclaimers, and references.</li>
      </ul>
    </main>
  );
}