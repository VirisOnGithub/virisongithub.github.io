document.querySelectorAll(".sheet").forEach((sheet) => {
    const semester = sheet.getAttribute("semester");
    sheet.innerHTML === "" ? sheet.style.display = "none" : sheet.setAttribute("onclick", `window.open('feuilles/S${semester}/${sheet.innerHTML}.pdf', '_blank')`);
});