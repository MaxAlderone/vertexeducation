import Link from "next/link";
import {Icon} from "@/components/icons";

export function ApplicationPanels() {
  return <section className="section application-panels" aria-label="Join Vertex Research">
    <article className="application-card" aria-labelledby="student-application-title">
      <div className="programs-home-heading"><div>
        <h2 id="student-application-title">For curious <span className="research-process-brand">students</span></h2>
        <p className="programs-home-subtitle">Bring your curiosity. We’ll help with the path.</p>
        <p>Tell us what you want to explore and we’ll help you understand whether one-on-one research mentorship is the right next step.</p>
      </div></div>
      <div className="application-card-actions">
        <Link className="button" href="/apply">Apply as a student <Icon name="arrow"/></Link>
        <Link className="text-link" href="/contact">Ask a question <Icon name="arrow"/></Link>
      </div>
    </article>
    <article className="application-card" aria-labelledby="researcher-application-title">
      <div className="programs-home-heading"><div>
        <h2 id="researcher-application-title">For researchers &amp; <span className="research-process-brand">experts</span></h2>
        <p className="programs-home-subtitle">The question that feels simple to you could change a student’s world.</p>
        <p>Share your research experience and excitement with a young person and help them create original research and navigate their path forward.</p>
      </div></div>
      <div className="application-card-actions"><Link className="button" href="/become-a-mentor">Become a mentor <Icon name="arrow"/></Link></div>
    </article>
  </section>;
}
