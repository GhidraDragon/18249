// app/the-law/page.js

"use client";
import React from "react";

export default function TheLawPage() {
  return (
    <main className="container">
      <h1>18 U.S. Code § 249 - Hate Crime Acts</h1>
      <p>
        This page provides the full text of <strong>18 U.S. Code § 249</strong>, which
        defines federal hate crime offenses and penalties. 
      </p>

      {/* Full legal text */}
      <section>
        <h2>Full Statutory Text</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>
{`(a) In General.—
(1) Offenses involving actual or perceived race, color, religion, or national origin.—
Whoever, whether or not acting under color of law, willfully causes bodily injury to
any person or, through the use of fire, a firearm, a dangerous weapon, or an explosive
or incendiary device, attempts to cause bodily injury to any person, because of the
actual or perceived race, color, religion, or national origin of any person—
(A) shall be imprisoned not more than 10 years, fined in accordance with this title,
or both; and
(B) shall be imprisoned for any term of years or for life, fined in accordance with
this title, or both, if—
(i) death results from the offense; or
(ii) the offense includes kidnapping or an attempt to kidnap, aggravated sexual abuse
or an attempt to commit aggravated sexual abuse, or an attempt to kill.

(2) Offenses involving actual or perceived religion, national origin, gender, sexual
orientation, gender identity, or disability.—
(A) In general.—Whoever, whether or not acting under color of law, in any circumstance
described in subparagraph (B) or paragraph (3), willfully causes bodily injury to any
person or, through the use of fire, a firearm, a dangerous weapon, or an explosive or
incendiary device, attempts to cause bodily injury to any person, because of the actual
or perceived religion, national origin, gender, sexual orientation, gender identity,
or disability of any person—
(i) shall be imprisoned not more than 10 years, fined in accordance with this title,
or both; and
(ii) shall be imprisoned for any term of years or for life, fined in accordance with
this title, or both, if—
(I) death results from the offense; or
(II) the offense includes kidnapping or an attempt to kidnap, aggravated sexual abuse
or an attempt to commit aggravated sexual abuse, or an attempt to kill.
(B) Circumstances described.—For purposes of subparagraph (A), the circumstances
described in this subparagraph are that—
(i) the conduct described in subparagraph (A) occurs during the course of, or as the
result of, the travel of the defendant or the victim—
(I) across a State line or national border; or
(II) using a channel, facility, or instrumentality of interstate or foreign commerce;
(ii) the defendant uses a channel, facility, or instrumentality of interstate or
foreign commerce in connection with the conduct described in subparagraph (A);
(iii) in connection with the conduct described in subparagraph (A), the defendant
employs a firearm, dangerous weapon, explosive or incendiary device, or other weapon
that has traveled in interstate or foreign commerce; or
(iv) the conduct described in subparagraph (A)—
(I) interferes with commercial or other economic activity in which the victim is
engaged at the time of the conduct; or
(II) otherwise affects interstate or foreign commerce.

(3) Offenses occurring in the special maritime or territorial jurisdiction of the
united states.—
Whoever, within the special maritime or territorial jurisdiction of the United States,
engages in conduct described in paragraph (1) or in paragraph (2)(A) (without regard
to whether that conduct occurred in a circumstance described in paragraph (2)(B))
shall be subject to the same penalties as prescribed in those paragraphs.

(4) Guidelines.—
All prosecutions conducted by the United States under this section shall be undertaken
pursuant to guidelines issued by the Attorney General, or the designee of the Attorney
General, to be included in the United States Attorneys’ Manual that shall establish
neutral and objective criteria for determining whether a crime was committed because
of the actual or perceived status of any person.

(5) Lynching.—
Whoever conspires to commit any offense under paragraph (1), (2), or (3) shall, if death
or serious bodily injury (as defined in section 2246 of this title) results from the offense,
be imprisoned for not more than 30 years, fined in accordance with this title, or both.

(6) Other conspiracies.—
Whoever conspires to commit any offense under paragraph (1), (2), or (3) shall, if death
or serious bodily injury (as defined in section 2246 of this title) results from the offense,
or if the offense includes kidnapping or an attempt to kidnap, aggravated sexual abuse
or an attempt to commit aggravated sexual abuse, or an attempt to kill, be imprisoned
for not more than 30 years, fined in accordance with this title, or both.

(b) Certification Requirement.—
(1) In general.—No prosecution of any offense described in this subsection may be
undertaken by the United States, except under the certification in writing of the
Attorney General, or a designee, that—
(A) the State does not have jurisdiction;
(B) the State has requested that the Federal Government assume jurisdiction;
(C) the verdict or sentence obtained pursuant to State charges left demonstrably
unvindicated the Federal interest in eradicating bias-motivated violence; or
(D) a prosecution by the United States is in the public interest and necessary to
secure substantial justice.

(2) Rule of construction.—
Nothing in this subsection shall be construed to limit the authority of Federal officers,
or a Federal grand jury, to investigate possible violations of this section.

(c) Definitions.—In this section—
(1) the term “bodily injury” has the meaning given such term in section 1365(h)(4)
of this title, but does not include solely emotional or psychological harm to the victim;
(2) the term “explosive or incendiary device” has the meaning given such term in
section 232 of this title;
(3) the term “firearm” has the meaning given such term in section 921(a) of this
title;
(4) the term “gender identity” means actual or perceived gender-related characteristics;
and
(5) the term “State” includes the District of Columbia, Puerto Rico, and any other
territory or possession of the United States.

(d) Statute of Limitations.—
(1) Offenses not resulting in death.—
Except as provided in paragraph (2), no person shall be prosecuted, tried, or punished
for any offense under this section unless the indictment for such offense is found, or
the information for such offense is instituted, not later than 7 years after the date on
which the offense was committed.
(2) Death resulting offenses.—
An indictment or information alleging that an offense under this section resulted in death
may be found or instituted at any time without limitation.

(e) Supervised Release.—
If a court includes, as a part of a sentence of imprisonment imposed for a violation of
subsection (a), a requirement that the defendant be placed on a term of supervised
release after imprisonment under section 3583, the court may order, as an explicit
condition of supervised release, that the defendant undertake educational classes or
community service directly related to the community harmed by the defendant’s offense.
`}
        </pre>
      </section>

      <section>
        <h2>Key Highlights</h2>
        <ul>
          <li>Protects against hate crimes based on race, color, religion, national origin, gender, sexual orientation, gender identity, and disability.</li>
          <li>Criminalizes attempts to cause bodily injury using weapons or fire.</li>
          <li>Includes heightened penalties if kidnapping, sexual abuse, or death occurs.</li>
          <li>Provides for federal jurisdiction when state remedies are inadequate or unavailing.</li>
        </ul>
      </section>
    </main>
  );
}