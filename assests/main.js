window.addEventListener("load",initEvents);
var flag=false;
function initLoader(){

}
function initEvents(){
    // setTimeout(function(){
    //     $("#loader").fadeOut("2000");
    //     console.log("fading out")
    // },4000)
    setTimeout(function(){
        var loader=document.querySelector("#loader");
        loader.style.display="none";
    },4800)
    setTimeout(function(){ 
      
   console.log("inside load songs");
        loadSongs();
        var play=document.querySelector("#play");
        var slider=document.querySelector("#slider");
        var morebutton=document.querySelector("#morebutton");
        morebutton.addEventListener("click",showmore);
        var lessbutton=document.querySelector("#lessbutton");
        lessbutton.addEventListener("click",showless);
        lessbutton.style.display="none";
        var audioPlayer=document.querySelector("#audioPlayer");
        audioPlayer.style.transform="translateY("+(150)+"px)";
        slider.addEventListener("change",seekSong);    play.addEventListener("click",togglePlay);
        console.log('flag is',flag);},3000);
   
    
   

}
function showmore(){
    console.log("show more clicked");
    lessbutton.style.display="block";
    var playlistsongsimages=document.querySelector("#playlistsongsimages");
    var playlistsongs=document.querySelector("#playlistsongs");
    // audioPlayer.style.transform="translateY("+(0)+"px)";
    // audioPlayer.style.transition="0.7s";
    playlistsongsimages.style.transform="translateX("+(-100)+"%)";
    playlistsongsimages.style.transition="0.05s";
    playlistsongs.style.transform="translateX("+(-29)+"%)";
    playlistsongs.style.transition="0.05s";

}
function showless(){
    lessbutton.style.display="none";
    console.log("show  less clicked");
    var playlistsongsimages=document.querySelector("#playlistsongsimages");
    var playlistsongs=document.querySelector("#playlistsongs");
    // audioPlayer.style.transform="translateY("+(0)+"px)";
    // audioPlayer.style.transition="0.7s";
    playlistsongsimages.style.transform="translateX("+(0)+"%)";
    playlistsongsimages.style.transition="0.05s";
    playlistsongs.style.transform="translateX("+(-100)+"%)";
    playlistsongs.style.transition="0.05s";

}
function seekSong(){
    audio.currentTime = slider.value;
    console.log(" audio.currentTime ",audio.currentTime);
    var duration = audio.currentTime ;
    // slider.max = duration;
     var min = parseInt(duration / 60);
     console.log("min is",duration,"__",min);
     console.log("duration%60",JSON.stringify(duration%60));
     var string=JSON.stringify(duration%60);
     var string=string.split(".")[0];
     string=JSON.stringify(string*10);
     console.log("string is",string);
     var secDuration=(string).substring(0,2);
     console.log("secDuarion is",secDuration);
    var sec = parseInt(secDuration);
    var song_curr_time=document.querySelector(".song_curr_time");
    song_curr_time.innerHTML = "0" + min + ":" + sec;
}

function loadSongs(){

    var ul=document.querySelector("#allsongs");
    
    songs.forEach((obj)=>{
    var li=document.createElement("li");
    var span=document.createElement("span");
   // console.log(obj);
    span.innerHTML=obj.song_name;
    var img=document.createElement("img");
    // var btn = document.createElement("button");
    // btn.innerHTML = 'Add to Playlist<i class="fas fa-plus"></i>';
    // btn.className = "btn btn-primary d-block w-100";
    var button=document.createElement("button");
    var playicon=document.createElement("span");
    var div=document.createElement("div");
    div.className="overlay"
    button.setAttribute("title",obj.song_name);
    playicon.setAttribute("title",obj.song_name);
    img.setAttribute("title",obj.song_name);
    span.setAttribute("title",obj.song_name);
    span.className="searchsongs";
    playicon.addEventListener("click",playSongIcon);
    img.addEventListener("click",playSong);
    span.addEventListener("click",playSong);
    button.addEventListener("click",addSong);

    button.className="btn addbtn d-block w-100";
    button.innerHTML='Add to Playlist';
  
 playicon.innerHTML= `<i  class="far fa-play-circle"></i>`;
 img.className="image"
playicon.className="playicon";
 
    img.src=obj.song_thumb;
    div.appendChild(playicon)
    li.appendChild(div);
    
     li.appendChild(img);
     li.appendChild(span);
     li.appendChild(button);
    
    ul.appendChild(li);
    })
}
function addSong(){
    // if(localStorage){
    //     if(localStorage.playlist){
    //         var storedsongs=JSON.parse(localStorage.playlist);
    //         storedsongs.forEach((obj)=>{
    //             modelObj.playlist.push(obj);
    //         })
         
    //     }
    // }
    console.log(event.srcElement.title);
    var songName=event.srcElement.title;
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_name == songName) {
            // var songUrl = songs[i].song_url;
            // var number=i;
            var requiredObj=songs[i];
            modelObj.addSong(requiredObj.song_id,requiredObj.song_name,requiredObj.song_url,requiredObj.song_thumb)
            console.log(songs[i]);
            printPlaylist();
            break;
        }
    }

}
// function search_song(){
//     console.log("code is",event.keyCode);
//     var searchbar=document.querySelector("#searchbar");
//     let input=searchbar.value;

    
    
