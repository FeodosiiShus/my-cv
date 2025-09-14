function calculateExperience(startYear, startMonth) {
    const start = new Date(startYear, startMonth - 1);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    let result =
        years > 0 ? years + " year" + (years > 1 ? "s" : "") : "";

    if (months > 0) {
        result +=
            (result !== "" ? " " : "") +
            months +
            " month" +
            (months > 1 ? "s" : "");
    }

    return result;
}

document.addEventListener("DOMContentLoaded", function () {
    const expElement = document.getElementById("experience-duration");
    if (expElement) {
        expElement.textContent = calculateExperience(2021, 10);
    }

    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});