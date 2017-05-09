// manually wrapping the "first character"
Array.prototype.forEach.call(
    document.querySelectorAll(".widget-menu-widget nav > ul > li > a, .widget-menu-widget header > h1"),
    function (div) {
        let content = div.innerHTML, chars = content.charCodeAt(0) >= 9785 ? 2 : 1;
        div.innerHTML = '<span class="icon">' + content.substring(0, chars) + "</span>" + (chars == 2 ? content.substring(chars) : content);
    });

Array.prototype.forEach.call(document.getElementsByClassName("hide-menu"), element => element.classList.remove("hide-menu"));