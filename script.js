flag = true;
$(document).ready(function () {
    $(`#icon`).click(function () {
        if (flag) {
            $('.scroll-bar').css({ 'display': 'none' })
            $(`.nav-toggler`).slideDown("fast", "swing", open())
            function open() {
                //SCREEN SIZE 350PX
                var px_350 = window.matchMedia(`(max-width:350px)`)
                if (px_350.matches) {
                    $(`.nav-toggle-ele`).animate({ fontSize: "50px", letterSpacing: "5px", lineHeight: "15vh" }, "fast", "linear").show("fast").hover(function () {
                        $(this).css({ "color": "#00A9E8", "font-size": "70px" })
                    }, function () {
                        $(this).css({ "color": "white", "font-size": "50px" })
                    }
                    )
                } else {
                    $(`.nav-toggle-ele`).animate({ fontSize: "70px", letterSpacing: "5px", lineHeight: "15vh" }, "fast", "linear").show("fast").hover(function () {
                        $(this).css({ "color": "#00A9E8", "font-size": "90px" })
                    }, function () {
                        $(this).css({ "color": "white", "font-size": "70px" })
                    }
                    )
                }
            }
            $(`.nav-toggler`).css({ "display": "flex", "background-image": "linear-gradient(to right, rgba(20, 34, 71, 1), rgba(164, 50, 115, 1), rgba(230, 69, 96, 1))" })
            var px_10000 = window.matchMedia(`(max-width:1000px)`)
            if (px_10000.matches) {
                $(`.nav-toggler`).append(`<div class="dropdown-icons">
                <div><a target="_blank" 
                href="https://github.com/KaushithGowda"><i class="fab fa-github fa-2x" id="git"></i>
                </a></div>
                <div><a target="_blank"
                href="https://www.linkedin.com/in/koushith-gowda-8aa909183/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMjRSDiZwSHe9159KE7kSeg%3D%3D"><i
                class="fab fa-linkedin-in fa-2x" id="linkedin"></i>
                </a></div>
                <div><a target="_blank"
                href="mailto:koushith7@gmail.com"><i class="fas fa-envelope fa-2x" id="gmail"></i>
                </a></div>  
                </div>
                `)
                $(`.dropdown-icons`).css({
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'space-around',
                    'width': '40vw'
                })
            }
            $(`.con`).not(`.nav`).hide();
            flag = false;
        } else {
            $('.scroll-bar').css({ 'display': 'flex' })
            var px_10000 = window.matchMedia(`(max-width:1000px)`)
            if (px_10000.matches) {
                $(`.dropdown-icons`).detach()
            }
            $(`.nav-toggler`).slideUp("slow", "linear", close())
            function close() {
                $(`.nav-toggle-ele`).hide("fast")
                $(`.nav-toggle-ele`).animate({ fontSize: "2px", letterSpacing: "1px" }, "fast", "linear")
            }
            $(`.nav-toggler`).css({ "display": "none" })
            $(`.con`).show();
            flag = true;
        }
    })
})

//Intersection Observer API
//Creating target
const first = document.querySelector('.first-con')
const second = document.querySelector('.second-con');
const third = document.querySelector('.third-con');
const fourth = document.querySelector('.fourth-con');

let options = {
    root: null,
    threshold: 0.5
}

function first_callback(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            $(`.first-bar`).css({ "width": "8vw" })
        } else {
            $(`.first-bar`).css({ "width": "2vw" })
        }
    });
}

//Creating the function to be called when the target is been intersected
function second_callback(entries) {
    //The callback function will return an array of entries, even if observing only one element
    entries.forEach(element => {
        //returns true if the element is intersecting with viewport
        if (element.isIntersecting) {
            //Incresing the width when intersecting
            $(`.second-bar`).css({ "width": "8vw" })
        } else {
            //Decresing the width when not intersecting
            $(`.second-bar`).css({ "width": "2vw" })
        }
    });
}

function third_callback(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            $(`.third-bar`).css({ "width": "8vw" })
        } else {
            $(`.third-bar`).css({ "width": "2vw" })
        }
    });
}

function fourth_callback(entries) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            $(`.fourth-bar`).css({ "width": "8vw" })
        } else {
            $(`.fourth-bar`).css({ "width": "2vw" })
        }
    });
}
const first_observer = new IntersectionObserver(first_callback, options)
first_observer.observe(first)

const second_observer = new IntersectionObserver(second_callback, options)
second_observer.observe(second)

const third_observer = new IntersectionObserver(third_callback, options)
third_observer.observe(third)

const fourth_observer = new IntersectionObserver(fourth_callback, options)
fourth_observer.observe(fourth)

function first_scroll() {
    var element = document.getElementsByClassName("first-con");
    element.scrollIntoView();
    element.scrollIntoView({ behavior: "smooth" });
}
function second_scroll() {
    var element = document.getElementById("second");
    element.scrollIntoView();
    element.scrollIntoView({ behavior: "smooth" });
}
function third_scroll() {
    var element = document.getElementById("third");
    element.scrollIntoView();
    element.scrollIntoView({ behavior: "smooth" });
}
function fourth_scroll() {
    var element = document.getElementById("fourth");
    element.scrollIntoView();
    element.scrollIntoView({ behavior: "smooth" });
}

$(function () {
    $('#background-image').toggle('slide', { direction: 'left' }, 500)
})

//Typedscript
$(function () {

    var typed6;

    setTimeout(function () {
        typed6 = new Typed('#typed6', {
            strings: ['Hey there, I am Kaushith Gowda'],
            typeSpeed: 40,
            loop: false
        });
    }, 1500)

    setTimeout(function () {
        $('#background-image').css('background-image', 'url(images/coder.jpg)');
    }, 6000)

    setTimeout(function () {
        $('#background-image').css('background-image', 'url(images/run.jpg)');
    }, 7000)

    setTimeout(function () {
        $('#background-image').css('background-image', 'url(images/ride.jpg)');
    }, 8000)

    setTimeout(function () {
        $('#background-image').css('background-image', 'url(images/photo.jpg)');
    }, 9000)

    setTimeout(
        function destroy() {
            $('#typed3').css({ 'display': 'none' })
        }, 9000
    )

    var typed3;

    setTimeout(function () {
        typed3 = new Typed('#typed3', {
            strings: ['I love to code', 'I love to run', 'I love to ride'],
            typeSpeed: 50,
            backSpeed: 10,
            smartBackspace: true, // this is a default
            loop: false
        });
    }, 5000)

})