//     input=input.toLowerCase(); 
//     console.log("input is",input);
//     var x=[];
//     console.log("searchsongs",x);
//     var elements = document.getElementsByClassName("searchsongs");

// for (var i = 0, len = elements.length; i < len; i++) {
//     x[i]=elements[i];
// }
// console.log("x is",x);
// if(event.keyCode==8||event.keyCode==46){
//     document.location.reload() ;
//    // input="";
//     // for (var i=0;i<x.length;i++){
//     //     if(!x[i].innerText.toLowerCase().includes(input)){
//     //         x[i].parentElement.style.display="list-item";
//     //     }
//     //     else{
//     //         console.log(x[i].parentElement);
//     //         x[i].style.display="list-item";
//     //     }
//     // }
//    }
   
// for (var i=0;i<x.length;i++){
//     if(!x[i].innerText.toLowerCase().includes(input)){
//         x[i].parentElement.style.display="none";
//     }
//     else{
//         console.log(x[i].parentElement);
//         x[i].style.display="list-item";
//     }
// }
    
// }
function search_song(){
    console.log("code is",event.keyCode);
    var searchbar=document.querySelector("#searchbar");
    let input=searchbar.value;

    input=input.toLowerCase(); 
    console.log("input is",input);
    var x=[];
    x=songs.filter((obj)=>{
        return obj.song_name.toLowerCase().includes(input);

    })
   
   
    loadSearchSongs(x);
    console.log("search is",x);

}
function loadSearchSongs(x){
    var ul=document.querySelector("#allsongs");
    ul.innerHTML="";
    x.forEach((obj)=>{
    var li=document.createElement("li");
    var span=document.createElement("span");
   // console.log(obj);
    span.innerHTML=obj.song_name;
    var img=document.createElement("img");
    // var btn = document.createElement("button");
    // btn.innerHTML = 'Add to Playlist<i class="fas fa-plus"></i>';
    // btn.className = "btn btn-primary d-block w-100";
    var button=document.createElement("button");
    var playicon=document.createElement("span");
    button.setAttribute("title",obj.song_name);
    playicon.setAttribute("title",obj.song_name);
    img.setAttribute("title",obj.song_name);
    span.setAttribute("title",obj.song_name);
    span.className="searchsongs";
    playicon.addEventListener("click",playSongIcon);
    img.addEventListener("click",playSong);
    span.addEventListener("click",playSong);
    button.addEventListener("click",addSong);

    button.className="btn addbtn d-block w-100";
    button.innerHTML='Add to Playlist';
  
 playicon.innerHTML= `<i  class="far fa-play-circle"></i>`;
 img.className="image"
playicon.className="playicon";
 
    img.src=obj.song_thumb;
    
    li.appendChild(playicon);
    
     li.appendChild(img);
     li.appendChild(span);
     li.appendChild(button);
    
    ul.appendChild(li);
    })
}
function saveplaylist(){
    console.log("save to playlist clicked");
    
   
    if (window.localStorage) {
        console.log("play is",modelObj.playlist)
        var json = JSON.stringify(modelObj.playlist);
        console.log("json is ",json);
        localStorage.setItem("playlist", json);
    }

   
    
}

