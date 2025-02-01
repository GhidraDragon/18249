// app/resources/page.js

"use client";
import React from "react";

export default function ResourcesPage() {
  return (
    <main className="container">
      <h1>Resources & Disclaimers</h1>

      <section>
        <h2>Disclaimer: No Legal Advice</h2>
        <p>
          The content of this website is provided for informational purposes only and
          should not be construed as legal advice. If you require legal advice, consult
          a licensed attorney in your jurisdiction.
        </p>
      </section>

      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://www.justice.gov/crt/hate-crimes-laws" target="_blank" rel="noopener noreferrer">
              U.S. Department of Justice - Hate Crime Laws
            </a>
          </li>
          <li>
            <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">
              Americans with Disabilities Act (ADA)
            </a>
          </li>
          <li>
            <a
              href="https://www.samhsa.gov/find-help/national-helpline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAMHSA National Helpline (Substance Abuse and Mental Health Services Administration)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Federal vs. State Prosecution</h2>
        <p>
          Hate crimes can be prosecuted at either the state or federal level depending
          on the circumstances. The <strong>Attorney General</strong> must certify
          certain cases before a federal prosecution can proceed. This ensures that
          federal resources are used where they are most needed and that federal
          jurisdiction is appropriate.
        </p>
      </section>

      <section>
        <h2>Need Help or Witnessed a Hate Crime?</h2>
        <p>
          If you or someone you know has experienced or witnessed a potential hate crime:
        </p>
        <ul>
          <li>Call 911 if there is immediate danger.</li>
          <li>
            Report the incident to local law enforcement and to the FBI’s tip line at:
            {" "}
            <a href="https://tips.fbi.gov/" target="_blank" rel="noopener noreferrer">
              https://tips.fbi.gov/
            </a>
          </li>
          <li>Contact advocacy groups that deal with hate crimes and disability rights.</li>
        </ul>
      </section>
    </main>
  );
}