
INITDATA = {
    name: "My World",
    currentTime: 0,
    timelines: [
        {
            index: 0,
            name: "Timeline 1",
            abbr: "T1",
            start: 0,
            end: 1000,
            color: "#401075",
            events: []
        }
    ]
}

const endTime = 100;
let timeInterval = 10;
let timeSize = 10;

class World {
    constructor(data) {
        this.tlContainerEl = $("#timelines-container");
        this.mkContainerEl = $("#markings-container");
        this.evContainerEl = $("#events-container");

        this.tlNameContainerEl = $("#timeline-names-container");
        this.currentTimeEl = $("#current-time");
        this.currentLineEl = $("#current-line");

        $("#current-time-button").on("click", () => this.scrollToCurrentTime());
        $("#edit-world-button").on("click", () => this.editWorldInit());
        $("#create-timeline-button").on("click", () => this.createTimelineInit());
        $("#create-event-button").on("click", () => this.createEventInit());
        $("#save-data-button").on("click", () => this.save());
        $("#upload-data-input").on("change", (e) => this.upload(e));
        $("#clear-data-button").on("click", () => this.clearInit());
        $("#time-interval").on("change", (e) => {
            this.setTimeInterval(e.target.value);
            this.drawTimelines();
            this.drawCurrentTime();
        });

        this.loadData(data);
    }

    loadData(data) {
        console.log(data)
        this.name = data.name;
        this.currentTime = data.currentTime;

        this.saved = true;

        this.timelines = data.timelines.map(timelineData => new Timeline(timelineData, this));
        $("#world-name-container").text(this.name);

        this.setTimeInterval(document.getElementById("time-interval").value);

        this.drawTimelines();
        this.drawCurrentTime();
        this.saveToLocalStorage();
    }

    setTimeInterval(interval) {
        timeInterval = parseInt(interval);
        timeSize = 100 / timeInterval;
    }

    drawCurrentTime() {
        this.currentTimeEl.empty();
        this.currentLineEl.empty();

        let text = "";
        for (let timeline of this.timelines) {
            const tlTime = this.currentTime - timeline.start;
            text += `${tlTime} ${timeline.abbr} | `;
            this.currentLineEl.append($(`<div>${tlTime} ${timeline.abbr}</div>`))
        }
        this.currentTimeEl.text(text.slice(0, text.length - 3));
        this.currentLineEl.css("top", `${this.currentTime * timeSize}px`);

    }

    scrollToCurrentTime() {
        document.getElementById("current-line").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    toggleMarkLine(timelineIndex, ...times) {
        for (let time of times) {
            time = time + this.timelines[timelineIndex].start;

            if ($("#mark-line-" + time).length > 0) {
                $("#mark-line-" + time).remove();
            } else {
                const eventLine = $(`<div id="mark-line-${time}" class="mark-line"></div>`);
                eventLine.css("top", `${time * timeSize}px`);
                for (let timeline of this.timelines) {
                    const tlTime = time - timeline.start;
                    eventLine.append($(`<div>${tlTime} ${timeline.abbr}</div>`))
                }
                this.mkContainerEl.append(eventLine);
            }
        }
    }

    removeMarkLines(timelineIndex, times) {
        for (let time of times) {
            time = time + this.timelines[timelineIndex].start;

            if ($("#mark-line-" + time).length > 0) {
                $("#mark-line-" + time).remove();
            }
        }
    }

    removeAllMarkLines() {
        $(".mark-line").remove();
    }

    toJSONString() {
        return JSON.stringify({
            name: this.name,
            currentTime: this.currentTime,
            timelines: this.timelines.map(timeline => ({
                index: timeline.index,
                name: timeline.name,
                abbr: timeline.abbr,
                start: timeline.start,
                end: timeline.end,
                color: timeline.color,
                events: timeline.events.map(event => ({
                    timelineIndex: event.timelineIndex,
                    index: event.index,
                    name: event.name,
                    start: event.start,
                    end: event.end,
                    color: event.color,
                    recurring: event.recurring,
                    recurringInterval: event.recurringInterval,
                    recurringEndTime: event.recurringEndTime,
                    showRecurCount: event.showRecurCount,
                    benchmark: event.benchmark
                })),
                color: timeline.color
            }))
        }, null, 2)
    }

    saveToLocalStorage() {
        localStorage.setItem("worldData", this.toJSONString());

        this.saved = false;
        $("#save-data-button").addClass("not-saved");
    }

    save() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.toJSONString());
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "timelines.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();

