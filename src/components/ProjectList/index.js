import react, { useState } from "react";

return (
    <section>
        <div className="flex-row">
            {projects.map((project, i) => (
                <Project project={project} />
            ))}
        </div>
    </section>
)