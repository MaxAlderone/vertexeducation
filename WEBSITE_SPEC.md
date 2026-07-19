# Website & Product Specification

> **Status:** Living document
> **Purpose:** Primary product and content specification for the website
> **Last Updated:** Update this date whenever making major changes

---

# 1. How to Use This File

This file is the primary source of truth for the structure, content, functionality, and design direction of this website.

AI coding agents such as Claude Code and Codex should read this file before making significant changes to the website.

When this file is changed, the website should be updated to reflect the latest specification.

A typical instruction to an AI coding agent can be:

> Read WEBSITE_SPEC.md carefully. Compare the current website against the latest specification and update the implementation to match it. Preserve unrelated working functionality. Run the appropriate checks after making changes.

When implementing a specific section:

> Read WEBSITE_SPEC.md, especially the Mentors section. Update the mentor directory and mentor profile pages to match the specification.

This document describes WHAT the website should do.

The codebase determines HOW it is implemented.

---

# 2. Company Overview

## Company Name

**PLACEHOLDER:** [COMPANY NAME]

This name has not yet been finalized.

All references to the company name should ideally come from a centralized site configuration so the name can easily be changed later.

---

## Tagline

**PLACEHOLDER:**

> Turn curiosity into meaningful research.

Alternative:

> Explore deeply. Research independently. Build something meaningful.

Final wording has not yet been decided.

---

## What the Company Does

[COMPANY NAME] is an online research and project mentorship platform for ambitious middle-school and high-school students.

The company connects students with highly qualified mentors, including:

* PhD students
* PhD graduates
* Postdoctoral researchers
* Academic researchers
* Professors
* Scientists
* Engineers
* Industry researchers
* Other highly qualified subject-matter experts

Students work primarily through one-on-one mentorship.

The purpose of the program is to help students explore subjects beyond the standard school curriculum and learn how researchers approach difficult, open-ended questions.

Students may ultimately produce an independent project such as:

* Research paper
* Literature review
* Scientific report
* Data-analysis project
* AI or machine-learning project
* Software project
* Mathematical investigation
* Engineering project
* Economics research project
* Social-science study
* Policy analysis
* Prototype
* Presentation
* Interdisciplinary project

The exact outcome depends on:

* Student interests
* Student preparation
* Subject
* Mentor
* Program selected
* Project feasibility

The company should NOT guarantee publication, competition success, or college admission.

---

# 3. Mission

## Draft Mission

Our mission is to give motivated young students access to intellectual mentorship that is normally difficult to find before university.

We want students to experience the process of asking meaningful questions, exploring difficult ideas, learning independently, and creating original work with guidance from someone who has genuine expertise in the subject.

---

# 4. Target Customers

## Primary Customer

High-school students who:

* Are intellectually curious
* Want to explore a subject beyond school
* Are considering studying a particular field
* Want experience with research
* Want to undertake an independent project
* Want individual guidance from an expert

---

## Secondary Customer

Parents of students.

Parents may be particularly interested in:

* Mentor quality
* Mentor vetting
* Program structure
* Safety
* Academic rigor
* Communication
* Scheduling
* Value
* Student progress
* Final project outcome

The website should address both the student and the parent.

---

## Additional Audiences

* Middle-school students
* School counselors
* Teachers
* Educational consultants
* Prospective mentors
* Academic institutions
* Potential partners

---

# 5. Core Value Proposition

A student should be able to visit the homepage and understand within approximately five seconds:

> I can work one-on-one with an expert researcher in a subject I care about and develop my own meaningful research or project.

The main differentiators should eventually include:

* Highly qualified mentors
* Personalized one-on-one mentorship
* Student-driven topics
* Broad subject coverage
* Flexible online participation
* Structured support
* Meaningful final projects

Do not make unsupported claims about being "the best," "the largest," or "the #1 program."

---

# 6. Brand Personality

The brand should feel:

* Intelligent
* Academic
* Premium
* Modern
* Credible
* Welcoming
* Global
* Curious
* Ambitious
* Thoughtful

The brand should NOT feel:

* Childish
* Cartoonish
* Arrogant
* Exclusively Ivy League focused
* Like a tutoring center
* Like a generic online course company
* Like a college admissions consultancy
* Like a generic SaaS company

---

# 7. Visual Design

## Overall Direction

Use a sophisticated and minimal visual design.

Prioritize:

* Strong typography
* Whitespace
* Elegant cards
* Clear information hierarchy
* Subtle visual detail
* High-quality imagery where available
* Academic and scientific visual cues
* Excellent mobile design

Avoid excessive:

* Gradients
* Animations
* Shadows
* Decorative clutter
* Stock-photo clichés

---

## Color Palette

**Status: TBD**

Use a temporary sophisticated palette until final branding is established.

The implementation should make global colors easy to change.

---

## Typography

**Status: TBD**

Use professional, highly readable fonts.

Typography should distinguish clearly between:

* Large display headings
* Section headings
* Body text
* Labels
* Metadata

---

# 8. Primary Calls to Action

## Student CTA

**Apply as a Student**

This is the primary conversion action.

Alternative shorter navigation CTA:

**Apply**

---

## Mentor CTA

**Become a Mentor**

This should have its own dedicated journey.

---

## Secondary CTAs

Possible secondary actions:

* Explore Programs
* How It Works
* Explore Subjects
* Meet Our Mentors
* View Student Projects

---

# 9. Main Navigation

Current proposed navigation:

* Programs
* How It Works
* Mentors
* Student Projects
* About
* Resources

Additional links:

* For Parents
* FAQ

Primary button:

* Apply

Mentor link:

* Become a Mentor

This navigation may be changed later.

---

# 10. Website Pages

The website should eventually contain the following pages.

## Public Pages

1. Home
2. Programs
3. Program Detail
4. How It Works
5. Mentors
6. Mentor Profile
7. Subjects
8. Subject Detail
9. Student Projects
10. Project Detail
11. For Parents
12. About
13. Become a Mentor
14. Student Application
15. Mentor Application
16. FAQ
17. Resources
18. Contact
19. Privacy Policy
20. Terms of Service

---

# 11. MVP Pages

The first production version should prioritize:

* Home
* Programs
* How It Works
* Mentors
* Subjects
* Student Projects
* For Parents
* About
* Become a Mentor
* Apply
* FAQ
* Contact

Detailed profile pages can initially use sample/static data.

---

# 12. Homepage Specification

## Section 1 — Hero

### Goal

Immediately explain the product.

### Draft Headline

> Turn curiosity into meaningful research.

### Draft Supporting Text

> Work one-on-one with an expert researcher to explore a subject you care about and create an original research or project-based outcome.

### Primary CTA

Apply as a Student

### Secondary CTA

See How It Works

### Mentor Link

Interested in mentoring? Become a Mentor.

---

## Section 2 — Mentor Credibility

Explain that students may work with mentors such as:

* PhD researchers
* Postdoctoral researchers
* Academics
* Scientists
* Engineers
* Industry researchers

Do NOT display fake mentor numbers.

Do NOT display fake university affiliations.

When real mentors join, this section can highlight their actual backgrounds.

---

## Section 3 — How It Works

Display approximately five steps.

### Step 1

**Tell us what interests you**

Students tell us about their interests, background, goals, and subjects they want to explore.

### Step 2

**Get matched with a mentor**

The team identifies an appropriate mentor whose expertise aligns with the student's interests.

### Step 3

**Shape your question**

The student and mentor narrow a broad interest into a feasible research question or project.

### Step 4

**Research and build**

The student works independently between one-on-one mentor sessions while receiving guidance, feedback, and direction.

### Step 5

**Complete your project**

The student develops a final outcome that reflects their learning and work.

---

## Section 4 — Explore Subjects

Show a visually attractive grid.

Initial subject list:

### STEM

* Artificial Intelligence
* Computer Science
* Physics
* Mathematics
* Engineering
* Biology
* Chemistry
* Medicine
* Neuroscience
* Environmental Science
* Data Science

### Social Sciences

* Economics
* Psychology
* Political Science
* International Relations
* Sociology

### Humanities

* History
* Philosophy
* Literature
* Linguistics

### Business

* Business
* Finance
* Entrepreneurship

Students should eventually be able to explore interdisciplinary topics.

---

## Section 5 — Programs

Show available programs.

Current programs are not finalized.

For MVP development, create:

### Research Mentorship Program

**Format:** One-on-one

**Description:**

A personalized research experience in which a student works with an expert mentor to explore a subject and develop an independent project.

**Duration:** TBD

**Number of sessions:** TBD

**Price:** TBD

Do not invent pricing.

---

### Advanced Research Program

**Status:** Potential future program

For students seeking a longer and more intensive project.

Do not present as active unless activated in this document.

---