        this.saved = true;
        $("#save-data-button").removeClass("not-saved");
    }

    upload(e) {
        if (e.target.files.length > 0) {
            console.log(e.target.files[0])
            
            this.reader(e.target.files[0], (err, result) => {
                if (!err) {
                    const data = JSON.parse(result);
                    this.loadData(data);
                }
            })
        }
    }

    reader(file, callback) {
        const fr = new FileReader();
        fr.onload = () => callback(null, fr.result);
        fr.onerror = (err) => callback(err);
        fr.readAsText(file);
    }

    clearInit() {
        const msg = $('<div>Clear world data?</div>')
        const popupEl = drawPopup("clear", msg, () => this.clear(), null, "Clear");
        showPopup(popupEl);
    }

    clear() {
        closePopup("popup-clear");
        this.loadData(INITDATA);
    }

    editWorldInit() {
        const worldForm = $(`
            <form id="world-form">
                <div class="span">
                    <label for="world-name">World Name:</label>
                    <br />
                    <input type="text" id="world-name" name="world-name" value="${this.name}">
                </div>

                <div class="span">
                    <label for="current-time">Current Time:</label>
                    <br />
                    <input type="number" id="current-time" name="current-time" min="0" value="${this.currentTime}" style="width: auto;">
                    <select id="current-time-tl" name="current-time-tl"></select>
                </div>

                <div class="error-messages span"></div>
            </form>
        `);

        // const selectTl = $("#current-time-tl", worldForm);
        // console.log(selectTl);
        for (let timeline of this.timelines) {
            worldForm.find("#current-time-tl").append($(`<option value="${timeline.index}">${timeline.abbr}</option>`))
            // console.log(selectTl);
        }

        const popupEl = drawPopup("world", worldForm, () => this.editWorldRecieve(worldForm));
        showPopup(popupEl);
    }

    editWorldRecieve(worldForm) {
        console.log(worldForm);
        
        const formData = new FormData(worldForm[0]);
        $(".error-messages", worldForm).empty();

        let valid = true;
        if (!formData.get("world-name")) {
            valid = false;
            $(".error-messages", timelineForm).append("<p>World name is required.</p>");
        }
        if (!formData.get("current-time")) {
            valid = false;
            $(".error-messages", timelineForm).append("<p>Current Time is required.</p>");
        }

        if (valid) {
            this.name = formData.get("world-name");
            this.currentTime = parseInt(formData.get("current-time")) + this.timelines[parseInt(formData.get("current-time-tl"))].start;
            this.drawTimelines();
            this.drawCurrentTime();
            $("#world-name-container").text(this.name);
            this.saveToLocalStorage();

            closePopup("popup-world")
        }
    }



    
    drawTimelines() {
        this.tlContainerEl.empty();
        this.mkContainerEl.empty();
        this.evContainerEl.empty();
        this.tlNameContainerEl.empty();

        this.timelines.forEach((timeline, idx) => {
            this.tlContainerEl.append(timeline.getTimelineEl());
            this.drawEvents(idx);

            const nameEl = $(`<span class="timeline-name">${timeline.name} (${timeline.abbr})</span>`);
            const editEl = $(`<span class="timeline-edit edit-button">Edit  <i class="bi bi-pencil-fill"></i></span>`);
            editEl.on("click", () => timeline.editTimelineInit());
            this.tlNameContainerEl.append($("<div class='timeline-name-container'></div").append(nameEl, editEl));
        });
    }

    drawEvents(tlIndex) {
        console.log("draw");
        $(`.benchmark-${this.timelines[tlIndex].abbr}`).remove();

        const eventDetailEls = this.timelines[tlIndex].getEventsEl();
        console.log(eventDetailEls);
        const elId = eventDetailEls.eventContainerEl.attr("id");
        
        if ($(`#${elId}`, this.evContainerEl).length > 0) {
            $(`#${elId}`).replaceWith(eventDetailEls.eventContainerEl);
        } else {
            this.evContainerEl.append(eventDetailEls.eventContainerEl);
        }

        this.mkContainerEl.append(eventDetailEls.benchmarkEls);
    }







    // TIMELINE MANAGEMENT
    createTimeline(timelineData) {
        const newTimeline = new Timeline(timelineData, this);
        this.timelines.push(newTimeline);
        this.saveToLocalStorage();
        this.drawTimelines();
    }

    deleteTimeline(timelineIndex) {
        console.log(timelineIndex);
        
        if (timelineIndex > 0) {
            this.removeAllMarkLines();

            this.timelines.splice(timelineIndex, 1);
            this.saveToLocalStorage();
            this.drawTimelines();
        }
    }

    createTimelineInit() {
        const timelineForm = $(`
            <form id="timeline-form">
                <input type="hidden" id="timeline-idx" name="timeline-idx" value="${this.timelines.length}">

                <div>
                    <label for="timeline-name">Timeline Name:</label>
                    <br/>
                    <input type="text" id="timeline-name" name="timeline-name">
                </div>

                <div>
                    <label for="timeline-abbr">Timeline Abbreviation:</label>
                    <br/>
                    <input type="text" id="timeline-abbr" name="timeline-abbr">
                </div>

                <div>
                    <label for="timeline-start">Start Year (Relative to ${this.timelines[0].name}):</label>
                    <br/>
                    <input type="number" id="timeline-start" name="timeline-start" min="0" value="0">
                </div>

                <div>
                    <label for="timeline-end">End Year (Relative to ${this.timelines[0].name}):</label>
                    <br/>
                    <input type="number" id="timeline-end" name="timeline-end" min="0">
                </div>

                <div class="color-form">
                    <label for="timeline-color">Event Colors: </label> <input type="color" id="timeline-color" name="timeline-color" value="#401075">
                </div>

                <div class="error-messages span"></div>
            </form>
        `);

        const popupEl = drawPopup("timeline", timelineForm, () => this.createTimelineRecieve(timelineForm));
        showPopup(popupEl);
    }

    createTimelineRecieve(timelineForm) {
        console.log(timelineForm);
        const timelineData = this.validateTimelineForm(timelineForm);

        if (timelineData) {
            this.createTimeline(timelineData);
            closePopup("popup-timeline");
        }
    }

    validateTimelineForm(timelineForm) {
        const formData = new FormData(timelineForm[0]);
        console.log(formData)
        $(".error-messages", timelineForm).empty();

        let valid = true;
        if (!formData.get("timeline-name")) {
            valid = false;
            $(".error-messages", timelineForm).append("<p>Timeline name is required.</p>");
        }
        if (!formData.get("timeline-abbr")) {
            valid = false;
            $(".error-messages", timelineForm).append("<p>Timeline abbreviation is required.</p>");
        }
        if (!formData.get("timeline-start") && (parseInt(formData.get("timeline-idx")) > 0)) {
            valid = false;
            $(".error-messages", timelineForm).append("<p>Timeline start is required.</p>");
        }
        if (formData.get("timeline-end")) {
            if (parseInt(formData.get("timeline-end")) < parseInt(formData.get("timeline-start"))) {
                valid = false;
                $(".error-messages", timelineForm).append("<p>Timeline end time must be after start time.</p>");
            }
        }

        if (valid) {
            const timelineData = {
                index: parseInt(formData.get("timeline-idx")),
                name: formData.get("timeline-name"),
                abbr: formData.get("timeline-abbr"),
                start: formData.get("timeline-start") ? parseInt(formData.get("timeline-start")) : 0,
                end: formData.get("timeline-end") ? parseInt(formData.get("timeline-end")) : this.timelines[0].end,
                color: formData.get("timeline-color")
            }
            return timelineData;
        }

        return valid;
    }


    // EVENT MANAGEMENT
    createEventInit() {
        const eventForm = $(`
            <form id="event-form">
                <div class="span">
                    <label for="event-name">Event Name:</label>
                    <br />
                    <input type="text" id="event-name" name="event-name">
                </div>

                <div>
                    <label for="event-start-time">Event Start Time:</label>
                    <br />
                    <input type="number" id="event-start-time" name="event-start-time" min="0" value="0">
                </div>

                <div>
                    <label for="event-end-time">Event End Time:</label>
                    <br />
                    <input type="number" id="event-end-time" name="event-end-time" min="0">
                </div>

                <div class="color-form">
                    <label for="event-color">Event Color: </label> <input type="color" id="event-color" name="event-color" value="#401075"> <input type="button" id="event-color-reset" name="event-color-reset" value="Reset" class="button">
                </div>

                <label for="recurring" class="span">
                    <input type="checkbox" id="recurring" name="recurring" onchange="updateRecurring(this.checked)">
                    Recurring Event?
                </label>
                
                <div id="recurring-options" class="span"></div>

                <label for="benchmark" class="span">
                    <input type="checkbox" id="benchmark" name="benchmark">
                    Benchmark Event?
                </label>

                <div class="error-messages span"></div>
            </form>
        `);
        const timelineSelectInput = $(`<select id="timeline-select" name="timeline-select"></select>`);
        for (let timeline of this.timelines) {
            const optionEl = $(`<option value="${timeline.index}">${timeline.name}</option>`);
            timelineSelectInput.append(optionEl);
        }

        timelineSelectInput.on("change", (e) => {
            $("#event-color", eventForm).val(this.timelines[e.target.value].color);
        })

        $("#event-color-reset", eventForm).on("click", (e) => {
            const idx = $("#timeline-select", eventForm).val();
            $("#event-color", eventForm).val(this.timelines[idx].color);
        })

        const selectContainerEl = $("<div></div>").append("<label for='timeline-select'>Select Timeline: </label>", timelineSelectInput);
        eventForm.prepend(selectContainerEl);


        const popupEl = drawPopup("event", eventForm, () => this.createEventRecieve(eventForm,));
        showPopup(popupEl);
    }

    createEventRecieve(eventForm) {
        console.log(eventForm);
        const eventData = this.validateEventForm(eventForm);        

        if (eventData) { 
            eventData.index = this.timelines[eventData.timelineIndex].length;
            this.timelines[eventData.timelineIndex].createEvent(eventData);
            closePopup("popup-event");
        }
    }

    validateEventForm(eventForm) {
        const formData = new FormData(eventForm[0]);
        $(".error-messages", eventForm).empty();

        let valid = true;
        if (!formData.get("event-name")) {
            valid = false;
            $(".error-messages", eventForm).append("<p>Event name is required.</p>");
        }
        if (!formData.get("event-start-time")) {
            valid = false;
            $(".error-messages", eventForm).append("<p>Event start time is required.</p>");
        }
        if (formData.get("event-end-time")) {
            if (parseInt(formData.get("event-end-time")) < parseInt(formData.get("event-start-time"))) {
                valid = false;
                $(".error-messages", eventForm).append("<p>Event end time must be after start time.</p>");
            }
            if (parseInt(formData.get("event-end-time")) > this.timelines[formData.get("timeline-select")].end) {
                valid = false;
                $(".error-messages", eventForm).append("<p>Event end time must be within the timeline's range.</p>");
            }
        }
        if (formData.get("recurring")) {
            if (formData.get("recurring-end-time")) {
                if (parseInt(formData.get("recurring-end-time")) <= parseInt(formData.get("event-start-time"))) {
                    valid = false;
                    $(".error-messages", eventForm).append("<p>Recurring end time must be after the event start time.</p>");
                }
                if (parseInt(formData.get("recurring-end-time")) > this.timelines[formData.get("timeline-select")].end) {
                    valid = false;
                    $(".error-messages", eventForm).append("<p>Recurring end time must be within the timeline's range.</p>");
                }
            }
        }

        if (valid) {
            const eventData = {
                timelineIndex: parseInt(formData.get("timeline-select")),
                name: formData.get("event-name"),
                start: parseInt(formData.get("event-start-time")),
                end: formData.get("event-end-time") ? parseInt(formData.get("event-end-time")) : null,
                color: formData.get("event-color"),
                recurring: formData.get("recurring") ? true : false,
                recurringInterval: formData.get("recurring-interval") ? parseInt(formData.get("recurring-interval")) : null,
                recurringEndTime: formData.get("recurring-end-time") ? parseInt(formData.get("recurring-end-time")) : this.timelines[formData.get("timeline-select")].end,
                showRecurCount: formData.get("recurring-show-count") ? true : false,
                benchmark: formData.get("benchmark") ? true : false
            }
            return eventData;
        }

        return valid;
    }

}


