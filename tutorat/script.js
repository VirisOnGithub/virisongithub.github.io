document.querySelectorAll(".sheet").forEach((sheet) => {
    const semester = sheet.getAttribute("semester");
    sheet.setAttribute("onclick", `window.open('feuilles/S${semester}/${sheet.innerHTML}.pdf', '_blank')`);
});