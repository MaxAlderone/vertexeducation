import Image from "next/image";

const universities = [
  {name: "Stanford University", country: "United States", logo: "stanford", href: "https://www.stanford.edu/"},
  {name: "Harvard University", country: "United States", logo: "harvard", href: "https://www.harvard.edu/"},
  {name: "Yale University", country: "United States", logo: "yale", href: "https://www.yale.edu/"},
  {name: "University of Pennsylvania", country: "United States", logo: "penn", href: "https://www.upenn.edu/"},
  {name: "Columbia University", country: "United States", logo: "columbia", href: "https://www.columbia.edu/"},
  {name: "University of Oxford", country: "United Kingdom", logo: "oxford", href: "https://www.ox.ac.uk/"},
  {name: "University of Cambridge", country: "United Kingdom", logo: "cambridge", href: "https://www.cam.ac.uk/"},
  {name: "MIT", country: "United States", logo: "mit", href: "https://www.mit.edu/"},
];

const evidence = [
  {
    institution: "Harvard University",
    text: "Harvard’s academic evaluation considered more than grades and test scores. Its highest academic rating could recognize students who had demonstrated the ability to produce original scholarship.",
    source: "Harvard University admissions criteria · 2020 court opinion, pp. 14–15",
    href: "https://www.harvard.edu/admissionscase/wp-content/uploads/sites/6/2021/06/first_circuit_court_of_appeals_opinion.pdf#page=14",
    furtherReading: "https://mindingthecampus.org/wp-content/uploads/2022/10/Doc-414-Statement-of-Material-Facts.pdf",
  },
  {
    institution: "University of Pennsylvania",
    text: "Nearly one-third of admitted students had taken part in academic research during high school, according to Penn’s announcement for the Class of 2026.",
    source: "E. Whitney Soule, Dean of Admissions, University of Pennsylvania · Class of 2026",
    href: "https://almanac.upenn.edu/articles/admission-decisions-for-the-class-of-2026",
  },
  {
    institution: "California Institute of Technology",
    text: "Caltech reported that 45% of admitted students included materials documenting past research. More than one-third also submitted a portfolio of creative and maker work.",
    source: "California Institute of Technology · Class of 2027",
    href: "https://www.caltech.edu/about/news/caltech-extends-admissions-offers-to-class-of-2027",
  },
  {
    institution: "Forbes",
    text: "A Forbes analysis highlights academic rigor, sustained extracurricular involvement, personal qualities, and recommendations as important parts of selective university admissions.",
    source: "Christopher Rim, Forbes contributor · Admissions commentary, June 2024",
    href: "https://www.forbes.com/sites/christopherrim/2024/06/18/the-admissions-criteria-that-top-schools-really-care-about/",
  },
];

export function ResearchMatters() {
  return (
    <article className="why-vertex-admissions" aria-labelledby="research-admissions-title">
      <div className="research-matters-heading">
        <h3 id="research-admissions-title">Research that opens doors</h3>
        <p>Leading universities look beyond grades and test scores to understand how students think, explore, and engage with inquiry. Research offers a way to demonstrate academic curiosity and independent thinking. Public admissions reports show how those qualities can appear in students’ applications.</p>
      </div>

      <div className="university-showcase" aria-label="Research universities in the UK and US">
        <p className="university-showcase-label">Explore leading research universities in the UK and US</p>
        <ul className="university-logos" role="list">
          {universities.map(university => (
            <li key={university.logo}>
              <a href={university.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${university.name}`}>
                <span className="university-logo">
                  <Image src={`/universities/${university.logo}-mark.webp`} alt={university.name} fill sizes="112px"/>
                </span>
                <span className="university-name">{university.name}</span>
                <span className="university-country">{university.country}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="research-evidence">
        {evidence.map(item => (
          <figure className="research-evidence-quote" key={item.institution}>
            <p>{item.text}</p>
            <figcaption className="research-evidence-sources">
              <a href={item.href} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">— </span><cite>{item.source}</cite></a>
              {item.furtherReading && <a className="research-evidence-related" href={item.furtherReading} target="_blank" rel="noopener noreferrer">Related 2018 case filing</a>}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