class Timeline {
    constructor(data, world) {
        this.index = data.index;
        this.name = data.name;
        this.abbr = data.abbr;
        this.start = data.start;
        this.end = data.end;
        this.color = data.color;

        this.world = world;

        this.events = data.events ? data.events.map(eventData => new Event(eventData, this, this.world)) : [];
        // this.color = data.color;

        this.tlId = `timeline-${this.abbr}`;
        this.evId = `events-${this.abbr}`;

        console.log(this);


        this.sortEvents();
    }

    getTimelineEl() {
        const timelineContainerEl = $(`<div id='${this.tlId}' class='timeline-container'></div>`);
        timelineContainerEl.css("height", `${(this.end - this.start) * timeSize}px`)
        timelineContainerEl.css("top", `${this.start * timeSize}px`);
        
        const tlLineEl = $("<div class='tl-line'></div>");
        timelineContainerEl.append(tlLineEl);

        for (let i = 0; i <= this.end - this.start; i += timeInterval) {
            const tlTickEl = $(`<div class='tl-tick'><div class='tl-label'>${i} ${this.abbr}</div><div class='tl-dash'></div></div>`);
            tlTickEl.css("top", `${(i) * timeSize}px`);
            tlLineEl.append(tlTickEl);
        }

        return timelineContainerEl;
    }

