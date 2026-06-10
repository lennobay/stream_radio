const audio = new Audio("https://services4leo.my-router.de:8443")

function play_radio(){
        audio.play();
    document.getElementById("start_music").style.display = "none";
document.getElementById("stop_music").style.display = "unset";
}    

function stop_radio(){
    
    
    audio.pause()
    document.getElementById("stop_music").style.display = "none";
        document.getElementById("start_music").style.display = "unset";


}