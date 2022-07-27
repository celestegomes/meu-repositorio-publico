function mudaCor{
    const corpo = document.getElementById(all)
    all.classList.toggle("dark-mode");
    const foot = document.getElementById(foot)
    foot.classList.toggle("dark-mode");
    const button = document.getElementById(mode-selector)
    button.classList.toggle("dark-mode");
}
const botao = document.getElementById(mode-selector)
botao.addEventListener("click", mudaCor)