    editTimeline(timelineData) {
        console.log(timelineData);
        this.name = timelineData.name;
        this.abbr = timelineData.abbr;
        this.start = timelineData.start;
        this.end = timelineData.end;

        this.events.map((event) => {
            if (event.color == this.color) {
                event.color = timelineData.color;
            }
        });

        this.color = timelineData.color;

        

        this.world.drawTimelines();
        this.world.saveToLocalStorage();
    }

    editTimelineInit() {
        const timelineForm = $(`
            <form id="timeline-form">
                <input type="hidden" id="timeline-idx" name="timeline-idx" value="${this.index}">

                <div>
                    <label for="timeline-name">Timeline Name:</label>
                    <br/>
                    <input type="text" id="timeline-name" name="timeline-name" value="${this.name}">
                </div>

                <div>
                    <label for="timeline-abbr">Timeline Abbreviation:</label>
                    <br/>
                    <input type="text" id="timeline-abbr" name="timeline-abbr" value="${this.abbr}">
                </div>

                <div>
                    <label for="timeline-start">Start Year (Relative to ${this.world.timelines[0].name}):</label>
                    <br/>
                    <input type="number" id="timeline-start" name="timeline-start" min="0" value="${this.start}" ${(this.index == 0) && "disabled"}>
                </div>

                <div>
                    <label for="timeline-end">End Year (Relative to ${this.world.timelines[0].name}):</label>
                    <br/>
                    <input type="number" id="timeline-end" name="timeline-end" min="0" value="${this.end}">
                </div>

                <div class="color-form">
                    <label for="timeline-color">Event Colors: </label> <input type="color" id="timeline-color" name="timeline-color" value="${this.color}">
                </div>

                <div class="error-messages span"></div>
            </form>
        `);

        const popupEl = this.index == 0 ? drawPopup(
            "timeline", 
            timelineForm, 
            () => this.editTimelineRecieve(timelineForm)
        )
        :
        drawPopup(
            "timeline", 
            timelineForm, 
            () => this.editTimelineRecieve(timelineForm), 
            () => { 
                this.world.deleteTimeline(this.index);
                closePopup("popup-timeline");
            }
        );
        showPopup(popupEl);
    }

