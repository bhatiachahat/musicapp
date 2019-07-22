function Song(id,name,url,image){
    this.id=id;
    this.name=name;
    this.url=url;
    this.image=image;
    this.songIsPlayed=false;
    this.defaultimage="./assests/defaultImage.gif";

}
var modelObj={
    "playlist":[],
    addSong:function(id,name,url,image,songIsPlayed,defaultimage){
        var newObject=new Song(id,name,url,image,songIsPlayed,defaultimage);
        if(this.playlist.length<1){
            this.playlist.push(newObject);
        }
        else if(this.playlist.length){
         
            var newname=newObject.name;
            for(var i=0;i<this.playlist.length;i++){
                var exists=false;
                if(this.playlist[i].name===newname){
                    console.log("///////",this.playlist[i].name);
                    console.log("|||",newname);
                    exists=true;
                   console.log("song alredy exists",exists);
                   exit;
                }
                else{
                    console.log("song does not exist",exists);
                    exists=false;
                    
                }
            }
            if(!exists){
                this.playlist.push(newObject);
            }

        }
    },

    // addSong:function(id,name,url,image,songIsPlayed,defaultimage)
    // {
    //     var flag=false;
    //     var newObject=new Song(id,name,url,image,songIsPlayed,defaultimage);
    //     console.log("newObject",newObject);
    //     if(this.playlist.length>=1){
    //         console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
    //     for(var i=0;i<this.playlist.length;i++){
    //         if(this.playlist[i].name==newObject.name){
    //         //     console.log("1__________",this.playlist[i].id,"2_________",newObject.id);

    //           flag=true;
    //         console.log("name is same");
    //         }
    //         else{
               
                
    //             console.log("not same");
    //            flag=false;
    //         }
    //         // if(!flag){
    //         //     this.playlist.push(newObject);
    //         //  }
    //         console.log("flag is",flag);
    //     }
    //     console.log("flag is",flag);
    //     if(!flag){
    //         this.playlist.push(newObject);
    //     }
    // }
    // else{
    //     this.playlist.push(newObject);
    // }
    //     //console.log("playlist is__________________________________________________",this.playlist.length);


    // },
    deleteSong:function(id){
        
        this.playlist= this.playlist.filter(function (obj) {
            return obj.id !== id;
          });
          console.log("after delete",this.playlist);

    }
}