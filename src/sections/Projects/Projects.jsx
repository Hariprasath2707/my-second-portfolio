import styles from './ProjectsStyles.module.css';
import zoho from '../../assets/zoho.jpg';
import bus from '../../assets/bus.jpg';
import bank from '../../assets/bank.jpg';
import college from '../../assets/college.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={zoho}
          link="https://zoho-clone-hari.netlify.app"
          h3="Zoho Clone"
          p="Front-End Website"
        />
        <ProjectCard
          src={bus}
          link="https://github.com/Hariprasath2707/Bus_Ticket_Booking.py.git"
          h3="Bus Ticket Booking"
          p="Python Program"
        />
        <ProjectCard
          src={bank}
          link="https://github.com/Hariprasath2707/Banking_project.py.git"
          h3="Banking Project"
          p="Python Program"
        />
        <ProjectCard
          src={college}
          link="https://github.com/Hariprasath2707/CollageDatabaseManagementSystem.sql.git"
          h3="Data Base"
          p="MySql Program"
        />
      </div>
    </section>
  );
}

export default Projects;
