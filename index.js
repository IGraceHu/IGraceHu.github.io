window.onload = function () {
    const windowEls = Array.from(document.getElementsByClassName("window"));

    windowEls.forEach(windowEl => {
        const windowHeadEl = document.createElement("div");
        windowHeadEl.classList.add("window-head");
        const windowButtonsEl = document.createElement("div");
        windowButtonsEl.classList.add("window-buttons");
        const windowButton1El = document.createElement("div");
        const windowButton2El = document.createElement("div");
        const windowButton3El = document.createElement("div");
        windowButtonsEl.appendChild(windowButton1El);
        windowButtonsEl.appendChild(windowButton2El);
        windowButtonsEl.appendChild(windowButton3El);
        windowHeadEl.appendChild(windowButtonsEl);
        windowEl.prepend(windowHeadEl);
    });
}

