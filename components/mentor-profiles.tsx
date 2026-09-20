import Image from "next/image";
import {mentors} from "@/lib/mentors";
import {Icon} from "./icons";

function HighlightUniversities({text}: {text: string}) {
  return text.split(/(University of (?:Cambridge|Southampton)(?:, UK)?|Southampton Theory Astrophysics and Gravity Research Center(?:, UK)?|Stanford University|Indian Institute of Science(?:, Bangalore)?|\bGIST\b)/).map((part, index) =>
    index % 2 === 1 ? <span className="mentor-university" key={index}>{part}</span> : part
  );
}

export function MentorProfiles({detailed = false}: {detailed?: boolean}) {
  return (
    <div className="mentor-profile-grid">
      {mentors.map(mentor => (
        <article className="mentor-profile" key={mentor.id} aria-labelledby={`mentor-${mentor.id}`}>
          <div className="mentor-profile-header">
            <div className={`mentor-portrait mentor-portrait-${mentor.id}`}>
              {mentor.photo ? (
                <Image src={mentor.photo} alt={mentor.name} fill sizes="(max-width: 480px) 100px, 128px"/>
              ) : (
                <span className="mentor-initials" aria-hidden="true">{mentor.name.split(" ").map(name => name[0]).join("")}</span>
              )}
            </div>
            <div>
              <h3 id={`mentor-${mentor.id}`}>{mentor.name}</h3>
              <p className="mentor-role"><HighlightUniversities text={mentor.role}/></p>
              {mentor.institution && <p className="mentor-institution"><HighlightUniversities text={mentor.institution}/></p>}
            </div>
          </div>
          <div className="mentor-qualifications">
            {mentor.qualifications.map(qualification => (
              <p className="mentor-qualification" key={qualification}><HighlightUniversities text={qualification}/></p>
            ))}
          </div>
          <p className="mentor-bio">{mentor.bio}</p>
          <ul className="mentor-interests" aria-label={`${mentor.name}'s research areas`}>
            {mentor.interests.map(interest => <li key={interest}>{interest}</li>)}
          </ul>
          {detailed && (
            <div className="mentor-background">
              <h4>Academic background</h4>
              <ul>{mentor.education.map(education => <li key={education}><HighlightUniversities text={education}/></li>)}</ul>
              <h4>Selected research</h4>
              <a href={mentor.publication.href} target="_blank" rel="noopener noreferrer">{mentor.publication.title} <Icon name="arrow"/></a>
            </div>
          )}
          <div className="mentor-profile-links">
            {mentor.links.map(link => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href} aria-label={`${mentor.name} on ${link.label}`}>{link.label} <Icon name="arrow"/></a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
