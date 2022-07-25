const sb = document.querySelector(".sb");
const sbxs = document.querySelector(".sbxs");

const ss = document.querySelector(".ss");
const ssxs = document.querySelector(".ssxs");

const es = document.querySelector(".es");
const esxs = document.querySelector(".esxs");

const questions = document.querySelectorAll(".question");

const menu = document.querySelector(".hamburger-menu");

const target = document.querySelector(".target");

const email = document.getElementById("email");

const contactbtn = document.getElementById("contactbtn");

let row = document.getElementById("row");

let rowxs = document.getElementById("rowxs");


window.addEventListener("DOMContentLoaded", function () {
    row.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-1.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
    sb.classList.add("underline");

    rowxs.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-1.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks however you like.
            Our simple drag-and-drop interface gives  
            you complete control over how you manage 
            your favourite sites.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
    sbxs.classList.add("underline");
    
});

sb.addEventListener("click", function () {
    row.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-1.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
    if (!sb.classList.contains("underline")) {
        sb.classList.add("underline");
    } 
    ss.classList.remove("underline");
    es.classList.remove("underline");

});

sbxs.addEventListener("click", function () {
    rowxs.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-1.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks however you like.
            Our simple drag-and-drop interface gives  
            you complete control over how you manage 
            your favourite sites.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`

    if (!sbxs.classList.contains("underline")) {
        sbxs.classList.add("underline");
    } 
    ssxs.classList.remove("underline");
    esxs.classList.remove("underline");
})

ss.addEventListener("click", function () {
    row.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-2.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Intelligent search
        </h2>

        <p>
            Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
    if (!ss.classList.contains("underline")) {
        ss.classList.add("underline");
    } 
    sb.classList.remove("underline");
    es.classList.remove("underline");

});

ssxs.addEventListener("click", function () {
    rowxs.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-2.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Intelligent search
        </h2>

        <p>
            Our powerful search feature will help 
            you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
        if (!ssxs.classList.contains("underline")) {
            ssxs.classList.add("underline");
        } 
        sbxs.classList.remove("underline");
        esxs.classList.remove("underline");
})

es.addEventListener("click", function () {
    row.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-3.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Share your bookmarks
        </h2>

        <p>
            Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
    if (!es.classList.contains("underline")) {
        es.classList.add("underline");
    } 
    sb.classList.remove("underline");
    ss.classList.remove("underline");

});

esxs.addEventListener("click", function () {
    rowxs.innerHTML = `
    <div class="col-sm-6">
        <img src="./images/illustration-features-tab-3.svg">
    </div>

    <div class="col-sm-6">
        <h2>
            Share your bookmarks
        </h2>

        <p>
            Easily share your bookmarks and collections
            with others. Create a shareable link 
            that you can send at the click of a button.
        </p>

        <a href="#"><button id="infobtn">More info</button></a>
    </div>`
        if (!esxs.classList.contains("underline")) {
            esxs.classList.add("underline");
        } 
        sbxs.classList.remove("underline");
        ssxs.classList.remove("underline");
})

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show");
            }
        });
        question.classList.toggle("show");
    });
});

menu.addEventListener("click", function () {
    target.classList.toggle("active");
});

contactbtn.addEventListener("click", function () {
    if (email.value) {
        alert("Thank you for contacting us.");
    } else {
        alert("Please input a valid email address");
    }
});