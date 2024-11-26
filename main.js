var _a;
(_a = document.getElementById("toggleSkillsButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsList = document.getElementById("skillsList");
    if (skillsList) {
        skillsList.style.display = skillsList.style.display === "none" ? "block" : "none";
    }
});
