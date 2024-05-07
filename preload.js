window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const ele = document.getElementById(selector);
        if (ele) ele.innerText = text;
    };

    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});
