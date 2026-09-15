import Link from "next/link";
import {Icon} from "@/components/icons";

// Three program tiers adapted from the supplied Lumiere reference.
const programs = [
  {
    name: "Vertex Scientific Review Program",
    details: ["PhD and Postdoctoral researchers", "10", "Research review paper", "Recommendation letters", <Symposium key="symposium" presentation="10 minute review presentation"/>, "3–4 months", true],
  },
  {
    name: "Vertex Research Program",
    details: ["PhD and Postdoctoral researchers", "15", "Research paper with a novel problem", "Recommendation letters", <Symposium key="symposium" presentation="20 minute research presentation"/>, "4–6 months", true],
  },
  {
    name: "Vertex Research Fellowship",
    details: ["PhD and Postdoctoral researchers", "20", "Research paper with a challenging problem and possible publication in a high school journal*", "Recommendation letters", <Symposium key="symposium" presentation="30 minute research presentation"/>, "6–8 months", true],
  },
];

const features = [
  "Mentor Type",
  "Individual sessions with mentor",
  "Output",
  "University application support",
  "Research symposium",
  "Duration",
  "Program oversight from Lumiere program manager",
];

function Symposium({presentation}: {presentation: string}) {
  return <div className="program-comparison-symposium">
    <span className="program-comparison-check" aria-label="Included"><Icon name="check"/></span>
    <span>{presentation}</span>
  </div>;
}

export function ProgramComparison() {
  return (
    <section className="section programs-home" aria-labelledby="programs-home-title">
      <div className="programs-home-heading">
        <div>
          <h2 id="programs-home-title">Vertex Research <span className="research-process-brand">Programs</span></h2>
          <p className="programs-home-subtitle">Find your path into research.</p>
          <p>Explore the mentorship, research experience, and outcomes available at Vertex Research.</p>
        </div>
        <Link className="text-link" href="/programs">Explore program details <Icon name="arrow"/></Link>
      </div>
      <div className="program-comparison-scroll" role="region" aria-label="Program comparison" tabIndex={0}>
        <table className="program-comparison">
          <caption>Research program comparison</caption>
          <thead>
            <tr>
              <td className="program-comparison-label"/>
              {programs.map(program => (
                <th scope="col" key={program.name}>
                  <h3>{program.name}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                {programs.map(program => <td key={program.name}>{program.details[index] === true ? <span className="program-comparison-check" aria-label="Included"><Icon name="check"/></span> : program.details[index]}</td>)}
              </tr>
            ))}
            <tr className="program-comparison-actions">
              <th scope="row">Apply</th>
              {programs.map(program => (
                <td key={program.name}>
                  <Link className="button" href="/apply" aria-label={`Apply now for ${program.name}`}>Apply now <Icon name="arrow"/></Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="program-comparison-footnote">*Publication is not guaranteed. Support includes up to three submission rounds to selective high-school or college-level journals.</p>
      <p className="programs-home-help">Need help finding the right fit? <Link href="/info-sessions">Attend our info session <Icon name="arrow"/></Link></p>
    </section>
  );
}
