// manually wrapping the "first character"
Array.prototype.forEach.call(document.querySelectorAll("#aside-second > div > article > nav > ul > li > a"), wrapFirstChar);
Array.prototype.forEach.call(document.querySelectorAll("#aside-second > div > article > header > h1"), wrapFirstChar);


function wrapFirstChar(div) {
    let content = div.innerHTML, chars = content.charCodeAt(0) >= 9785 ? 2 : 1;
    div.innerHTML = '<span class="icon">' + content.substring(0, chars) + "</span>" + (chars == 2 ? content.substring(chars) : content);
}