import react, { useState } from "react";

const ProjectList = ({}) =>\
    //insert list of projects. will need 6 with screenshots and gitHub/deploy links
    return (
        <section>
            <div className="flex-row">
                {projects.map((project, i) => (
                    <Project project={project} />
                ))}
            </div>
        </section>
)