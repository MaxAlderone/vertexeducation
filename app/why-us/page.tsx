import {WhyVertex} from "@/components/why-vertex";
import {CTA, PageHero} from "@/components/ui";

export const metadata = {title: "Why us"};

export default function WhyUs() {
  return <>
    <PageHero eyebrow="Why us" title="Your curiosity deserves expert guidance." intro="Discover how personal mentorship, meaningful research and a community of researchers help students develop their ideas and take the next step."/>
    <WhyVertex standalone/>
    <CTA/>
  </>;
}
