/* Array that contains all of the subreddits, divided into categories
0 - Advice
1 - Body
2 - Finance
3 - Mind
4 - Positivity
5 - Quotes
*/
const subreddits = [
    ["getdisciplined", "lifeimprovement", "timemanagement", "productivity", "zenhabits", "simpleliving", "selfimprovement"],
    ["fitness", "yoga"],
    ["personalfinance", "frugal", "eatcheapandhealthy", "financialindependence"],
    ["30daysit", "meditation", "audiomeditation"],
    ["getmotivated", "inspiration", "upliftingnews"],
    ["quotes"]
];

/* Tag Functionality - Toggles visibility on different subreddits */
function tagCheck(buttonClicked) {
    if (buttonClicked == "all") {
        for (var i = 0; i < subreddits.length; i++) {
            for (var j = 0; j < subreddits[i].length; j++) {
                document.getElementById(subreddits[i][j]).style.display = "block";
            }
        }
    }
    else if (buttonClicked == "advice") {
        cycleSubreddits(0);
    }
    else if (buttonClicked == "body") {
        cycleSubreddits(1);
    }
    else if (buttonClicked == "finance") {
        cycleSubreddits(2);
    }
    else if (buttonClicked == "mind") {
        cycleSubreddits(3);
    }
    else if (buttonClicked == "positivity") {
        cycleSubreddits(4);
    }
    else if (buttonClicked == "quotes") {
        cycleSubreddits(5);
    }
}

function cycleSubreddits(x) {
    for (var i = 0; i < subreddits.length; i++) {
        for (var j = 0; j < subreddits[i].length; j++) {
            if (i == x) {
                document.getElementById(subreddits[i][j]).style.display = "block";
            }
            else {
                document.getElementById(subreddits[i][j]).style.display = "none";
            }
        }
    }
}
