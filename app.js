
const theSections = document.querySelectorAll("section");
let theList = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();

theSections.forEach(function (theSection) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let theAttribute = theSection.getAttribute("data-nav");
    let theID = theSection.getAttribute("id");
    let theNode = document.createTextNode(theAttribute);
    a.href = "#" + theID;
    a.setAttribute("id", theID + "_li");
    a.appendChild(theNode);
    li.appendChild(a);
    fragment.appendChild(li);
    theList.appendChild(fragment);

});

const links = document.querySelectorAll("#navbar__list li a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({ top: offsetTop, behavior: "smooth" });
}

window.addEventListener("scroll", theScroll, { passive: true });

function theScroll() {
    theSections.forEach( section => {
        section.classList.remove("your-active-class");
        let theID = section.getAttribute("id");
        let nav = document.querySelector("#" + theID + "_li");
        nav.classList.remove('your-active-class-li');
    });
    for (section of theSections) {
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 500) {

            section.classList.add('your-active-class');
            let theID = section.getAttribute("id");
            let nav = document.querySelector("#" + theID + "_li");
            nav.classList.add('your-active-class-li');
        }
    }
}