    editTimelineRecieve(timelineForm) {
        const timelineData = this.world.validateTimelineForm(timelineForm);
        
        if (timelineData) {
            console.log(timelineData);
            this.editTimeline(timelineData);
            closePopup("popup-timeline");
        }
    }


    // EVENT MANAGEMENT
    getEventsEl() {
        const eventsContainerEl = $(`<div id='${this.evId}' class='events-container'></div>`);
        eventsContainerEl.css("top", `${this.start * timeSize}px`);
        eventsContainerEl.css("order", this.index + 1);
        let allBenchmarkEls = [];

        this.events.forEach(event => {
            const els = event.getEventEls(this.abbr);
            console.log(els);
            els.eventEls.forEach(el => {
                eventsContainerEl.append(el);
            })
            allBenchmarkEls = allBenchmarkEls.concat(els.benchmarkEls);

        });

        return {eventContainerEl: eventsContainerEl, benchmarkEls: allBenchmarkEls};
    }

    sortEvents() {
        this.events.sort(function (a, b) { return a.start - b.start });
        this.events.map((event, idx) => {
            event.index = idx;
        })
    }

    createEvent(eventData) {
        const newEvent = new Event(eventData, this, this.world);
        if (this.events.length === 0) {
            this.events.push(newEvent);
        } else {
            for (let i = 0; i < this.events.length; i++) {
                if (newEvent.start > this.events[i].start) {
                    this.events.splice(i - 1, 0, newEvent);
                    break;
                }
                if (i === this.events.length - 1) {
                    this.events.push(newEvent);
                }
            }
        }
        this.world.saveToLocalStorage();
        this.world.drawEvents(this.index);
    }

