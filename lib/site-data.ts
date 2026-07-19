export const site = {
  name: "Vertex Education",
  shortName: "Vertex",
  tagline: "Turn curiosity into meaningful research.",
  description: "One-on-one research mentorship for curious middle and high school students.",
};

export const nav = [
  ["Programs", "/programs"], ["How it works", "/how-it-works"], ["Mentors", "/mentors"],
  ["Subjects", "/subjects"], ["Projects", "/projects"], ["About", "/about"],
] as const;

export const subjects = [
  {name:"Artificial Intelligence", group:"STEM", code:"AI", tone:"blue", desc:"Explore how machines learn, reason, and interact with people."},
  {name:"Computer Science", group:"STEM", code:"CS", tone:"violet", desc:"Design software, algorithms, and systems that solve real problems."},
  {name:"Physics", group:"STEM", code:"Φ", tone:"orange", desc:"Model the forces, matter, and patterns that shape our universe."},
  {name:"Mathematics", group:"STEM", code:"∑", tone:"green", desc:"Investigate patterns and build rigorous arguments from first principles."},
  {name:"Biology", group:"STEM", code:"BIO", tone:"green", desc:"Study living systems from cells and genes to populations."},
  {name:"Engineering", group:"STEM", code:"ENG", tone:"orange", desc:"Turn scientific ideas into practical designs and prototypes."},
  {name:"Economics", group:"Social Sciences", code:"EC", tone:"blue", desc:"Use data and theory to understand choices, markets, and policy."},
  {name:"Psychology", group:"Social Sciences", code:"Ψ", tone:"violet", desc:"Ask careful questions about cognition, behavior, and society."},
  {name:"Political Science", group:"Social Sciences", code:"PS", tone:"orange", desc:"Examine institutions, power, policy, and collective decisions."},
  {name:"History", group:"Humanities", code:"H", tone:"green", desc:"Use evidence to understand how people and ideas shaped the world."},
  {name:"Philosophy", group:"Humanities", code:"φ", tone:"blue", desc:"Develop clear arguments about knowledge, ethics, and meaning."},
  {name:"Finance", group:"Business", code:"FN", tone:"violet", desc:"Analyze decisions, markets, risk, and the value of resources."},
];

export const steps = [
  ["01","Tell us what interests you","Share your interests, background, and the questions you keep returning to."],
  ["02","Meet the right mentor","We identify an expert whose knowledge and approach fit your direction."],
  ["03","Shape a focused question","Turn a broad curiosity into a project that is original, rigorous, and feasible."],
  ["04","Research and build","Work independently between one-on-one sessions, with thoughtful feedback along the way."],
  ["05","Complete your project","Bring your thinking together in a paper, analysis, prototype, or other meaningful outcome."],
];

export const projects = [
  {title:"Can language models recognize misleading claims?",subject:"Artificial Intelligence",type:"Model + research report",tone:"blue",mark:"01"},
  {title:"Mapping access: transit and local economic activity",subject:"Economics",type:"Data analysis",tone:"orange",mark:"02"},
  {title:"What makes an orbit stable in a three-body system?",subject:"Physics",type:"Simulation",tone:"violet",mark:"03"},
  {title:"Modeling how infections move through a community",subject:"Biology",type:"Computational study",tone:"green",mark:"04"},
];

export const faqs = [
  ["Do I need previous research experience?","No. The program is designed to meet students where they are. Curiosity, commitment, and a willingness to learn matter more than prior research experience."],
  ["Can I choose my own topic?","Yes. Projects are student-driven. Your mentor helps turn your interests into a focused question that is appropriate for your background and the time available."],
  ["Is the program online?","Yes. Mentorship is designed for flexible online participation, so students and mentors can work together from different locations."],
  ["What can I create?","Possible outcomes include research papers, literature reviews, data analyses, software, mathematical investigations, prototypes, policy analyses, and interdisciplinary projects."],
  ["Will I publish a paper?","Publication is never guaranteed. The focus is on learning the research process and producing work that reflects your own thinking and effort."],
  ["How much does the program cost?","Program structure and pricing are being finalized. Contact us and we will share current information without any obligation."],
];
