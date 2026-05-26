import Navbar from "./navbar"
import ProjectCard from "./ProjectCard"
import styles from "./projects.module.css"

function Projects() {
    return (
        <>
            <Navbar />
            <div className={styles["projects-grid"]}>
                <ProjectCard
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861"
                    name="Personal HLTV Clone"
                    tags={["React", "EC2", "Javascript", "MongoDB"]}
                    description="Counter-Strike 2 in-game stats presented in the same way as HLTV.org"
                    link="cs2-hltv-stats.vercel.app"
                    linkLabel="Link"
                />
                <ProjectCard
                    image="https://github.com/j-klamerus/SWE426-LoLTracker/blob/develop/app/src/main/res/drawable/logo.webp?raw=true"
                    name="League of Legends Stat Tracker"
                    tags={["Kotlin", "Room", "Android SDK"]}
                    description="Stat tracking Android app made in Kotlin. Created as a term project in a group of 3 for SWE-426 at UM Flint."
                    link="https://github.com/j-klamerus/SWE426-LoLTracker"
                    linkLabel="GitHub Repo"
                />
                <ProjectCard
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogowik.com%2Fcontent%2Fuploads%2Fimages%2Freact.jpg&f=1&nofb=1&ipt=37177a07a956b509cbb1cb7322403ffbb640d01b32a7297643d139abd7278abf"
                    name="IT Goals Dashboard | United Wholesale Mortgage"
                    tags={["React", "C#", "MySQL", "Agile"]}
                    description="Worked with a team of 4 students to design and develop and application that displayed metrics about company goals."
                    link=""
                    linkLabel="GitHub Repo"
                />
                <ProjectCard
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogowik.com%2Fcontent%2Fuploads%2Fimages%2Freact.jpg&f=1&nofb=1&ipt=37177a07a956b509cbb1cb7322403ffbb640d01b32a7297643d139abd7278abf"
                    name="IT Goals Dashboard | United Wholesale Mortgage"
                    tags={["React", "C#", "MySQL", "Agile"]}
                    description="Worked with a team of 4 students to design and develop and application that displayed metrics about company goals."
                    //link=""
                    //linkLabel="GitHub Repo"
                />
            </div>
        </>
    );
}

export default Projects