    deleteEvent(eventIndex) {
        let possibleTimes = [];
        const event = this.events[eventIndex];
        possibleTimes.push(event.start);
        if (event.end) {
            possibleTimes.push(event.end);
        }
        if (event.recurring) {
            let newStart = event.start + event.recurringInterval;
            if (event.end) {
                let newEnd = event.end + event.recurringInterval
                while (newStart < event.recurringEndTime) {
                    possibleTimes.push(newStart);
                    possibleTimes.push(newEnd);
                    newStart += event.recurringInterval;
                    newEnd += event.recurringInterval;
                }
            } else {
                while (newStart < event.recurringEndTime) {
                    possibleTimes.push(newStart);
                    newStart += event.recurringInterval;
                }
            }
        }
        this.world.removeMarkLines(this.index, possibleTimes)

        this.events.splice(eventIndex, 1);
        this.world.drawEvents(this.index);
        this.world.saveToLocalStorage();
    }
}

class Event {
    constructor(data, timeline, world) {
        this.index = data.index;

        this.name = data.name;
        this.start = data.start;
        this.end = data.end;
        this.color = data.color;
        this.recurring = data.recurring || false;
        this.benchmark = data.benchmark || false;
        this.recurringInterval = data.recurringInterval || null;
        this.recurringEndTime = data.recurringEndTime || null;
        this.showRecurCount = data.showRecurCount || false;

        this.timeline = timeline;
        this.world = world;
    }

