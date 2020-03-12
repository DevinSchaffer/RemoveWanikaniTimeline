// ==UserScript==
// @name          Remove Wanikani timeline
// @namespace     https://www.wanikani.com
// @description   Removes Wanikani's inferior timeline and stretches the stuff to fill the width. I recommend using this with ultimate timeline: https://greasyfork.org/scripts/13475-wanikani-ultimate-timeline/code/Wanikani%20Ultimate%20Timeline.user.js
// @author        Devin Schaffer
// @version       1.0.0
// @include       https://www.wanikani.com/dashboard
// @grant         none
// ==/UserScript==

$(document).ready(function() {
    $(".forecast").remove();
    $(".progress-and-forecast").css("grid-template-columns", "repeat(4, 1fr)");
    $(".lessons-and-reviews ul li").css("flex", "0 1 50%");
});