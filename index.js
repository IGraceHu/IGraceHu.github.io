 $(document).ready(function(){
    const headerContainer = $("#header-container");
    console.log(headerContainer.attr("small"));
    if (headerContainer.attr("small") == "true") {
        populateHeader(headerContainer, true);
    } else {
        populateHeader(headerContainer);
    }
    populateNav($("#nav-container"));
    populateFooter($("#footer-container"));

    const windowEls = Array.from(document.getElementsByClassName("window"));
    windowEls.forEach((windowEl) => {
        createWindow(windowEl)
    });

    $("body").addClass("fade-in");
});

function createWindow(windowElement) {
    if (windowElement) {
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

        if (windowElement.classList.contains("window-url")) {
            let windowUrlEl;
            for (let child of windowElement.children) {
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
        const childList = [];
        for (let child of windowElement.children) {
            if (!child.classList.contains("window-head-url")) {
                childList.push(child);
            }
        }

        for (let child of childList) {
            windowBodyEl.appendChild(child);
        }

        windowElement.prepend(windowHeadEl);
        windowElement.append(windowBodyEl);
    }
}

function populateHeader(headerContainer, small = false) {
    if (headerContainer) {
        const depth = currentDepthCount();
        console.log(depth);

        const headerText = headerContainer.children("h1")[0];

        const headerEl = $("<div></div");

        headerEl.append($(`<div id="header-clouds">
                <img class="header-cloud-left" src="${depth}/assets/header-cloud-left.svg" />
                <img class="header-cloud-right" src="${depth}/assets/header-cloud-right.svg" />
            </div>`))

        if (!small) {
            headerEl.attr("id", "header");
            headerEl.append($(`<div id="header-logo-wrapper">
                    <img id="header-logo" src="${depth}/assets/logo-light.svg" />
                </div>`));
        } else {
            headerEl.attr("id", "header-small");
        }

        const headerWindow = $(`<div id="header-window" class="window"></div>`).append(headerText);
        headerEl.append($('<div id="header-window-wrapper"></div>').append(headerWindow));

        headerContainer.append(headerEl);
    }
}

function populateNav(navContainer) {
    if (navContainer) {
        const depth = currentDepthCount();
        
        const navlist = {
            home: location.pathname.length == 1 ? '<a class="active">Home</a>' : `<a href="${depth}/">Home</a>`,
            projects: location.pathname.includes("projects.html") ? '<a class="active">Projects</a>' : `<a href="${depth}/projects.html">Projects</a>`,
            illustrations: location.pathname.includes("illustrations.html") ? '<a class="active">Illustrations</a>' : `<a href="${depth}/illustrations.html">Illustrations</a>`,
            resume: location.pathname.includes("resume.html") ? '<a class="active">Resume</a>' : `<a href="${depth}/resume.html">Resume</a>`,
        }

        const navLeft = $('<div id="nav-left"></div>').append(navlist.home, navlist.projects);
        const navRight = $('<div id="nav-right"></div>').append(navlist.illustrations, navlist.resume);

        const nav = $(`<div id="nav-content-container"></div>`).append(navLeft, $(`<img id="nav-img" src="${depth}/assets/logo-small.svg" />`), navRight);

        navContainer.append(nav);
    }
    

}

function populateFooter(footerContainer) {
    if (footerContainer) {
        const depth = currentDepthCount();
        footerContainer.html(`<section id="footer">
                <div id="footer-back-container">
                    <img id="footer-back-cloud-right" src="${depth}/assets/cloud-1.svg" />
                    <img id="footer-back-cloud-left" src="${depth}/assets/cloud-2.svg" />
                    <span>
                        <img class="footer-light-clouds" src="${depth}/assets/cloud-light-1.svg" />
                        <img class="footer-light-clouds" src="${depth}/assets/cloud-light-2.svg" />
                        <img class="footer-light-clouds" src="${depth}/assets/cloud-light-3.svg" />
                        <img class="footer-light-clouds" src="${depth}/assets/cloud-light-4.svg" />
                    </span>
                </div>
                <div id="footer-padder"></div>
                <div id="footer-window" class="window window-url">
                    <div class="window-head-url">
                        https://www.igracehu.github.io/
                    </div>
                    <div id="footer-content">
                        <div>
                            <h1>Let's create something beautiful together!</h1>
                            <div id="footer-buttons">
                                <a class="button out" href="https://www.linkedin.com/in/isabellehu06/"><img src="${depth}/assets/linkedin.png" /> LinkedIn <svg class="arrow-out" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.32 24.32"><path class="cls-1" d="M2,2h19.02c.72,0,1.3.58,1.3,1.3v19.02"/>   <line class="cls-1" x1="2.29" y1="22.03" x2="21.34" y2="2.98"/> </svg></a>
                                <a class="button out" href="https://github.com/IGraceHu"><img src="${depth}/assets/github.svg" />Github <svg class="arrow-out" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.32 24.32"><path class="cls-1" d="M2,2h19.02c.72,0,1.3.58,1.3,1.3v19.02"/>   <line class="cls-1" x1="2.29" y1="22.03" x2="21.34" y2="2.98"/> </svg></a>
                                <div class="button wide"><img src="${depth}/assets/mail.svg" /> igracehu@gmail.com</div>
                                <div class="button wide"><img class="phone" src="${depth}/assets/phone.svg" /> +1(408)641-1066</div>
                            </div>
                            <p id="footer-links">
                                * <a href="${depth}/projects.html">Projects <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                                <br />
                                * <a href="${depth}/illustrations.html">Illustrations <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                                <br />
                                * <a href="${depth}/resume.html">Resume <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                            </p>
                        </div>
                        <div>
                            <div id="footer-image">
                                <img src="${depth}/assets/portrait-half.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-end-container">
                    <img id="footer-end" src="${depth}/assets/footer-end.svg" />
                    <div id="footer-end-end"></div>
                </div>
            </section>`);
    }
}

function currentDepthCount() {
    let i = 0;
    for (let k = 0; k < location.pathname; k++) {
        if (location.pathname[k] == "/") {
            i++;
        }
    }
    return ".".repeat(i);
}

document.addEventListener("DOMContentLoaded", function () {
    let anchors = document.getElementsByTagName("a");

    for (let i = 0; i < anchors.length; i += 1) {
        if (
            anchors[i].hostname !== window.location.hostname ||
            anchors[i].pathname === window.location.pathname
        ) {
            continue;
        }
        anchors[i].addEventListener("click", function (event) {
            const bodyEl = document.getElementsByTagName("body")[0],
                anchor = event.currentTarget;

            var listener = function () {
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

window.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
        return;
    }

    const bodyEl = document.getElementsByTagName("body")[0];
    bodyEl.classList.remove("fade-in");
});
