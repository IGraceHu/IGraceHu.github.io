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

    const bodyEl = document.getElementsByTagName("body")[0];
    bodyEl.classList.add("fade-in");
}


document.addEventListener('DOMContentLoaded', function() {
    let anchors = document.getElementsByTagName("a");
    
    for (let i = 0; i < anchors.length; i += 1) {
        if (anchors[i].hostname !== window.location.hostname ||
            anchors[i].pathname === window.location.pathname) {
            continue;
        }
        anchors[i].addEventListener("click", function(event) {
            const bodyEl = document.getElementsByTagName("body")[0],
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                bodyEl.removeEventListener("animationend", listener);
            };
            // Listen for when fade animatino ends, then navigate to href
            bodyEl.addEventListener("animationend", listener);
            
            event.preventDefault();
            bodyEl.classList.add("fade-out");
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
        return;
    }

    const bodyEl = document.getElementsByTagName("body")[0];
    bodyEl.classList.remove('fade-in');
});