    getEventEls(abbr) {
        const formattedTime = this.end == null ? `${this.start} ${abbr}` : `${this.start} — ${this.end} ${abbr}`;
        const eventContainerEl = $(`<div class='event-container'></div>`);

        const eventStartEl = $(`<div class="event">
            </div>`);
        const eventLabelEl = $(`<div class="event-label">
            <div class="ev-time">${formattedTime}</div>
            <div class="ev-name">${this.name}</div>
        </div>`)
        eventStartEl.append(eventLabelEl);
        eventContainerEl.append(eventStartEl);
        eventContainerEl.css("top", `${(this.start) * timeSize}px`);

        eventLabelEl.css("background-color", this.color);
        eventContainerEl.css("background-color", this.color + "80");
        
        if (this.end !== null) {
            const eventEndEl = eventStartEl.clone();
            eventContainerEl.append(eventEndEl);
            eventContainerEl.css("height", (this.end-this.start) * timeSize + 2); // the two is because the ticks are two pxs high
            eventEndEl.css("background-color", this.color);
        }

        // if (this.benchmark) {
        //     const offset = 12 + 90 + (410 * this.timeline.index) + 10;
        //     // 12 for event container left margin, 90 for timeline line size, 410 for each timeline (width + margin)
        //     eventContainerEl.append($(`<div class="benchmark" style="background-color: ${this.color + "80"}; left: ${-offset}px"></div>`))

        // }

        const editEventEl = $(`<div class="event-edit edit-button">Edit <i class="bi bi-pencil-fill"></i></div>`);
        eventContainerEl.append(editEventEl);

        if (this.end == null) {
            eventContainerEl.on("click", () => this.world.toggleMarkLine(this.timeline.index, this.start))
                .children(".event-edit").click(function(e) {
                    return false;
                });
        } else {
            eventContainerEl.on("click", () => this.world.toggleMarkLine(this.timeline.index, this.start, this.end))
                .children(".event-edit").click(function(e) {
                    return false;
                });
        }
        

        editEventEl.on("click", () => this.editEventInit());

        const allEventEls = [eventContainerEl];

        if (this.recurring) {
            let i = 1;
            while ((this.start + i * this.recurringInterval) < this.recurringEndTime) {
                const recurringEventContainerEl = eventContainerEl.clone()
                const newStartTime = this.start + i * this.recurringInterval;
                const newFormattedTime = this.end == null ? `${newStartTime} ${abbr}` : `${newStartTime} — ${newStartTime + (this.end - this.start)} ${abbr}`;

                $(".ev-time", recurringEventContainerEl).text(newFormattedTime);
                if (this.showRecurCount) {
                    let tail = "th";
                    if (i+1 % 10 == 1) { tail = "st" }
                    else if (i+1 % 10 == 2) { tail = "nd" }
                    else if (i+1 % 10 == 3) { tail = "rd" }
                    $(".ev-name", recurringEventContainerEl).text(`${i+1}${tail} ${this.name}`);
                }

                recurringEventContainerEl.css("top", `${(newStartTime) * timeSize}px`);
                
                if (this.end == null) {
                    recurringEventContainerEl.on("click", () => this.world.toggleMarkLine(this.timeline.index, newStartTime))
                        .children(".event-edit").click(function(e) {
                            return false;
                        });
                } else {
                    const newEndTime = this.end + i * this.recurringInterval;
                    recurringEventContainerEl.on("click", () => this.world.toggleMarkLine(this.timeline.index, newStartTime, newEndTime))
                        .children(".event-edit").click(function(e) {
                            return false;
                        });
                }
                
                recurringEventContainerEl.children(".event-edit").on("click", () => this.editEventInit());
                
                allEventEls.push(recurringEventContainerEl);
                i += 1;
            }
        }

        const allBenchmarkEls = this.getBenchmarkEls(abbr);
        return {eventEls: allEventEls, benchmarkEls: allBenchmarkEls};
    }

    getBenchmarkEls(abbr) {
        if (this.benchmark) {
            const benchmarkContainerEl = $(`<div class='benchmark benchmark-${abbr}'></div>`);
            benchmarkContainerEl.css("top", `${(this.start + this.timeline.start) * timeSize}px`);

            benchmarkContainerEl.css("background-color", this.color + "80");
            
            if (this.end !== null) {
                benchmarkContainerEl.css("height", (this.end-this.start) * timeSize + 2);
            } else {
                benchmarkContainerEl.css("height", 2); // the two is because the ticks are two pxs high
            }

            const allBenchmarkEls = [benchmarkContainerEl];

            if (this.recurring) {
                let i = 1;
                while ((this.start + i * this.recurringInterval) < this.recurringEndTime) {
                    const recurringBenchmarkContainerEl = benchmarkContainerEl.clone()
                    const newStartTime = this.start + this.timeline.start + i * this.recurringInterval;
                    recurringBenchmarkContainerEl.css("top", `${(newStartTime) * timeSize}px`);
                        
                    allBenchmarkEls.push(recurringBenchmarkContainerEl);
                    i += 1;
                }
            }

            return allBenchmarkEls;
        }
        return [];
    }

    editEvent(eventData) {
        this.name = eventData.name;
        this.start = eventData.start;
        this.end = eventData.end;
        this.color = eventData.color;
        this.recurring = eventData.recurring || false;
        this.benchmark = eventData.benchmark || false;
        this.recurringInterval = eventData.recurringInterval || null;
        this.recurringEndTime = eventData.recurringEndTime || null;
        this.showRecurCount = eventData.showRecurCount || false;

        this.world.drawEvents(this.timeline.index);
        this.world.saveToLocalStorage();
    }

