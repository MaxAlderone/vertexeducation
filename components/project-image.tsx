import Image from "next/image";

export function ProjectImage({project}: {project: {image: string; imageAlt: string; imageSource: string; imageCredit?: string; pairedImage?: {image: string; alt: string; source: string}}}) {
  if (project.pairedImage) return <div className="project-visual project-photo project-photo-pair">
    <div className="project-photo-half">
      <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 50vw, 25vw"/>
      <span className="project-photo-label">Black hole</span>
      <a className="project-photo-credit" href={project.imageSource} target="_blank" rel="noreferrer">{project.imageCredit} ↗</a>
    </div>
    <span className="project-photo-connection" role="img" aria-label="Black hole properties connected to acoustic wave models">↔</span>
    <div className="project-photo-half">
      <Image src={project.pairedImage.image} alt={project.pairedImage.alt} fill sizes="(max-width: 700px) 50vw, 25vw"/>
      <span className="project-photo-label">Water ripples</span>
      <a className="project-photo-credit" href={project.pairedImage.source} target="_blank" rel="noreferrer">Photo: Pexels ↗</a>
    </div>
  </div>;
  return <div className="project-visual project-photo">
    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"/>
    <a className="project-photo-credit" href={project.imageSource} target="_blank" rel="noreferrer" aria-label={`View photo source: ${project.imageAlt}`}>{project.imageCredit ?? "Photo: Pexels"} ↗</a>
  </div>;
}