function   printPlaylist(songIsPlayed){
    
    console.log("playlist is",modelObj.playlist);
    var playlistitems=document.querySelector("#playlistitems");
    var playlistul=document.querySelector("#playlistsongs");
    var playlistimagesul=document.querySelector("#playlistsongsimages");
   
    playlistul.innerHTML=" ";
    playlistimagesul.innerHTML=" ";
    var h61=document.createElement("h6");
    var h62=document.createElement("h6");
    h61.innerHTML="Queue";
    h62.innerHTML="Queue";
      playlistimagesul.appendChild(h61);
      playlistul.appendChild(h62);
      var savebtn=document.createElement("button");
      savebtn.innerHTML="Save";
      savebtn.className="save btn";
      savebtn.addEventListener("click",saveplaylist);
      playlistimagesul.appendChild(savebtn);
      var savebtn2=document.createElement("button");
      savebtn2.innerHTML="Save";
      savebtn2.className="save btn";
      savebtn2.addEventListener("click",saveplaylist);
      playlistul.appendChild(savebtn2);

    modelObj.playlist.forEach((obj)=>{
    var li1=document.createElement("li");
    var li2=document.createElement("li");
    var span=document.createElement("span");
    console.log(obj);
    span.innerHTML=obj.name;
    
    var img1=document.createElement("img");
    var img2=document.createElement("img");
    // var btn = document.createElement("button");
    // btn.innerHTML = 'Add to Playlist<i class="fas fa-plus"></i>';
    // btn.className = "btn btn-primary d-block w-100";
  
    var playicon1=document.createElement("span");
    var playicon2=document.createElement("span");
    var deleteicon=document.createElement("span");
    
    deleteicon.setAttribute("title",obj.name);
    
    
    playicon1.setAttribute("title",obj.name);
    playicon2.setAttribute("title",obj.name);
    img1.setAttribute("title",obj.name);
    img2.setAttribute("title",obj.name);
    span.setAttribute("title",obj.name);
    playicon1.addEventListener("click",playSongIcon);
    playicon2.addEventListener("click",playSongIcon);
    img1.addEventListener("click",playSong);
    img2.addEventListener("click",playSong);
    span.addEventListener("click",playSong);
    deleteicon.addEventListener("click",deleteSong);
   

    playicon1.innerHTML= `<i  class="far fa-play-circle"></i>`;
    playicon2.innerHTML= `<i  class="far fa-play-circle"></i>`;
  
 deleteicon.innerHTML= `<i class="far fa-times-circle"></i>`;
 img1.className="image  "
 img2.className="image  "
playicon1.className="playicon";
playicon2.className="playicon";
span.className="songname";
deleteicon.className="deleteicon";
if(obj.songIsPlayed)
{console.log("song is being played");
    img1.src=obj.defaultimage;
    img2.src=obj.defaultimage;
}else{
    console.log("song is not played");
    img1.src=obj.image;
    img2.src=obj.image;
}
   
    
    li1.appendChild(playicon1);
    li2.appendChild(playicon2);
    li1.appendChild(img1);
    li2.appendChild(img2);
    playlistimagesul.appendChild(li1);
   
    
    

     li2.appendChild(span);
     li2.appendChild(deleteicon);
   
    
   
     playlistul.appendChild(li2);
    //  playlistitems.appendChild( playlistimagesul);
    //  playlistitems.appendChild(playlistul);

    })
    
}
function deleteSong(){
    console.log("inside delete elemenet");
    console.log(event.srcElement.parentElement.title);
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_name == event.srcElement.parentElement.title) {
            var songObj = songs[i];
            
            console.log(songObj);
            modelObj.deleteSong(songObj.song_id);
            printPlaylist();
            break;
        }
    }

}
function findprevPlay(){
    console.log("inside find prev")
    var prev=document.querySelector("#previous");
    var play=document.querySelector("#play");
    play.innerHTML='<i class="fas fa-play"></i>';
    
    setTimeout(function(){
    var s=parseInt(prev.name);
   
    if(s==0){
      
        var s=songs.length;
    }
    else{
        s=s;
    }
console.log("new s is",s);
play.innerHTML='<i class="fas fa-pause"></i>';
playNewSong(s);
},500)}

