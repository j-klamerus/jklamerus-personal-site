import Navbar from "./navbar"
import ProjectCard from "./ProjectCard"

function Projects(){
    return(
        <>
        <Navbar></Navbar>
            <ProjectCard
            image="https://github.com/yavuzceliker/sample-images/blob/main/docs/image-1034.jpg?raw=true"
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
            image="https://github.com/yavuzceliker/sample-images/blob/main/docs/image-1034.jpg?raw=true"
            name="IT Goals Dashboard | United Wholesale Mortgage"
            tags={["React", "C#", "MySQL", "Agile"]}
            description="Worked with a team of 4 students to design and develop and application that displayed metrics about company goals."
            link="https://github.com/your-repo"
            linkLabel="GitHub Repo"
            />
        </>
    )
}

export default Projects