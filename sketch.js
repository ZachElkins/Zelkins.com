let mode = "Dark";
let root;
let light = {
    text: "#222",
    bg: "#eaeaea",
    accent: "#49bce9"
};
let dark = {
    text: "#ddd",
    bg: "#333",
    accent: "#3f94b6"
};

$(() => {
    root = document.documentElement;
    $("#switch").click(switchColorMode);
    switchColorMode();
});

function switchColorMode() {
    $("#switch-label").html(mode);
    if (mode === "Dark") {
        root.style.setProperty('--text-color', dark.text)
        root.style.setProperty('--background-color', dark.bg)
        root.style.setProperty('--accent-color', dark.accent)
        mode = "Light";
    } else {
        root.style.setProperty('--text-color', light.text)
        root.style.setProperty('--background-color', light.bg)
        root.style.setProperty('--accent-color', light.accent)
        mode = "Dark";
    }
}
