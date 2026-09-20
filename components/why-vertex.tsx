import Image from "next/image";
import Link from "next/link";
import {Icon} from "@/components/icons";
import {ResearchMatters} from "@/components/research-matters";

export function WhyVertex({standalone = false}: {standalone?: boolean}) {
  return (
<section className={`section why-vertex${standalone ? " why-vertex-standalone" : ""}`} aria-labelledby="why-vertex-title">
  <div className="why-vertex-panel">
    <div className="why-vertex-header">
      <h2 id="why-vertex-title">Why <span className="research-process-brand">Vertex Research</span></h2>
      <Link className="text-link" href="/programs">Explore our program <Icon name="arrow"/></Link>
    </div>
    <div className="why-vertex-benefits">
      <article className="why-vertex-featured">
        <div className="why-vertex-image">
          <Image src="/why-vertex/expert-mentorship-premium.webp" alt="Open reference book and research notebook connected by a brass arc, representing personal expert guidance." fill sizes="(max-width: 700px) 90vw, 45vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Work one-on-one with a world-leading researcher</h3>
          <p>Receive personal guidance from a leading researcher in your field of interest from top universities such as Cambridge, Oxford, Stanford, and Ivy League institutions. Discuss your ideas, work through challenges, and develop your thinking through thoughtful, individual feedback.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/question-led-learning-premium.webp" alt="Open textbook, brass magnifying glass, and question mark representing learning through research." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Master a subject by pursuing a question</h3>
          <p>Knowledge grows when people pursue questions worth answering. Your mentor helps you choose a research question that challenges you while remaining achievable. As you work toward an answer, you build the deep understanding and skills the problem demands.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/creative-research-goal-premium.webp" alt="Glass lightbulb connected by a brass path to a target, representing a focused research goal." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Turn creativity into a research goal</h3>
          <p>Start with an idea that excites you. Work with a world-leading expert to shape it into a clear, achievable research goal and a plan to pursue it.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/real-research-premium.webp" alt="Laboratory flask, plotted research notes, and a magnifying glass representing experimentation and evidence." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Experience research as it really happens</h3>
          <p>Explore questions without ready-made answers. Learn to investigate, test ideas, weigh evidence, and rethink your approach when the unexpected challenges your thinking.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/tangible-outcome-premium.webp" alt="Bound research paper, glass display with a graph, and circuit prototype representing tangible outcomes." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Create work that opens new possibilities</h3>
          <p>Bring your thinking together in a paper, analysis, prototype, or other meaningful outcome. Showcase what you can investigate, understand, and create as you pursue new opportunities.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/research-symposium-premium.webp" alt="Research presentation screen, lectern, microphone, and empty chairs representing an academic symposium." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Share your work with the research community</h3>
          <p>Present your work at research symposiums involving world-leading researchers. Build confidence in communicating your ideas and share your contribution with a wider academic audience.</p>
        </div>
      </article>
      <article>
        <div className="why-vertex-image">
          <Image src="/why-vertex/recommendation-letters-premium.webp" alt="Academic letter, ivory envelope, fountain pen, and university arch representing a recommendation." fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw"/>
        </div>
        <div className="why-vertex-copy">
          <h3>Let your research strengthen your applications</h3>
          <p>Your researcher can provide recommendation letters reflecting your research, helping you bring your work and potential to life in applications to leading universities worldwide.</p>
        </div>
      </article>
      <ResearchMatters/>
    </div>
  </div>
</section>
  );
}