### Exploratory Mentorship

**Status:** Potential future program

A shorter program for students who want to explore a subject before committing to a full research project.

Do not present as active unless activated in this document.

---

# 13. Programs Page

The Programs page should answer:

* What programs are available?
* Who is each program for?
* What will the student do?
* How long is it?
* How many mentor sessions are included?
* What outcomes are possible?
* How does matching work?
* How much does it cost?
* How does the student apply?

Do not invent information marked TBD.

Use "Contact us" or omit fields until finalized.

---

# 14. How It Works Page

Explain the complete student journey.

Proposed journey:

1. Submit application
2. Initial review
3. Discuss interests and goals
4. Mentor matching
5. Introductory meeting
6. Define project direction
7. Conduct research/project work
8. Receive mentor feedback
9. Complete final project
10. Present or showcase work where appropriate

The exact operational workflow is TBD.

---

# 15. Mentor Directory

## URL

`/mentors`

## Purpose

Allow prospective students and parents to understand the quality and diversity of mentors.

Eventually support filtering.

### Filters

* Subject
* Research field
* Degree
* Role

### Search

Search by:

* Name
* Expertise
* Research keywords

---

# 16. Mentor Data Structure

Each mentor may have:

* ID
* Slug
* First name
* Last name or last initial
* Photo
* Pronouns
* Current position
* Current institution
* Highest degree
* Degree institution
* Subject areas
* Expertise tags
* Biography
* Research interests
* Teaching experience
* Mentoring philosophy
* Example project ideas

Private fields must not be publicly exposed.

Never display:

* Private email
* Phone number
* Home address
* Private compensation information

---

# 17. Example Mentor Profile

This is placeholder data only and should be clearly identifiable as sample content during development.

**Name:** Dr. Maya Chen

**Role:** Postdoctoral Researcher

**Field:** Artificial Intelligence

**Expertise:**

* Machine Learning
* Natural Language Processing
* AI Safety

**Biography:**

Sample placeholder biography for development purposes only.

Do NOT imply that this is a real mentor.

---

# 18. Become a Mentor Page

## Goal

Recruit highly qualified researchers.

### Hero

Possible heading:

> Share your expertise with the next generation of researchers.

Possible supporting text:

> Mentor motivated students as they learn how to ask meaningful questions, navigate complex ideas, and build independent projects.

---

## Why Mentor?

Potential benefits:

* Inspire young students
* Share expertise
* Gain mentoring experience
* Flexible scheduling
* Work remotely
* Paid mentorship

Only describe compensation when actual compensation policy is established.

---

## Who We Are Looking For

Potential mentors may include:

* PhD students
* PhD graduates
* Postdoctoral researchers
* Professors
* Academic researchers
* Research scientists
* Qualified industry experts

Selection criteria may include:

* Subject expertise
* Academic background
* Communication ability
* Mentoring ability
* Reliability
* Professionalism

Exact vetting procedure is TBD.

---

## Mentor Application CTA

**Apply to Become a Mentor**

---

# 19. Student Projects

## URL

`/projects`

## Purpose

Show examples of the kinds of intellectual work students can undertake.

Do not fabricate real student success stories.

During development, label examples as:

"Sample Project Idea"

or

"Example Project"

until real projects are available.

---

# 20. Example Project Categories

### Artificial Intelligence

Example:

> Detecting misinformation using natural language processing

### Physics

Example:

> Simulating orbital dynamics in multi-body gravitational systems

### Economics

Example:

> Studying the relationship between public transportation access and local economic activity

### Biology

Example:

> Exploring computational models of infectious disease spread

### Mathematics

Example:

> Investigating mathematical patterns in network structures

These are example ideas, not claims about completed student projects.

---

# 21. Project Data Structure

Each project may eventually include:

* ID
* Slug
* Title
* Student first name
* Student location
* Mentor
* Subject
* Research field
* Project type
* Short description
* Abstract
* Outcome
* Year
* Image
* External link

Student privacy and consent must be respected.

---

# 22. For Parents Page

This page should answer common parent concerns.

Potential sections:

## Academic Value

Explain how independent research develops:

* Critical thinking
* Independent learning
* Analytical skills
* Academic writing
* Problem solving
* Communication
* Intellectual confidence

---

## Mentor Quality

Explain the mentor selection process once established.

Do not claim background checks or vetting procedures unless actually implemented.

---

## Structure

Explain:

* Online format
* One-on-one sessions
* Independent work
* Feedback
* Project milestones

