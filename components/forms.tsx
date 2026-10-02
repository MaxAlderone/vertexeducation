"use client";
import {FormEvent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {grades, subjects} from "@/lib/application-input";

export function ApplicationForm({mentor = false}: {mentor?: boolean}) {
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const busy = useRef(false);
  const attempt = useRef<{body: string; id: string} | null>(null);
  const feedback = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done || error) feedback.current?.focus();
  }, [done, error]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const body = JSON.stringify({...fields, kind: mentor ? "mentor" : "student"});
    busy.current = true;
    setPending(true);
    setError("");
    try {
      if (!attempt.current || attempt.current.body !== body) {
        attempt.current = {body, id: crypto.randomUUID()};
      }
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...JSON.parse(body), submissionId: attempt.current.id}),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        setError(typeof result.error === "string" ? result.error : "We couldn’t save your application. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("We couldn’t confirm your submission. Your entries are still here. Please try again; retrying the same application won’t create a duplicate.");
    } finally {
      busy.current = false;
      setPending(false);
    }
  }

  if (done) return <div className="success" ref={feedback} tabIndex={-1} role="status">
    <span aria-hidden="true">✓</span>
    <h2>Thank you for your interest.</h2>
    <p>Your {mentor ? "mentor" : "student"} application has been received by Vertex Research.</p>
  </div>;

  return <form className="application-form" onSubmit={submit} aria-busy={pending}>
    <div className="application-honeypot" aria-hidden="true">
      <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label>
    </div>
    <FormSection number="01" title="About you" disabled={pending}>
      <div className="field-grid">
        <Field label="First name" name="firstName" maxLength={100}/>
        <Field label="Last name" name="lastName" maxLength={100}/>
        <Field type="email" label="Email address" name="email" maxLength={254}/>
        <Field label={mentor ? "Current role" : "Country"} name="context"/>
        {mentor ? <>
          <Field label="Current institution" name="institution"/>
          <Field label="Highest degree" name="degree"/>
        </> : <>
          <label>Grade level<select name="grade" required>
            <option value="">Select your grade</option>
            {grades.map(grade => <option key={grade}>{grade}</option>)}
          </select></label>
          <Field label="School" name="school"/>
        </>}
      </div>
    </FormSection>
    <FormSection number="02" title={mentor ? "Expertise & experience" : "Your interests"} disabled={pending}>
      <label>{mentor ? "Primary field" : "Primary subject"}<select name="subject" required>
        <option value="">Select a field</option>
        {subjects.map(subject => <option key={subject}>{subject}</option>)}
      </select></label>
      <label>{mentor ? "Tell us about your research and mentoring experience" : "What ideas or questions would you like to explore?"}
        <textarea name="interests" rows={5} maxLength={5000} required placeholder={mentor ? "Research interests, teaching or mentoring experience, and potential project areas…" : "It is completely fine if your idea is still broad…"}/>
      </label>
    </FormSection>
    <FormSection number="03" title="A little more context" disabled={pending}>
      <div className="field-grid">
        <Field label="Time zone" name="timezone" maxLength={100}/>
        <Field label="General availability" name="availability" maxLength={500}/>
      </div>
      <label>{mentor ? "Professional profile or academic website" : "What do you hope to gain from this experience?"}
        <textarea name="goals" rows={4} maxLength={3000}/>
      </label>
    </FormSection>
    {error && <div className="placeholder-note" role="alert" tabIndex={-1} ref={feedback}>{error}</div>}
    <div className="form-end">
      <p>By submitting, you acknowledge that this is an initial expression of interest, not an enrollment or employment agreement. Vertex Research will use your details to review your application and contact you about it. <Link href="/privacy">Privacy information</Link>.</p>
      <button className="button" type="submit" disabled={pending}>{pending ? "Submitting…" : "Submit interest"}</button>
    </div>
  </form>;
}

function Field({label, name, type = "text", maxLength = 200}: {label: string; name: string; type?: string; maxLength?: number}) {
  return <label>{label}<input name={name} type={type} maxLength={maxLength} required/></label>;
}
function FormSection({number, title, children, disabled = false}: {number: string; title: string; children: React.ReactNode; disabled?: boolean}) {
  return <fieldset disabled={disabled}><legend><span>{number}</span>{title}</legend>{children}</fieldset>;
}
export function ContactForm(){const [done,setDone]=useState(false);return done?<div className="success compact"><h2>Message noted.</h2><p>This demo does not send messages yet. The production form will be connected when a contact email is finalized.</p></div>:<form className="contact-form" onSubmit={e=>{e.preventDefault();setDone(true)}}><Field label="Your name" name="name"/><Field label="Email address" name="email" type="email"/><label>What can we help with?<select required><option value="">Choose one</option><option>Student inquiry</option><option>Parent inquiry</option><option>Mentor inquiry</option><option>School partnership</option><option>Other</option></select></label><label>Message<textarea rows={6} required/></label><button className="button" type="submit">Send message</button></form>}
