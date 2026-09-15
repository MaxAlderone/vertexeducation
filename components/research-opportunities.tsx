import {Icon} from "@/components/icons";

export function ResearchOpportunities() {
  return <div className="section research-opportunities">
    <section className="research-opportunity" aria-labelledby="symposium-title">
      <div className="programs-home-heading"><div>
        <h2 id="symposium-title">Vertex Research <span className="research-process-brand">Symposium</span></h2>
        <p className="programs-home-subtitle">Share your work. Meet fellow researchers. Discover new ideas.</p>
        <p>Present your research, exchange ideas with fellow student researchers, and develop the communication skills to explain your work with clarity and confidence.</p>
      </div></div>
      <div className="opportunity-highlights">
        <article><Icon name="book"/><h3>Present your research</h3><p>Bring your findings to an audience, discuss your approach, and practise answering questions about your work.</p></article>
        <article><Icon name="people"/><h3>Build your research community</h3><p>Meet fellow researchers, share perspectives, and learn from the questions others are exploring.</p></article>
        <article><Icon name="spark"/><h3>Interact with pioneers</h3><p>Established researchers and pioneers in their fields will be invited to give symposium talks, with opportunities for students to interact with them and ask questions.</p></article>
      </div>
    </section>
    <section className="research-opportunity research-opportunity-scholarships" aria-labelledby="scholarships-title">
      <div className="programs-home-heading"><div>
        <h2 id="scholarships-title">Vertex <span className="research-process-brand">Scholarships</span></h2>
        <p className="programs-home-subtitle">A small research problem. An opportunity to go further.</p>
        <p>Take on a small research problem and show us how you think. Based on their submissions, selected students will be awarded scholarships for Vertex Research programs.</p>
      </div></div>
      <ol className="opportunity-highlights scholarship-steps">
        <li><span className="scholarship-step-number">01</span><h3>Explore the problem</h3><p>Work through a small research problem and develop your approach.</p></li>
        <li><span className="scholarship-step-number">02</span><h3>Share your thinking</h3><p>Present your reasoning and findings in your submission.</p></li>
        <li><span className="scholarship-step-number">03</span><h3>Earn a scholarship</h3><p>Selected students receive scholarships to pursue a Vertex Research program.</p></li>
      </ol>
    </section>
  </div>;
}
