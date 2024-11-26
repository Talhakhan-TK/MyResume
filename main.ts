document.getElementById("toggleSkillsButton")?.addEventListener("click", () => {  
    const skillsList = document.getElementById("skillsList");  
    if (skillsList) {  
        skillsList.style.display = skillsList.style.display === "none" ? "block" : "none";  
    }  
});  