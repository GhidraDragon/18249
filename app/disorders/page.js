// app/disorders/page.js

"use client";
import React from "react";

export default function DisordersPage() {
  return (
    <main className="container">
      <h1>Hate Crimes and Mental Health Disorders</h1>
      <p>
        Under <strong>18 U.S. Code § 249</strong>, “disability” is a protected category.
        This means that individuals with physical or mental impairments—including
        disorders such as schizophrenia—are protected from violence perpetrated
        because of their disability or perceived disability.
      </p>

      <section>
        <h2>What Qualifies as a Disability?</h2>
        <p>
          According to various federal statutes (e.g., Americans with Disabilities Act),
          “disability” often encompasses:
        </p>
        <ul>
          <li>Physical impairments (e.g., mobility impairments, sensory impairments).</li>
          <li>Mental health conditions (e.g., schizophrenia, bipolar disorder, PTSD).</li>
          <li>Intellectual or developmental disabilities.</li>
        </ul>
        <p>
          If an individual is targeted with bodily harm due to their disability—or
          someone’s perception that they have a disability—the offense may be federally
          prosecuted as a <em>hate crime</em> if it meets the criteria in the statute
          (e.g., bodily injury and certain interstate or jurisdictional elements).
        </p>
      </section>

      <section>
        <h2>Schizophrenia and Hate Crimes</h2>
        <p>
          Specifically, <strong>schizophrenia</strong> is a severe mental disorder
          that affects how a person thinks, feels, and behaves. If someone commits
          violence against a person due to their real or perceived schizophrenia
          diagnosis, this could be prosecuted under the hate crime statute, provided
          the legal elements are met (e.g., willful causation of bodily injury because
          of a protected characteristic).
        </p>
      </section>

      <section>
        <h2>Legal Enforcement</h2>
        <p>
          Prosecutors—either state or federal—will look at evidence that the act of
          violence was motivated by bias against a <em>protected category</em>.
          For mental disorders, this may involve statements made by the perpetrator,
          timing, or circumstances suggesting an animus towards people with that
          particular disability.
        </p>
      </section>
    </main>
  );
}