---

## Safety

A formal student-safety policy must eventually be developed.

Until then, do not make unsupported claims.

Potential future measures may include:

* Platform-based communication
* Session monitoring policies
* Parent communication
* Codes of conduct
* Safeguarding policies

These should only be publicly claimed once implemented.

---

# 23. About Page

Potential structure:

## Mission

Why the company exists.

## Story

Founder story to be added.

**Status:** TBD

## Philosophy

Research should not be reserved only for university students.

Young students can learn to think more deeply when given:

* Time
* Intellectual freedom
* Expert guidance
* Appropriate structure

## Team

Team information to be added.

---

# 24. Student Application

## URL

`/apply`

Suggested fields:

### Student Information

* First name
* Last name
* Email
* Country
* School
* Grade level

### Parent/Guardian

Where appropriate:

* Parent/guardian name
* Parent/guardian email

### Academic Interests

* Primary subject
* Additional subjects
* Topics of interest

### Background

* Why are you interested in research?
* Have you done research before?
* Relevant courses or experience

### Goals

* What would you like to explore?
* Desired project type
* Program preference

### Scheduling

* Time zone
* General availability

### Discovery

* How did you hear about us?

---

# 25. Mentor Application

## URL

`/become-a-mentor/apply`

Suggested fields:

### Basic Information

* First name
* Last name
* Email

### Academic Background

* Current role
* Current institution
* Highest degree
* Degree institution
* Primary field

### Expertise

* Areas of expertise
* Research interests
* Potential project areas

### Experience

* Teaching experience
* Mentoring experience

### Professional Links

* LinkedIn
* Academic website
* Personal website
* Google Scholar

### CV

* CV/resume upload

### Availability

* Time zone
* General availability

---

# 26. FAQ

Initial questions:

## Students and Parents

* Who can apply?
* Do I need previous research experience?
* How are mentors selected?
* How am I matched with a mentor?
* Can I choose my research topic?
* How much time should I expect to spend?
* Is the program online?
* What happens if I do not know what topic I want to research?
* Will I publish a paper?
* Will this help with college admissions?
* What kinds of projects can students create?
* What subjects are available?
* How much does the program cost?

Answers marked TBD should not be invented.

---

## Mentors

* Who can become a mentor?
* Is mentoring remote?
* How much time does mentoring require?
* How are students matched with mentors?
* Are mentors paid?
* Can mentors choose which students they work with?

---

# 27. Resources

Future content may include:

* Research guides
* Subject guides
* How to choose a research topic
* Student research examples
* Interviews with researchers
* Academic skills articles
* College research advice

This section may eventually function as an SEO-focused educational content hub.

---

# 28. Contact Page

Include:

* Contact form
* General contact email

**Email:** TBD

Potential inquiry categories:

* Student inquiry
* Parent inquiry
* Mentor inquiry
* School partnership
* Other

---

# 29. Footer

Suggested footer structure:

## Company

* About
* Contact
* FAQ

## Programs

* Programs
* How It Works
* Apply

## Explore

* Mentors
* Subjects
* Student Projects
* Resources

## Mentors

* Become a Mentor
* Mentor Application

## Legal

* Privacy
* Terms

Include copyright notice.

Do not include fake social media profiles.

---

# 30. Testimonials

**Status: No verified testimonials currently available.**

Do NOT create fake testimonials.

The website architecture may support testimonials in the future.

Until real testimonials exist:

* Omit the section, or
* Use another informative section instead.

---

# 31. Statistics

**Status: No verified company statistics currently available.**

Do NOT invent statistics such as:

* Number of students
* Number of mentors
* Acceptance rates
* Publication rates
* University admissions rates
* Satisfaction percentages

Add statistics only when real data exists.

---

# 32. University Logos

Do NOT display university logos solely because mentors studied or worked there unless legal use is appropriate.

Do NOT imply institutional partnership without an actual partnership.

Individual mentor profiles may factually state a mentor's education or affiliation when permission exists.

---

# 33. SEO

Primary concepts to target eventually include:

* Research mentorship for high school students
* High school research program
* Online research mentorship
* PhD mentor for high school students
* Independent research project
* Student research program

Content should be written naturally.

Do not keyword-stuff.

---

# 34. Technical Architecture

## Current Recommended Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Git
* GitHub
* Vercel

---

# 35. Current Application Architecture

## Phase 1 — Public Website

Build:

* Marketing website
* Program pages
* Mentor directory
* Project showcase
* Student application
* Mentor application

Initially, content may be stored as structured static data.

---

## Phase 2 — Backend

Potential stack:

* Supabase
* PostgreSQL

Add:

* Database
* Application storage
* Mentor records
* Student records
* Admin tools

---

## Phase 3 — Authentication

Potential user roles:

* Student
* Parent
* Mentor
* Admin

---

## Phase 4 — Student Portal

Potential features:

* Profile
* Application status
* Mentor match
* Project overview
* Milestones
* Session schedule
* Documents
* Messages

---

## Phase 5 — Mentor Portal

Potential features:

* Mentor profile
* Student assignments
* Availability
* Sessions
* Project milestones
* Documents
* Messages

---

## Phase 6 — Admin Portal

Potential features:

* Review student applications
* Review mentor applications
* Approve mentors
* Match students and mentors
* Manage programs
* Manage sessions
* Manage projects
* Manage payments
* View operational analytics

---

## Phase 7 — Payments

Potential integration:

* Stripe

Requirements TBD.

---

## Phase 8 — Scheduling

Potential features:

* Mentor availability
* Student availability
* Session booking
* Rescheduling
* Calendar synchronization
* Google Calendar integration
* Automated reminders

---

## Phase 9 — Communications

Potential features:

* Internal messaging
* Email notifications
* Session reminders
* Application updates
* Mentor matching notifications

---

# 36. Data Models — Future

Potential entities:

* User
* Student
* Parent
* Mentor
* Admin
* Application
* Program
* Enrollment
* Subject
* Expertise
* MentorMatch
* Project
* Session
* Milestone
* Message
* File
* Payment

Database design should be created when backend implementation begins.

---

# 37. Current MVP Priority

Priority 1:

* Excellent homepage

Priority 2:

* Clear program explanation

Priority 3:

* Student application flow

Priority 4:

* Mentor recruitment flow

Priority 5:

* Mentor showcase

Priority 6:

* Subject exploration

Priority 7:

* Student/project showcase

Do not overengineer dashboards before the public-facing business and application funnel are functional.

---

# 38. Content Management Philosophy

For the MVP, frequently edited content should be centralized.

Examples:

* Company details
* Navigation
* Programs
* Mentors
* Subjects
* Projects
* FAQs

Avoid embedding duplicate content throughout individual page components.

Eventually consider:

* Database
* Headless CMS
* Internal admin interface

Only add these when needed.

---

# 39. AI Coding Agent Instructions

When an AI coding agent reads this file:

1. Treat this as the product specification.
2. Do not blindly rewrite the entire project.
3. Inspect the existing implementation first.
4. Preserve unrelated working functionality.
5. Make incremental changes.
6. Use reusable components.
7. Keep data structured.
8. Maintain responsive design.
9. Do not invent company facts.
10. Do not invent testimonials.
11. Do not invent statistics.
12. Do not invent university partnerships.
13. Do not guarantee admissions or publication.
14. Run linting and type checking after significant changes.
15. Update README.md when setup instructions materially change.

---

# 40. Change Log

Use this section to record major product decisions.

## Initial Version

* Defined research mentorship business model.
* Defined core public website architecture.
* Defined student and mentor acquisition flows.
* Defined future student, mentor, and admin portal roadmap.
* Established policy against fabricated statistics, testimonials, and claims.

---

# 41. Open Business Decisions

The following decisions remain TBD:

* Final company name
* Logo
* Domain
* Color palette
* Exact program structure
* Number of mentor sessions
* Program duration
* Program pricing
* Mentor compensation
* Mentor vetting process
* Student age/grade eligibility
* Application review process
* Refund policy
* Rescheduling policy
* Safeguarding policy
* Privacy policy
* Terms of service
* Founder story
* Team information
* Company contact email
* Backend provider
* Payment workflow

Do not silently invent answers to these questions.

When necessary for UI development, clearly identify placeholders.

---

# 42. Immediate Development Goal

The immediate goal is to create a visually excellent, responsive MVP website that:

1. Clearly explains the research mentorship concept.
2. Establishes credibility without unsupported claims.
3. Allows students and parents to explore the offering.
4. Provides a clear student application journey.
5. Recruits potential mentors.
6. Provides an architecture for mentor profiles and student projects.
7. Can later evolve into a complete mentorship platform.

The first version should prioritize clarity, credibility, design quality, and conversion over complex backend functionality.
