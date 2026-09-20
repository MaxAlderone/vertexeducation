export const site = {
  name: "Vertex Education",
  shortName: "Vertex",
  tagline: "Turn curiosity into meaningful research.",
  description: "One-on-one research mentorship for curious middle and high school students.",
};

export const nav = [
  ["How it works", "/how-it-works"], ["Why us", "/why-us"], ["About", "/about"],
  ["Mentors", "/mentors"], ["Programs", "/programs"], ["Subjects", "/subjects"], ["Projects", "/projects"], ["For Parents", "/for-parents"],
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
  ["02","Work with a mentor from top universities in the world","We pair you with an expert researcher from a world-leading institution, such as Cambridge, Oxford, Stanford, or an Ivy League university, whose knowledge and approach fit your direction."],
  ["03","Shape a focused question","The researcher will turn your broad curiosity into a well-defined project that is original, rigorous, and feasible."],
  ["04","Research and build","Work independently between one-on-one sessions with a world-class researcher, receiving thoughtful feedback along the way."],
  ["05","Produce a tangible research outcome","Bring your thinking together in a paper, analysis, prototype, or other meaningful outcome you can showcase."],
  ["06","Present at a research symposium","Present your research at a symposium involving world-leading researchers, share your findings, and build confidence in communicating your work."],
  ["07","University application support","The researcher can provide recommendation letters reflecting your research to support your applications to leading universities worldwide."],
];

export const projects = [
  {title:"Understanding black hole properties using acoustic models",subject:"Physics",type:"Acoustic modeling + theoretical analysis",tone:"violet",mark:"01",image:"/projects/m87-black-hole.webp",imageAlt:"Event Horizon Telescope image of the bright ring and dark shadow of the M87 black hole.",imageSource:"https://www.eso.org/public/images/eso1907a/",imageCredit:"EHT Collaboration",pairedImage:{image:"/projects/acoustic-waves.webp",alt:"Concentric water ripples illustrating wave behavior.",source:"https://www.pexels.com/photo/ripples-on-the-surface-of-the-water-9667518/"}},
  {title:"Can language models recognize misleading claims?",subject:"Artificial Intelligence",type:"Model + research report",tone:"blue",mark:"02",image:"/projects/language-models.webp",imageAlt:"Programming code on a laptop screen.",imageSource:"https://www.pexels.com/photo/a-laptop-screen-with-text-4439901/"},
  {title:"Mapping access: transit and local economic activity",subject:"Economics",type:"Data analysis",tone:"orange",mark:"03",image:"/projects/urban-transit.webp",imageAlt:"Aerial photograph of a train passing between city buildings.",imageSource:"https://www.pexels.com/photo/aerial-view-of-urban-train-passing-through-cityscape-29044600/"},
  {title:"Modeling how infections move through a community",subject:"Biology",type:"Computational study",tone:"green",mark:"04",image:"/projects/infection-research.webp",imageAlt:"A microscope and glassware on a laboratory bench.",imageSource:"https://www.pexels.com/photo/a-microscope-and-laboratory-equipments-8325755/"},
];

export const faqs = [
  ["Do I need previous research experience?","No. The program is designed to meet students where they are. Curiosity, commitment, and a willingness to learn matter more than prior research experience."],
  ["Can I choose my own topic?","Yes. Projects are student-driven. Your mentor helps turn your interests into a focused question that is appropriate for your background and the time available."],
  ["Is the program online?","Yes. Mentorship is designed for flexible online participation, so students and mentors can work together from different locations."],
  ["What can I create?","Possible outcomes include research papers, literature reviews, data analyses, software, mathematical investigations, prototypes, policy analyses, and interdisciplinary projects."],
  ["Will I publish a paper?","Publication is never guaranteed. The focus is on learning the research process and producing work that reflects your own thinking and effort."],
  ["How much does the program cost?","Program structure and pricing are being finalized. Contact us and we will share current information without any obligation."],
];
