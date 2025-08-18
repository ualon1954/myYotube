//import data from '../../backend/test1.json' with { type: "json" };
//console.log(data);

/*
fetch("../../backend/test.json")
  .then(respnse => respnse.json())
  .then(value => console.log(value))
*/
class Video {
  thumbnail;
  title;
  author;
  stats;
  time;
  // profile;
  //url;

  constructor(videoDetails) {
    this.thumbnail = videoDetails.thumbnail;
    this.title = videoDetails.title;
    this.author = videoDetails.author;
    this.stats = videoDetails.stats;
    this.time = videoDetails.time;
    // this.profile = videoDetails.profile;
    //this.url = videoDetails.url;
  }
 }

 export let videos = [];

 function loadVideosFetch() {
    const promise = fetch(
      'backend/videos.json'
    ).then((response) => {
       return response.json();
      
    }).then((videosData) => {
      videos = videosData.map((videoDetails) => { 
        return new Video(videoDetails);

    });

    console.log('load videos');
  }).catch((error) => {
    console.log('Unexpected error. Please try again later.');
  });

   return promise;
  }

 

  
  /*
  loadVideosFetch().then(() => {
    console.log('next step');
  });
 */

  export function loadVideos(fun) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      videos = JSON.parse(xhr.response).map((videoDetails) => {
        return new Video(videoDetails);
      });
     
      console.log('load videos');
      fun();
    });
      
  xhr.addEventListener('error', (error) => {
    console.log('Unexpected error. Please try again later.');
  })  
  xhr.open('GET', 'backend/photos.json');
  xhr.send();
}