function findnextPlay(){
   // flag=false;
    var play=document.querySelector("#play");
    play.innerHTML='<i class="fas fa-play"></i>';
   
    var next=document.querySelector("#next");
  
    setTimeout(function()
        {  var s=parseInt(next.name);
  
            if(s==19){
                // flag=true;
                 play.innerHTML='<i class="fas fa-pause"></i>';
                  s=1;
                 playNewSong(s)
             }
             else{
                 console.log("in else   s is ",s);
                s=s+2;
                console.log("new s is1",s);
               play.innerHTML='<i class="fas fa-pause"></i>';
                 playNewSong(s);
             }
         console.log("new s is",s);
        }
        ,500);
 

  
}
function playNewSong(s){
    console.log("in play new song _____",s);
    for (var i = 0; i < songs.length; i++) {
        console.log("id is",songs[i].song_id)
        if (songs[i].song_id == s) {
            var songUrl = songs[i].song_url;
            var number=i;
            var songImg=songs[i].song_thumb;
            var songname=songs[i].song_name;
            var name=songs[i].song_name;
            console.log(songUrl,i);
            break;
        }
    }
    var prev=document.querySelector("#previous");
    var next=document.querySelector("#next");
    var cur_song=document.querySelector("#cur_song");
  //  cur_song.innerText=name;
    prev.setAttribute('name',number);
   next.setAttribute('name',number);
   audio.src = songUrl;
   flag=true;
   
    

    setInterval(function(){
        var song_curr_time=document.querySelector(".song_curr_time");
        slider.value = audio.currentTime;
        var min = parseInt(  audio.currentTime/ 60);
        var secdur=audio.currentTime%60;
           // console.log("min is",secdur,"__",min);
            
            if( (secdur)<10){
                (secdur)="0"+ secdur;
                secdur=secdur.split(".")[0];
              //  console.log(typeof(secdur))
                
            }
            else{
           // console.log(typeof(secdur));
           
    //     var string=JSON.stringify( audio.currentTime%60);
    secdur=JSON.stringify(secdur);
      secdur=secdur.split(".")[0];
    //     string=JSON.stringify(string*10);
    //     console.log("string is",string);
    //     var secDuration=(string).substring(0,2);
    //     console.log("secDuarion is",secDuration);
    //    var sec = parseInt(secDuration);
            
           // console.log("duration%60---",secdur);
                
        }
        
         song_curr_time.innerHTML = "0" + min + ":" + secdur;
       // console.log(slider.value );
       },1000)
       setTimeout(function() {
        console.log("_______",songImg,"__________",songname);
        var equalizer=document.querySelector("#equalizer");
        var current_song_name=document.querySelector("#current_song_name");
        equalizer.innerHTML=`<img src=${songImg} >`;
        current_song_name.innerHTML=songname;
           console.log("_______",songImg,"__________",songname);
           var equalizer=document.querySelector("#equalizer");
           var current_song_name=document.querySelector("#current_song_name");
           equalizer.innerHTML=`<img src=${songImg} >`;
           current_song_name.innerHTML=songname;
           modelObj.playlist.forEach((obj)=>{
            if(obj.name==songname){
                console.log("object is",obj);
             // obj.image="./assests/defaultImage.gif";
             obj.songIsPlayed=true;
            }
            else{
             obj.songIsPlayed=false;
            }
            
            printPlaylist();
            console.log("song played from playlist")
            
        })
        var song_total_time=document.querySelector(".song_total_time");
        var duration = audio.duration;
        slider.max = duration;
        var min = parseInt(duration / 60);
       // console.log("min is",duration,"__",min);
       // console.log("duration%60",JSON.stringify(duration%60));
        //var string=JSON.stringify(duration%60);
        var string=(duration%60);
        if( (string)<10){
            (string)="0"+string;
            string=string.split(".")[0];
         //   console.log(typeof(string))
            
        }
        else{ string=JSON.stringify(string);
            string=string.split(".")[0];

        }
       
        //string=JSON.stringify(string*10);
      //  console.log("string is",string);
        //var secDuration=(string).substring(0,2);
       // console.log("secDuarion is",secDuration);
       //var sec = parseInt(secDuration);
        song_total_time.innerHTML = "0" + min + ":" + string;
    }, 1500);
 


    // setTimeout(function() {
    //     var song_total_time=document.querySelector(".song_total_time");
    //     var duration = audio.duration;
    //     slider.max = duration;
    //     var min = parseInt(duration / 60);
    //     console.log("min is",duration,"__",min);
    //     console.log("duration%60",JSON.stringify(duration%60));
    //     var string=JSON.stringify(duration%60);
    //     var string=string.split(".")[0];
    //     string=JSON.stringify(string*10);
    //     console.log("string is",string);
    //     var secDuration=(string).substring(0,2);
    //     console.log("secDuarion is",secDuration);
    //    var sec = parseInt(secDuration);
    //    sec+=1;
    //     song_total_time.innerHTML = "0" + min + ":" + sec;
    //     var song_curr_time=document.querySelector(".song_curr_time");
    //     var seconds=0;
    //     var interval=setInterval(function(){
    //       totalduration = audio.duration;
    //        console.log("total duration",totalduration);
    //     //   console.log(typeof(duration));
    //         seconds = parseInt(slider.value);
    //          if (seconds == totalduration) {
    //              console.log("inside clear interval");
    //                 clearInterval(interval); // time is up
    //               }

    //      console.log("slider.value",seconds);
    //      console.log(typeof(seconds));
            
    //         seconds+=1;
    //         if(seconds<10){
    //            // seconds=seconds%10;
                

    //             console.log((seconds));
    //             // seconds="0"+seconds;
                
                
    //     //         seconds=JSON.stringify(seconds);
    //     //         console.log(typeof(seconds));
    //     // //   seconds=seconds.padStart(2, 0);
    //     //    seconds="0"+seconds;
    //     //     console.log("seconds are 1",seconds);
    //     //     console.log(typeof(seconds));
    //     //   seconds=parseInt(seconds);
    //     //  // seconds=seconds.padStart(2, "0");
    //     //     console.log(typeof(seconds));
    //     //     console.log("seconds are",seconds)
    //     song_curr_time.innerHTML="00"+":"+seconds;
    //         }
    //         else if(seconds>=10){

    //             // if (seconds == duration) {
    //             //     clearInterval(interval); // time is up
    //             //   }
    //            // var actualseconds=0;

    //            // song_curr_time.innerHTML="01"+":"+actualseconds;
    //             var duration = seconds;
    //            // slider.max = duration;
    //             var min = parseInt(duration / 60);
    //             console.log("min is",duration,"__",min);
    //             console.log("duration%60",JSON.stringify(duration%60));
    //             var string=JSON.stringify(duration%60);
    //             var string=string.split(".")[0];
    //             string=JSON.stringify(string*10);
    //             console.log("string is",string);
    //             var secDuration=(string).substring(0,2);
    //             console.log("secDuarion is",secDuration);
    //            var sec = parseInt(secDuration);
    //            song_curr_time.innerHTML = "0" + min + ":" + sec;


    //         }
    //         console.log("seconds passed are",seconds);
            
    //     },1000)
        
    // }, 300);
    togglePlay();

}
function playSongIcon(){
    var play=document.querySelector("#play");
    //  play.innerHTML="";
    
     
      

     
   // console.log("******************************************************************************************")
    var prev=document.querySelector("#previous");
    var next=document.querySelector("#next");
    var slider=document.querySelector("#slider");
   
    play.addEventListener("click",togglePlay);
    
    prev.addEventListener("click",findprevPlay);
    next.addEventListener("click",findnextPlay);
  //  console.log("song is played");
  //  console.log("1",event.srcElement.parentElement.title);
  var songName=event.srcElement.parentElement.title;
    //var songName=event.srcElement.title;
   // console.log("src element",songName);
  
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_name == songName) {
            var songUrl = songs[i].song_url;
            var number=i;
            var songImg=songs[i].song_thumb;
            var songname=songs[i].song_name;
            console.log(songUrl,i);
            break;
        }
    }
    prev.setAttribute('name',number);
   next.setAttribute('name',number);
   audio.src = songUrl;
    flag=true;
   // audio.play();
  //  togglePlay();
    setInterval(function(){
        var audioPlayer=document.querySelector("#audioPlayer");
        
    audioPlayer.style.transform="translateY("+(0)+"px)";
    audioPlayer.style.transition="0.7s";
        var song_curr_time=document.querySelector(".song_curr_time");
        slider.value = audio.currentTime;
        var min = parseInt(  audio.currentTime/ 60);
        var secdur=audio.currentTime%60;
           // console.log("min is",secdur,"__",min);
            
            if( (secdur)<10){
                (secdur)="0"+ secdur;
                secdur=secdur.split(".")[0];
              //  console.log(typeof(secdur))
                
            }
            else{
           // console.log(typeof(secdur));
           
    //     var string=JSON.stringify( audio.currentTime%60);
    secdur=JSON.stringify(secdur);
      secdur=secdur.split(".")[0];
    //     string=JSON.stringify(string*10);
    //     console.log("string is",string);
    //     var secDuration=(string).substring(0,2);
    //     console.log("secDuarion is",secDuration);
    //    var sec = parseInt(secDuration);
            
           // console.log("duration%60---",secdur);
                
        }
        
         song_curr_time.innerHTML = "0" + min + ":" + secdur;
       // console.log(slider.value );
       },1000)
    
       setTimeout(function() {
           console.log("_______",songImg,"__________",songname);
           var equalizer=document.querySelector("#equalizer");
           var current_song_name=document.querySelector("#current_song_name");
           equalizer.innerHTML=`<img src=${songImg} >`;
           current_song_name.innerHTML=songname;
           modelObj.playlist.forEach((obj)=>{
               if(obj.name==songname){
                   console.log("object is",obj);
                // obj.image="./assests/defaultImage.gif";
                obj.songIsPlayed=true;
               }
               else{
                obj.songIsPlayed=false;
               }
               
               printPlaylist();
               console.log("song played from playlist")
               
           })
        var song_total_time=document.querySelector(".song_total_time");
        var duration = audio.duration;
        slider.max = duration;
        var min = parseInt(duration / 60);
       // console.log("min is",duration,"__",min);
       // console.log("duration%60",JSON.stringify(duration%60));
        //var string=JSON.stringify(duration%60);
        var string=(duration%60);
        if( (string)<10){
            (string)="0"+string;
            string=string.split(".")[0];
         //   console.log(typeof(string))
            
        }
        else{ string=JSON.stringify(string);
            string=string.split(".")[0];

        }
       
        //string=JSON.stringify(string*10);
      //  console.log("string is",string);
        //var secDuration=(string).substring(0,2);
       // console.log("secDuarion is",secDuration);
       //var sec = parseInt(secDuration);
        song_total_time.innerHTML = "0" + min + ":" + string;
    }, 1500);
   // console.log("slider value ",slider.value);

   


    togglePlay();


  //  console.log("flag is",flag);
}
function playSong(){
    var play=document.querySelector("#play");
    //  play.innerHTML="";
    
     
      

     
    console.log("******************************************************************************************")
    var prev=document.querySelector("#previous");
    var next=document.querySelector("#next");
    var slider=document.querySelector("#slider");
   
    play.addEventListener("click",togglePlay);
    
    prev.addEventListener("click",findprevPlay);
    next.addEventListener("click",findnextPlay);
    var songName=event.srcElement.title;
    //var songName=event.srcElement.parentElement.title;
    //var songName=event.srcElement.title;
   // console.log("src element",songName);
  
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].song_name == songName) {
            var songUrl = songs[i].song_url;
            var number=i;
            var songImg=songs[i].song_thumb;
            var songname=songs[i].song_name;
            console.log(songUrl,i);
            break;
        }
    }
    //console.log("song is played");
  //  console.log("1",event.srcElement.parentElement.title);
    var songName=event.srcElement.title;
    //console.log("src element",songName);
  
   
       
        for (var i = 0; i < songs.length; i++) {
            if (songs[i].song_name == songName) {
                var songUrl = songs[i].song_url;
                var number=i;
                console.log(songUrl,i);
                break;
            }
        }
        prev.setAttribute('name',number);
   next.setAttribute('name',number);
   audio.src = songUrl;
   flag=true;
   setInterval(function(){
    var audioPlayer=document.querySelector("#audioPlayer");
        
    audioPlayer.style.transform="translateY("+(0)+"px)";
    audioPlayer.style.transition="0.7s";
    var song_curr_time=document.querySelector(".song_curr_time");
    slider.value = audio.currentTime;
    var min = parseInt(  audio.currentTime/ 60);
    var secdur=audio.currentTime%60;
       // console.log("min is",secdur,"__",min);
        
        if( (secdur)<10){
            (secdur)="0"+ secdur;
            secdur=secdur.split(".")[0];
         //   console.log(typeof(secdur))
            
        }
        else{
     //   console.log(typeof(secdur));
       
//     var string=JSON.stringify( audio.currentTime%60);
secdur=JSON.stringify(secdur);
  secdur=secdur.split(".")[0];
//     string=JSON.stringify(string*10);
//     console.log("string is",string);
//     var secDuration=(string).substring(0,2);
//     console.log("secDuarion is",secDuration);
//    var sec = parseInt(secDuration);
        
        //console.log("duration%60---",secdur);
            
    }
    
     song_curr_time.innerHTML = "0" + min + ":" + secdur;
    //console.log(slider.value );
   },1000)
  
  
     
   
        setTimeout(function() {
            console.log("_______",songImg,"__________",songname);
            var equalizer=document.querySelector("#equalizer");
            var current_song_name=document.querySelector("#current_song_name");
            equalizer.innerHTML=`<img src=${songImg} >`;
            current_song_name.innerHTML=songname;
            modelObj.playlist.forEach((obj)=>{
                if(obj.name==songname){
                    console.log("object is",obj);
                 // obj.image="./assests/defaultImage.gif";
                 obj.songIsPlayed=true;
                }
                else{
                 obj.songIsPlayed=false;
                }
                
                printPlaylist();
                console.log("song played from playlist")
                
            })
        var song_total_time=document.querySelector(".song_total_time");
        var duration = audio.duration;
        slider.max = duration;
        var min = parseInt(duration / 60);
        //console.log("min is",duration,"__",min);
       // console.log("duration%60",JSON.stringify(duration%60));
        //var string=JSON.stringify(duration%60);
        var string=(duration%60);
        if( (string)<10){
            (string)="0"+string;
            string=string.split(".")[0];
           // console.log(typeof(string))
            
        }
        else{ string=JSON.stringify(string);
            string=string.split(".")[0];

        }
       
        //string=JSON.stringify(string*10);
       // console.log("string is",string);
        //var secDuration=(string).substring(0,2);
       // console.log("secDuarion is",secDuration);
       //var sec = parseInt(secDuration);
        song_total_time.innerHTML = "0" + min + ":" + string;
    }, 1500);
    //console.log("slider value ",slider.value);

   


    togglePlay();
   
    
    
    // var currentUrl=songs.forEach((obj)=>{
    //     if(obj.song_name==songName){
    //         console.log("1",obj.song_url);
    //        currentUrl=obj.song_url;
    //         return currentUrl;
    //         console.log("current url is",currenturl);
    //        // playNow(currenturl);
    //      

    //     }
       
        
    // })
   // var audio=document.querySelector("#audio");
