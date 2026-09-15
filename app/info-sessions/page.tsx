import {InfoSessionCalendar} from "@/components/info-session-calendar";
import {PageHero} from "@/components/ui";
import "./info-sessions.css";

export const metadata = {title: "Sunday Info Sessions"};

export default function InfoSessions() {
  return <>
    <PageHero eyebrow="Vertex Research info sessions" title="Your questions. Our Sunday sessions." intro="Explore our programs, learn about research mentorship, and bring your questions. Select a Sunday on the calendar to see session details."/>
    <section className="section info-sessions-section"><InfoSessionCalendar/></section>
  </>;
}
