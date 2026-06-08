const audio = new Audio("fassounds-escape-your-love-upbeat-fashion-pop-dance-412230.mp3")

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