//    prev.setAttribute('name',number);
//    next.setAttribute('name',number);
// //    prev.className(i);
// //    next.className(i);
//     audio.src = songUrl;
//     flag=true;
    
    
//     setTimeout(function(){
//         audio.play();
//     },1500);
    

    




//     // setInterval(function() {
//     //     slider.value = audio.currentTime;
//     // }, 1000);
//     // setTimeout(function() {
//     //     var song_total_time=document.querySelector(".song_total_time");
//     //     var duration = audio.duration;
//     //     slider.max = duration;
//     //     var min = parseInt(duration / 60);
//     //     console.log("min is",duration,"__",min);
//     //     console.log("duration%60",JSON.stringify(duration%60));
//     //     var string=JSON.stringify(duration%60);
//     //     var string=string.split(".")[0];
//     //     string=JSON.stringify(string*10);
//     //     console.log("string is",string);
//     //     var secDuration=(string).substring(0,2);
//     //     console.log("secDuarion is",secDuration);
//     //    var sec = parseInt(secDuration);
//     //     song_total_time.innerHTML = "0" + min + ":" + sec;
//     // }, 300);
//     console.log("slider value ",slider.value);

//     togglePlay();

    console.log("flag is",flag);

}
function togglePlay(){
    console.log("inside toggle play");
    console.log("flag is",flag);
   
if(flag){
    console.log("flag is",flag);
    var play=document.querySelector("#play");
    play.innerHTML="<img id='loadergif' src='./assests/loader.gif'>";
   
        setTimeout(function(){
            play.innerHTML='<i class="fas fa-pause"></i>';
            audio.play();
            flag=!flag;
        },1500)
   
   

    }
   
    


else{
    var play=document.querySelector("#play");
    console.log("flag is",flag);
    
        play.innerHTML='<i class="fas fa-play"></i>';
        audio.pause();
        flag=!flag;
        
   
    
    
}

}
function playNow(url){
    var audio=document.querySelector("#audio");
    audio.src=url;
//     const playPromise = audio.play();
// if (playPromise !== null){
//     playPromise.catch(() => { audio.play(); })
// }
  audio.play().catch(function() {
      console.log("do something");
        // do something
    });
    console.log("2",url);
    // audio.src=url;
    // audio.play();
}

