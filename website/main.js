
function toggleMute() {

    var video =document.getElementById("video");
  
    if(video.muted){
	video.muted = false;
}   else {
	video.muted = true;
}  

}

let activityDiv = document.getElementById("activity")

fetch('https://www.boredapi.com/api/activity/')
.then(res => res.json())
.then(act => {
    activityDiv.innerHTML += `<p> You should ${act.activity} instead of reading this </p>`
})