import {ApplicationPanels} from "@/components/application-panels";
import {ResearchOpportunities} from "@/components/research-opportunities";
import {ProjectImage} from "@/components/project-image";
import {ProgramComparison} from "@/components/program-comparison";
import {MentorProfiles} from "@/components/mentor-profiles";import {ResearchMatters} from "@/components/research-matters";import Image from "next/image";import Link from "next/link";import {Eyebrow} from "@/components/ui";import {Icon} from "@/components/icons";import {projects,steps,subjects} from "@/lib/site-data";
export default function Home(){return <>
<section className="hero"><div className="hero-grid"><div className="hero-copy"><Eyebrow>One-to-one research mentorship</Eyebrow><h1 className="hero-title"><span className="hero-title-primary">Explore the Frontiers of knowledge</span><span className="hero-title-accent">with world class researchers</span></h1><p className="lede hero-lede"><span><strong>At Vertex Research,</strong> exceptional students work one-on-one with PhDs and researchers from leading institutions worldwide,</span>{" "}<span>conducting original research and developing AI expertise. By sharpening their research acumen, this experience</span>{" "}<span>helps them stand out and strengthens their path to the world’s leading universities.</span></p><div className="hero-actions"><Link href="/apply" className="button">Apply as a student <Icon name="arrow"/></Link><Link href="/how-it-works" className="text-link">See how it works <Icon name="arrow"/></Link></div><p className="microcopy">For curious high school students and undergraduates · Online, from anywhere</p></div><HeroVisual/></div><a className="scroll-cue" href="#intro">Scroll to explore <span>↓</span></a></section>
<section className="intro-band" id="intro"><div className="intro-statement"><span className="big-quote">“</span><p>The best learning begins with a question you <em>can’t stop thinking about.</em></p><span className="big-quote big-quote-close">”</span><Link href="/about" className="text-link">Why we exist <Icon name="arrow"/></Link></div></section>
<section className="section research-process" aria-labelledby="research-process-title"><div className="section-head"><div><h2 id="research-process-title">How <span className="research-process-brand">Vertex Research</span> works</h2><p className="research-process-subtitle">A clear path from curiosity to creation.</p><p>Research can feel mysterious. We make the process structured, personal, and achievable—without doing the thinking for you.</p></div><Link className="text-link" href="/how-it-works">See the complete journey <Icon name="arrow"/></Link></div><ol className="steps" role="list" aria-label="Research program steps">{steps.map((s,i)=><li className="step" key={s[0]}><div className="step-num" aria-hidden="true">{s[0]}</div><div className={`step-dot tone-${["blue","violet","orange","green","blue","violet","orange"][i]}`} aria-hidden="true"/><h3>{s[1]}</h3><p>{s[2]}</p></li>)}</ol></section>
<section className="section mentors-home" aria-labelledby="mentors-home-title">
  <div className="mentors-home-panel">
    <h2 id="mentors-home-title">Vertex Research <span className="research-process-brand">Mentors</span></h2>
    <div className="mentors-home-copy">
      <p>Work one-on-one with PhDs and researchers from leading institutions worldwide, with guidance shaped around your interests and research goals.</p>
      <Link className="text-link" href="/mentors">Learn about our mentors <Icon name="arrow"/></Link>
    </div>
    <MentorProfiles/>
  </div>
</section>
<section className="section why-vertex" aria-labelledby="why-vertex-title">
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
<ProgramComparison/>
<ResearchOpportunities/>
<section className="section subjects-section"><div className="programs-home-heading"><div><h2>Explore your <span className="research-process-brand">field</span></h2><p className="programs-home-subtitle">What are you curious about?</p><p>Start with a subject you love. Your question can live within one field—or cross the borders between several.</p></div><Link className="text-link" href="/subjects">Explore all subjects <Icon name="arrow"/></Link></div><div className="subject-grid">{subjects.slice(0,8).map(s=><Link className={`subject-card subject-card-image tone-${s.tone}`} href={`/subjects/${slug(s.name)}`} key={s.name}><Image className="subject-background" src={`/subjects/${slug(s.name)}.webp`} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"/><span className="subject-code">{s.code}</span><div><small>{s.group}</small><h3>{s.name}</h3><p>{s.desc}</p></div><Icon name="arrow"/></Link>)}</div></section>
<section className="section projects-home"><div className="programs-home-heading"><div><h2>Ideas in motion<span className="research-process-brand">: Example Research</span></h2><p className="programs-home-subtitle">See what a question can become.</p><p>These example project ideas show the range of directions a student might pursue. Every real project begins with the student.</p></div><Link className="text-link" href="/projects">See more example projects <Icon name="arrow"/></Link></div><div className="project-grid">{projects.map(p=><article className={`project-card tone-${p.tone}`} key={p.title}><ProjectImage project={p}/><small>Example project · {p.subject}</small><h3>{p.title}</h3><p>{p.type}</p></article>)}</div></section>
<ApplicationPanels/></>}
function slug(x:string){return x.toLowerCase().replaceAll(" ","-")}
function HeroVisual(){return <div className="hero-visual" aria-label="An abstract map of a research journey"><div className="research-card rc-one"><small>Starting point</small><strong>How do ideas spread?</strong><div className="lines"><i/><i/><i/></div></div><div className="research-card rc-two"><small>Explore</small><div className="mini-chart"><i/><i/><i/><i/></div></div><div className="research-card rc-three"><small>New direction</small><strong>What if context matters?</strong></div><svg viewBox="0 0 500 500" aria-hidden="true"><path className="orbit" d="M66 298C144 52 386 65 425 210S302 451 137 397"/><path className="orbit faint" d="M113 85c204-55 336 132 247 294"/><circle cx="66" cy="298" r="7"/><circle cx="425" cy="210" r="7"/><circle cx="137" cy="397" r="7"/></svg><span className="spark s1">✦</span><span className="spark s2">✧</span></div>}
