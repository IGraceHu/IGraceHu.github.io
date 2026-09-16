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

    $(".dark-section").each((i, darkSecEl) => {
        makeDark($(darkSecEl));
    });

    $(".window-container").each((i, windowContEl) => {
        createWindow($(windowContEl));
    });


    $(".acc-button").click(function(){
        $(this).toggleClass("active");
        let accBodyEl = $($(this).nextAll(".acc-body")[0]);
        if (accBodyEl.css("max-height") != "0px") {
            accBodyEl.css("max-height", "0px");
        } else {
            accBodyEl.css("max-height", accBodyEl.prop("scrollHeight") + "px");
        }
    });

    $("body").addClass("fade-in");
});

function makeDark(darkSecEl) {
    if (darkSecEl) {
        const cloudsTop = $(`<div class="dark-start">
                    <img class="dark-cloud-left" src="/assets/project-start-cloud-left.svg" />
                    <img class="dark-cloud-right" src="/assets/project-start-cloud-right.svg" />
                </div>`);
        const cloudsBottom = $(`<div class="dark-end">
                    <img class="dark-cloud-left" src="/assets/project-end-cloud-left.svg" />
                    <img class="dark-cloud-right" src="/assets/project-end-cloud-right.svg" />
                </div>`);
        const darkBodyEl = $('<div class="dark-body"></div>');
        console.log(darkSecEl);
        darkBodyEl.append(darkSecEl.contents());

        darkSecEl.append(cloudsTop, darkBodyEl, cloudsBottom);
    }
}

function createWindow(windowContElement) {
    if (windowContElement) {
        const windowHeadEl = $(`<div class="window-head">
                <div class="window-buttons">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>`);

        if (windowContElement.attr("url")) {
            windowHeadEl.append($('<div class="window-head-url"></div>').append(windowContElement.attr("url")));
        }

        // if (windowContElement.children(".window-url")) {
        //     const windowUrlEl = windowContElement.find(".window-head-url");
        //     if (windowUrlEl != null) {
        //         windowHeadEl.append(windowUrlEl);
        //     }
        // }

        const windowBodyEl = $('<div class="window-body"></div>');
        windowBodyEl.append(windowContElement.contents());

        const windowEl = $('<div class="window"></div>');
        windowEl.append(windowHeadEl, windowBodyEl);


        windowContElement.append(windowEl);
    }
}

function populateHeader(headerContainer, small = false) {
    if (headerContainer) {
        const headerText = headerContainer.children("h1")[0];

        const headerEl = $("<div></div");

        headerEl.append($(`<div id="header-clouds">
                <img class="header-cloud-left" src="/assets/header-cloud-left.svg" />
                <img class="header-cloud-right" src="/assets/header-cloud-right.svg" />
            </div>`))

        if (!small) {
            headerEl.attr("id", "header");
            headerEl.append($(`<div id="header-logo-wrapper">
                    <img id="header-logo" src="/assets/logo-light.svg" />
                </div>`));
        } else {
            headerEl.attr("id", "header-small");
        }

        const headerWindow = $(`<div id="header-window" class="window-container" url="${headerContainer.attr("url")}" ></div>`).append(headerText);
        headerEl.append($('<div id="header-window-wrapper"></div>').append(headerWindow));

        headerContainer.append(headerEl);
    }
}

function populateNav(navContainer) {
    if (navContainer) {        
        const navlist = {
            home: location.pathname.length == 1 ? '<a class="active">Home</a>' : `<a href="/">Home</a>`,
            projects: location.pathname.includes("projects.html") ? '<a class="active">Projects</a>' : `<a href="/projects.html">Projects</a>`,
            illustrations: location.pathname.includes("illustrations.html") ? '<a class="active">Illustrations</a>' : `<a href="/illustrations.html">Illustrations</a>`,
            resume: location.pathname.includes("resume.html") ? '<a class="active">Resume</a>' : `<a href="/resume.html">Resume</a>`,
        }

        const navLeft = $('<div id="nav-left"></div>').append(navlist.home, navlist.projects);
        const navRight = $('<div id="nav-right"></div>').append(navlist.illustrations, navlist.resume);

        const nav = $(`<div id="nav-content-container"></div>`).append(navLeft, $(`<img id="nav-img" src="/assets/logo-small.svg" />`), navRight);

        navContainer.append(nav);
    }
    

}

function populateFooter(footerContainer) {
    if (footerContainer) {
        footerContainer.html(`<section id="footer">
                <div id="footer-back-container">
                    <img id="footer-back-cloud-right" src="/assets/cloud-1.svg" />
                    <img id="footer-back-cloud-left" src="/assets/cloud-2.svg" />
                </div>
                <div id="footer-padder"></div>
                <div id="footer-window" class="window-container" url="https://www.igracehu.github.io/">
                    <div id="footer-content">
                        <div>
                            <h1>Let's create something beautiful together!</h1>
                            <div id="footer-buttons">
                                <a class="button out" href="https://www.linkedin.com/in/isabellehu06/"><img src="/assets/linkedin.png" /> LinkedIn <svg class="arrow-out" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.32 24.32"><path class="cls-1" d="M2,2h19.02c.72,0,1.3.58,1.3,1.3v19.02"/>   <line class="cls-1" x1="2.29" y1="22.03" x2="21.34" y2="2.98"/> </svg></a>
                                <a class="button out" href="https://github.com/IGraceHu"><img src="/assets/github.svg" />Github <svg class="arrow-out" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.32 24.32"><path class="cls-1" d="M2,2h19.02c.72,0,1.3.58,1.3,1.3v19.02"/>   <line class="cls-1" x1="2.29" y1="22.03" x2="21.34" y2="2.98"/> </svg></a>
                                <div class="button wide"><img src="/assets/mail.svg" /> igracehu@gmail.com</div>
                                <div class="button wide"><img class="phone" src="/assets/phone.svg" /> +1(408)641-1066</div>
                            </div>
                            <p id="footer-links">
                                <br/>
                                * <a href="/projects.html">Projects <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                                <br />
                                * <a href="/illustrations.html">Illustrations <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                                <br />
                                * <a href="/resume.html">Resume <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.98 16.34"> <line class="cls-1" x1="1" y1="8.17" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="1" x2="16.98" y2="8.17"/>   <line class="cls-1" x1="9.81" y1="15.34" x2="16.98" y2="8.17"/> </svg></a>
                            </p>
                        </div>
                        <div>
                            <div id="footer-image">
                                <img src="/assets/portrait-half.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-end-container">
                    <img id="footer-end" src="/assets/footer-end.svg" />
                    <div id="footer-end-end"></div>
                </div>
            </section>`);
    }
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
