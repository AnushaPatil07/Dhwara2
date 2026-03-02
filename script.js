function getParam(param){
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

/* =========================
   PROJECT DATABASE
========================= */

const projects = {
    mumbai: {
        working: [
            {id:"mumbai1", name:"Coastal Tower", image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"},
            {id:"mumbai2", name:"Metro Phase 3", image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e"}
        ],
        completed: [
            {id:"mumbai3", name:"Marine Plaza", image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7"}
        ]
    },

    delhi: {
        working: [
            {id:"delhi1", name:"Smart City Hub", image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e"}
        ],
        completed: [
            {id:"delhi2", name:"Commercial Tower", image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7"}
        ]
    }
};

/* =========================
   CITY PAGE LOGIC
========================= */

if(document.getElementById("cityTitle")){
    const city = getParam("city");
    const cityData = projects[city];

    if(cityData){
        document.getElementById("cityTitle").innerText = 
            city.charAt(0).toUpperCase() + city.slice(1) + " Projects";

        const workingContainer = document.getElementById("workingProjects");
        const completedContainer = document.getElementById("completedProjects");

        cityData.working.forEach(p=>{
            workingContainer.innerHTML += `
                <a href="project-details.html?id=${p.id}" class="small-card">
                    <img src="${p.image}">
                    <h4>${p.name}</h4>
                </a>
            `;
        });

        cityData.completed.forEach(p=>{
            completedContainer.innerHTML += `
                <a href="project-details.html?id=${p.id}" class="small-card">
                    <img src="${p.image}">
                    <h4>${p.name}</h4>
                </a>
            `;
        });
    }
}

/* =========================
   PROJECT DETAILS PAGE
========================= */

const projectDetailsData = {
    mumbai1:{
        title:"Coastal Tower",
        image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        desc:"Luxury high-rise residential tower in Mumbai.",
        achievements:["Completed in 20 months","Green Certified","Seismic Resistant"]
    },
    delhi1:{
        title:"Smart City Hub",
        image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        desc:"Modern infrastructure smart city project.",
        achievements:["Smart automation","LEED Certified"]
    }
};

if(document.getElementById("projectTitle")){
    const id = getParam("id");
    const project = projectDetailsData[id];

    if(project){
        document.getElementById("projectTitle").innerText = project.title;
        document.getElementById("projectImage").src = project.image;
        document.getElementById("projectDesc").innerText = project.desc;

        project.achievements.forEach(a=>{
            let li=document.createElement("li");
            li.innerText=a;
            document.getElementById("projectAchievements").appendChild(li);
        });
    }
}