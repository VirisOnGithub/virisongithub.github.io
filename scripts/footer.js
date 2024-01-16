const footer = document.querySelector('footer');
footer.innerHTML = `
    <footer>
        <button class="Btn" onclick="window.open('https://discord.gg/n9VYWwUURV','_blank')">
            <img src="/assets/discord.svg" alt="Discord logo" class="svgIcon" height="30px">
            <span class="text">Discord</span>
        </button>
        <button class="Btn" onclick="window.open('https://github.com/VirisOnGithub','_blank')">
            <img src="/assets/github.svg" alt="Github logo" class="svgIcon" height="30px">
            <span class="text">Github</span>
        </button>
        <button class="Btn" onclick="window.open('mailto:virisongithub@gmail.com','_blank')">
            <img src="/assets/mail.svg" alt="mail" class="svgIcon" height="30px">
            <span class="text">Mail</span>
        </button>
        <a href="https://wakatime.com/@Viris_"><img src="https://wakatime.com/badge/user/b72ca6a4-e042-401d-8f2e-b404eaf1c6e5.svg" alt="Total time coded since Jul 3 2023" /></a>
    </footer>
`;