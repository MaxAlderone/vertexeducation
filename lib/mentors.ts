export type Mentor = {
  id: string;
  name: string;
  role: string;
  institution?: string;
  qualifications: string[];
  photo: string | null;
  bio: string;
  interests: string[];
  education: string[];
  links: {label: string; href: string}[];
  publication: {title: string; href: string};
};

export const mentors: Mentor[] = [
  {
    id: "rifath-khan",
    name: "Rifath Khan",
    role: "Postdoctoral Researcher",
    institution: "Stanford University",
    qualifications: [
      "PhD · University of Cambridge, UK",
      "MASt, Applied Mathematics · University of Cambridge, UK",
    ],
    photo: "/mentors/rifath-khan-portrait.webp",
    bio: "Rifath studies quantum gravity, holography, and the black hole information paradox. His work explores how spacetime and gravitational physics emerge from quantum theories.",
    interests: ["Quantum gravity", "Holography", "Black hole physics"],
    education: [
      "PhD, University of Cambridge, UK",
      "MASt in Applied Mathematics, University of Cambridge, UK",
      "BS (Research) in Physics, Indian Institute of Science, Bangalore",
      "Doctoral research supervised by Professor Aron Wall",
    ],
    links: [
      {label: "INSPIRE-HEP", href: "https://inspirehep.net/authors/1701381"},
      {label: "LinkedIn", href: "https://www.linkedin.com/in/rifath-khan/"},
      {label: "Stanford profile", href: "https://physics.stanford.edu/people/rifath-khan"},
    ],
    publication: {
      title: "Cauchy Slice Holography: A New AdS/CFT Dictionary",
      href: "https://arxiv.org/abs/2204.00591",
    },
  },
  {
    id: "arvind-shekar",
    name: "Arvind Shekar",
    role: "Postdoctoral Researcher - GIST",
    qualifications: [
      "PhD · Southampton Theory Astrophysics and Gravity Research Center, UK",
      "MASt, Applied Mathematics · University of Cambridge, UK",
    ],
    photo: "/mentors/arvind-shekar.webp",
    bio: "Arvind studies quantum gravity, holography, entanglement and the black hole information paradox. His work explores the fundamental nature of spacetime, gravitational physics, and quantum theories.",
    interests: ["Quantum gravity", "Holography", "Entanglement", "Black hole physics"],
    education: [
      "PhD in Theoretical Physics, Southampton Theory Astrophysics and Gravity Research Center, UK",
      "MASt in Applied Mathematics, University of Cambridge, UK",
      "BS (Research) in Physics, Indian Institute of Science, Bangalore",
      "Doctoral research supervised by Professor Marika Taylor",
    ],
    links: [
      {label: "INSPIRE-HEP", href: "https://inspirehep.net/authors/1771816"},
      {label: "Southampton profile", href: "https://www.southampton.ac.uk/people/5yj5pt/mr-arvind-shekar"},
      {label: "Academic profile", href: "https://sites.google.com/view/arvindshekar/home"},
    ],
    publication: {
      title: "Replica analysis of entanglement properties",
      href: "https://inspirehep.net/literature/2838962",
    },
  },
];
