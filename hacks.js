// Yay local storage!
// Vex5 Hack developed by WhineyMonkey10 let's gooo
// Developed by @WhMonkey
// Version: 1.0.0
// License: MIT
// Enjoy!

// User Interface, real one coming soon

alert("웃 Welcome to Vex5 Hack! 웃\n\nPress CTRL + ALT + C to open the cheat panel. \n\n웃 Enjoy! 웃");



// Main function

document.addEventListener("keyup",function(evt){
    if(evt.keyCode=="67"&&evt.altKey&&evt.ctrlKey){
        main();
    }});

function main() {
    // Get the user's input
    var input = prompt("                                           웃 -- Cheat Panel -- 웃\n\nClear total deaths (1) \n\nDelete all progress [Use with caution!!] (2)\n\n웃 More Coming Soon <3 웃");
    // Check if the user's input is valid
    if (input == null || input == "") {
        // If the user's input is invalid, show an error
        alert("You need to enter something to hack you sussy baka!");
        exit();
    } else {
     

        // Start the hack
        if (input == "1") {
            let confirm = prompt("Are you sure you want to clear your total deaths? (y/n)");
            
            if (confirm == "y") {
                localStorage.setItem("td", 0);
                alert("Cleared!");
            } else {
                alert("Cancelled!");
            }
            exit();
        } else if (input == "2") {
            let confirm = prompt("Are you sure you want to delete all your progress? (y/n)");
            
            if (confirm == "y") {
                let confirm = prompt("Are you REALLY sure you want to delete all your progress? (y/n)");
                if (confirm == "y") {
                    localStorage.clear();
                    alert("Cleared!");
                    exit();
                } else {
                    alert("Cancelled!")
                    exit();
                }
                
            } else {
                alert("Cancelled!");
            }
            exit();
        }
        
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}}









