import Link from "next/link";
import {CTA, PageHero, SectionHead} from "@/components/ui";
import {Icon} from "@/components/icons";
import {MentorProfiles} from "@/components/mentor-profiles";

export const metadata = {title: "Mentors"};

export default function Mentors() {
  return (
    <>
      <PageHero eyebrow="Our mentors" title="Learn beside someone who knows how discovery feels." intro="Meet the researchers behind Vertex Research. Explore their academic backgrounds, research interests, and published work."/>
      <section className="section mentor-directory" aria-labelledby="mentor-directory-title">
        <div className="section-head">
          <div>
            <h2 id="mentor-directory-title">Meet our mentors</h2>
            <p>Personal research guidance, grounded in experience with questions at the frontiers of knowledge.</p>
          </div>
        </div>
        <MentorProfiles detailed/>
      </section>
      <section className="soft-section mentor-principles">
        <SectionHead eyebrow="A good research mentor" title="More than subject knowledge."/>
        <div className="feature-three">
          <div><h3>Listens for the real question</h3><p>Understands what is driving the student’s curiosity and helps bring it into focus.</p></div>
          <div><h3>Makes rigor approachable</h3><p>Introduces methods and standards at the right level without flattening the challenge.</p></div>
          <div><h3>Protects student ownership</h3><p>Offers direction and feedback while ensuring that the decisions and work remain the student’s.</p></div>
        </div>
        <Link className="text-link" href="/become-a-mentor">Interested in mentoring? <Icon name="arrow"/></Link>
      </section>
      <CTA/>
    </>
  );
}
