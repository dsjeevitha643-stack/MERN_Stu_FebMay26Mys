function renderSearchProjects(){

    const projectsContainer = document.getElementById("project-filters");

    projectsContainer.innerHTML = "";

    projectList.forEach(function(project){

        const card = document.createElement("div");
        card.className = "p-8 text-center bg-red-100 rounded-3xl shadow-lg";

        const projectsName = document.createElement("h3");
        projectsName.className = "text-xl font-bold mb-2";
        projectsName.textContent = project.name;

        const projectsCategory = document.createElement("p");
        projectsCategory.className = "text-md font-bold";
        projectsCategory.textContent = project.category;

        const projectsDescription = document.createElement("p");
        projectsDescription.className = "text-sm";
        projectsDescription.textContent = project.description;

        const projectsTechnologies = document.createElement("p");
        projectsTechnologies.className = "text-sm bg-purple-200";
        projectsTechnologies.textContent = project.technologies;

        card.appendChild(projectsName);
        card.appendChild(projectsCategory);
        card.appendChild(projectsDescription);
        card.appendChild(projectsTechnologies);

        projectsContainer.appendChild(card);

    });

}