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

        if (windowEl.classList.contains("window-url")) {
            let windowUrlEl;
            for (let child of windowEl.children) {
                if (child.classList.contains("window-head-url")) {
                    windowUrlEl = child;
                    break;
                }
            }

            if (windowUrlEl != null) {
                windowHeadEl.appendChild(windowUrlEl);
            }
        }

        const windowBodyEl = document.createElement("div");
        windowBodyEl.classList.add("window-body");
        const childList = []
        for (let child of windowEl.children) {
            if (!child.classList.contains("window-head-url")) {
                childList.push(child);
            }
        }

        for (let child of childList) {
            windowBodyEl.appendChild(child);
        }
        
        windowEl.prepend(windowHeadEl);
        windowEl.append(windowBodyEl);
    });
}

