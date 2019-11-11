/* Array that contains all of the subreddits, divided into categories
0 - Advice
1 - Body
2 - Finance
3 - Mind
4 - Positivity
5 - Quotes
*/
const subreddits = [
    ["getdisciplined", "lifeimprovement", "timemanagement", "productivity", "zenhabits", "selfimprovement", "simpleliving"],
    ["fitness", "yoga"],
    ["personalfinance", "frugal", "eatcheapandhealthy", "financialindependence"],
    ["meditation", "yoga", "30daysit"],
    ["getmotivated", "inspiration", "upliftingnews", "selfimprovement", "audiomeditation"],
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
    else if (buttonClicked == "quotes") {
        for (var i = 0; i < subreddits.length; i++) {
            for (var j = 0; j < subreddits[i].length; j++) {
                if (i == 5) {
                    document.getElementById(subreddits[i][j]).style.display = "block";
                }
                else {
                    document.getElementById(subreddits[i][j]).style.display = "none";
                }
            }
        }
    }
}