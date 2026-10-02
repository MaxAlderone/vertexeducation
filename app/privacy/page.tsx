import {PageHero} from "@/components/ui";

export const metadata = {title: "Privacy"};

export default function Privacy() {
  return <>
    <PageHero eyebrow="Privacy" title="Your application information" intro="How information submitted through our application forms is handled."/>
    <section className="section legal">
      <h2>Student and mentor applications</h2>
      <p>When you submit an application, we collect the details you enter, including your name, email address, academic background, interests, time zone, and availability. We use these details to review your application and contact you about it.</p>
      <p>Applications are processed through our website hosted on Vercel and stored in Supabase. Application records are not publicly accessible through the website. Please do not include passwords, financial details, or sensitive documents in your answers.</p>
      <h2>Contact form</h2>
      <p>The general contact form remains a demo and does not send or save messages.</p>
      <h2>Policy information</h2>
      <p>This notice describes the application system. Our complete privacy policy, including retention periods and a dedicated contact for privacy requests, is still being finalized.</p>
    </section>
  </>;
}