    editEventInit() {
        const eventForm = $(`
            <form id="event-form">
                <input type="hidden" id="timeline-select" name="timeline-select" value="${this.timeline.index}">
                <div class="span">
                    <label for="event-name">Event Name:</label>
                    <br />
                    <input type="text" id="event-name" name="event-name" value="${this.name}">
                </div>

                <div>
                    <label for="event-start-time">Event Start Time:</label>
                    <br />
                    <input type="number" id="event-start-time" name="event-start-time" min="0" value="${this.start}">
                </div>

                <div>
                    <label for="event-end-time">Event End Time:</label>
                    <br />
                    <input type="number" id="event-end-time" name="event-end-time" min="0" value="${this.end}">
                </div>

                <div class="color-form">
                    <label for="event-color">Event Color: </label> <input type="color" id="event-color" name="event-color" value="${this.color}"> <input type="button" id="event-color-reset" name="event-color-reset" value="Reset" class="button">
                </div>

                <label for="recurring" class="span">
                    <input type="checkbox" id="recurring" name="recurring" ${this.recurring ? "checked" : ""}>
                    Recurring Event?
                </label>

                <div id="recurring-options" class="span"></div>

                <label for="benchmark" class="span">
                    <input type="checkbox" id="benchmark" name="benchmark" ${this.benchmark ? "checked" : ""}>
                    Benchmark Event?
                </label>

                <div class="error-messages span"></div>
            </form>
        `);

        $("#event-color-reset", eventForm).on("click", (e) => {
            $("#event-color", eventForm).val(this.timeline.color);
        })

        $('#recurring', eventForm).on("change", (e) => updateRecurring(e.target.checked, this));

        const popupEl = drawPopup(
            "event",
            eventForm,
            () => this.editEventRecieve(eventForm), 
            () => { 
                this.timeline.deleteEvent(this.index);
                closePopup("popup-event");
            }
        );
        showPopup(popupEl);
        updateRecurring(this.recurring, this);
    }

    editEventRecieve(eventForm) {
        const eventData = this.world.validateEventForm(eventForm);

        if (eventData) {        
            console.log(eventData);
            this.editEvent(eventData);
            closePopup("popup-event");
        }
    }

}


function updateRecurring(isRecurring, eventData=null) {
    if (isRecurring) {
        $("#recurring-options").html(`
            <div>
                <label for="recurring-interval">Recurring Interval (Years):</label>
                <br />
                <input type="number" id="recurring-interval" name="recurring-interval" min="1" value="${eventData?.recurringInterval || 1}">
            </div>

            <div>
                <label for="recurring-end-time">Recurring End Time:</label>
                <br />
                <input type="number" id="recurring-end-time" name="recurring-end-time" min="1" value="${eventData?.recurringEndTime || ''}">
            </div>

            <label for="recurring-show-count">
                <input type="checkbox" id="recurring-show-count" name="recurring-show-count" ${eventData?.showRecurCount ? "checked" : ""}>
                Show Recurring Count?
            </label>
        `);
    } else {
        $("#recurring-options").empty();
    }
}


function drawPopup(id, children, onSave, onDelete = null, saveText = "Save") {
    const popupEl = $(`<div id='popup-${id}' class='popup'>
        <div class='popup-content'></div>
        <div class='popup-footer'>
            <button class="save-button button">${saveText}</button>
            <button class="button" onclick="closePopup('popup-${id}')">Close</button>
            ${onDelete ? `<button class="delete-button button red">Delete</button>` : ""}
        </div>
    </div>`);
    $(".save-button", popupEl).on("click", onSave);
    $(".delete-button", popupEl).on("click", onDelete);
    $(".popup-content", popupEl).append(children);
    return popupEl;
}

function showPopup(popupEl) {
    $("#popup-container").append(popupEl);
    $("#popup-container").show();
}

function closePopup(popupId) {
    $(`#${popupId}`).remove();
    if ($("#popup-container").children().length === 0) {
        $("#popup-container").hide();
    }
}






$(document).ready(function(){
    $("#popup-container").hide();

    $("#time-interval").attr("value", timeInterval);

    let timelineData = INITDATA;
    if (localStorage.getItem("worldData")) {
        timelineData = JSON.parse(localStorage.getItem("worldData"));
    }

    const world = new World(timelineData);
    

});
