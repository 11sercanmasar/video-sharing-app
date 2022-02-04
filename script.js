const trendingButton=document.querySelector(".trending");
let videoSection = document.querySelector(".main-side");
let videoSectionTwo = document.querySelector(".main-side-two")
const discoverButton = document.querySelector(".discover");
const video = document.getElementsByTagName("video");
let source = document.querySelector("source");
let URL = source.getAttribute("src").toString();
let vid = document.querySelectorAll(".video");
let videoChange = document.querySelector(".video-change")
const messageArea=document.querySelector(".message-area");
const messageInput = document.querySelector(".messaging");
const messageBox = document.querySelector(".modal-message");
const sendButton =document.querySelector(".btn-send");
const nameLastname = document.querySelector(".nameInput");
const writeMessage = document.querySelector(".writeInput");
const messageFirst = document.querySelector(".messageFirst");
const formSection = document.querySelector(".form-section");

document.addEventListener("DOMContentLoaded",  windowLoad =>{
videoSectionTwo.style.display="none"; 
formSection .style.display="none";   
})

trendingButton.addEventListener("click", changeView =>{
videoSection.style.display= "none";
videoSectionTwo.style.display="flex";
formSection .style.display="block";
});

discoverButton.addEventListener("click", showView =>{
    formSection .style.display="none";
    videoSectionTwo.style.display="none";
    videoSection.style.display = "flex";
    
});

document.querySelector(".video-container").addEventListener("mouseover", function(e){
    if(e.target.matches('video')){
        e.target.play();     
    }

});
document.querySelector(".video-container").addEventListener("click", function(e){
    let i= e.target;
    videoChange.setAttribute("src",i.currentSrc);
    videoSection.style.display= "none";
    videoSectionTwo.style.display="flex";
    
});
document.querySelector(".main-side-two").addEventListener("mouseover", function(e){
    if(e.target.matches('video')){
        e.target.play();     
    }
});

document.querySelector(".close").addEventListener("click", closeModal=>{
    messageBox.style.display="none";
});
document.addEventListener("DOMContentLoaded", closeModal=>{
    messageBox.style.display="none";
});
messageInput.addEventListener("click", showBox=>{
    messageBox.style.display="block";
})


sendButton.addEventListener("click", sendMessage=>{
 
    messageArea.innerHTML+= ` <div class="row message-row me-0">
    <div class="col-3">
        <div class="img-wrapper">
            <div class="img-circle "></div>
            <img alt="" class="author-img"
                src="https://yt3.ggpht.com/ytc/AKedOLQK8LDRYO21ZQtGiAXeYmqOTmWsA9f6guyTSUWM=s900-c-k-c0x00ffffff-no-rj" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
        </div>
    </div>
    <div class="col-9">
        <div class="author-name text-light row">${nameLastname.value} <svg class="red-dot col-3"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-dot" viewBox="0 0 16 16">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg></div>

        <div class="author-info text-muted ">${writeMessage.value}</div>
    </div>
</div> `

writeMessage.value="";
nameLastname.value="";
messageBox.style.display="none";


})

document.getElementById("addVideo").addEventListener("click", addingVideo=>{
    let url = document.getElementById('URL').value;
   let videoCont= document.querySelector(".left-video-one");
   videoCont.innerHTML = "";
   videoCont.innerHTML = `
   <video class="video-change w-100"  controls >
   <source id="videoAdd"
       src="${url}"
      
    </video>
   
   
   `

   url = "";  
});

document.getElementById('like').addEventListener('click', function plus(){
    this.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
    this.classList.add('bg-primary','text-light');
   
});

document.querySelector('.row2').addEventListener('click', function colorized(){
    this.classList.add("event");
})

