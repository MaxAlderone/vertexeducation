export const grades = ["6th grade", "7th grade", "8th grade", "9th grade", "10th grade", "11th grade", "12th grade", "Other"];
export const subjects = ["Artificial Intelligence", "Computer Science", "Natural Sciences", "Mathematics", "Engineering", "Social Sciences", "Humanities", "Business", "Other / interdisciplinary"];

export type ApplicationRecord = {
  id: string;
  kind: "student" | "mentor";
  first_name: string;
  last_name: string;
  email: string;
  country: string | null;
  school: string | null;
  grade: string | null;
  professional_role: string | null;
  institution: string | null;
  degree: string | null;
  subject: string;
  interests: string;
  timezone: string;
  availability: string;
  goals: string;
};

// Whitelist fields: clients cannot choose a status, timestamp, or database columns.
export function parseApplication(input: unknown): ApplicationRecord | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const data = input as Record<string, unknown>;
  const read = (name: string, limit: number, optional = false) => {
    const value = data[name];
    if (optional && value === undefined) return "";
    if (typeof value !== "string") throw new Error("Invalid field");
    const trimmed = value.trim();
    if ((!optional && !trimmed) || trimmed.length > limit || trimmed.includes("\0")) throw new Error("Invalid field");
    return trimmed;
  };
  try {
    const id = read("submissionId", 36);
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) return null;
    if (data.kind !== "student" && data.kind !== "mentor") return null;
    const mentor = data.kind === "mentor";
    const email = read("email", 254).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
    const subject = read("subject", 100);
    if (!subjects.includes(subject)) return null;
    const grade = mentor ? null : read("grade", 30);
    if (grade !== null && !grades.includes(grade)) return null;
    return {
      id, kind: data.kind,
      first_name: read("firstName", 100), last_name: read("lastName", 100), email,
      country: mentor ? null : read("context", 200),
      school: mentor ? null : read("school", 200), grade,
      professional_role: mentor ? read("context", 200) : null,
      institution: mentor ? read("institution", 200) : null,
      degree: mentor ? read("degree", 200) : null,
      subject, interests: read("interests", 5000),
      timezone: read("timezone", 100), availability: read("availability", 500),
      goals: read("goals", 3000, true),
    };
  } catch {
    return null;
  }
}
