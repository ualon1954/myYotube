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
  profile;
  url;

  constructor(videoDetails) {
    this.thumbnail = videoDetails.thumbnail;
    this.title = videoDetails.title;
    this.author = videoDetails.author;
    this.stats = videoDetails.stats;
    this.time = videoDetails.time;
    this.profile = videoDetails.profile;
    this.url = videoDetails.url;
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
  xhr.open('GET', 'backend/videos.json');
  xhr.send();
}

 /*
  {
    thumbnail: "thumbnails/thumbnail-1.webp",
    title: "זכיתי לאהוב",
    author: "עברי לידר" ,
    stats: "ישראלי",
    time: "4:40",
    profile: "channel-pictures/channel-1.jpg",
    url: "https://www.youtube.com/watch?v=G2Mx2kYX4jw&list=RDG2Mx2kYX4jw&start_radio=1"
    
  },
  {
    thumbnail: "thumbnails/thumbnail-2.webp",
    title: "יסמין מועלם - יוצאת מזה (Live קיסריה)",
    author: "יסמין מועלם" ,
    stats: "ישראלי",
    time: "3:40",
    profile: "channel-pictures/channel-2.jpg",
    url: "https://www.youtube.com/watch?v=ieRsVGMb-0g"
  },
  {
    thumbnail: "thumbnails/thumbnail-3.webp",
    title: "Bruce Springsteen - Dancing In the Dark",
    author: "ברוס ספרינגטין" ,
    stats: "לועזי",
    time: "3:58",
    profile: "channel-pictures/channel-3.jpg",
    url: "https://www.youtube.com/watch?v=129kuDCQtHs"
  },
  {
    thumbnail: "thumbnails/thumbnail-4.webp",
    title: "Nothing Compares 2 U",
    author: "שינייד או'קונור" ,
    stats: "לועזי",
    time: "5:09",
    profile: "channel-pictures/channel-4.jpg",
    url: "https://www.youtube.com/watch?v=0-EF60neguk"
  },
  {
      thumbnail: "thumbnails/thumbnail-5.webp",
      title: "Angels",
      author: "רובי וויליאמס",
      stats: "לועזי",
      time: "3:55",
      profile: "channel-pictures/channel-5.jpg",
      url: "https://www.youtube.com/watch?v=luwAMFcc2f8"
  }, 
  {
      thumbnail: "thumbnails/thumbnail-6.webp",
      title: "היא לא דומה",
      author: "ארקדי דוכין" ,
      stats: "ישראלי",
      time: "2:57",
      profile: "channel-pictures/channel-6.jpg",
      url: "https://www.youtube.com/watch?v=4W6mwAta1Jg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-7.webp",
    title: "לרקוד בגשם",
    author: "אמילי קופר",
    stats: "ישראלי",
    time: "3:19",
    profile: "channel-pictures/channel-7.jpg",
    url: "https://www.youtube.com/watch?v=Dwf_jOdHWas"
  },
  {
    thumbnail: "thumbnails/thumbnail-8.webp",
    title: "בגלל הרוח",
    author: "שלומי שבת",
    stats: "ישראלי",
    time: "4:19",
    profile: "channel-pictures/channel-8.jpg",
    url: "https://www.youtube.com/watch?v=jSK6e-oKSpY"
  },
  {
    thumbnail: "thumbnails/thumbnail-9.webp",
    title: "OLD MAN",
    author: "ניל יאנג",
    stats: "לועזי",
    time: "3:32",
    profile: "channel-pictures/channel-9.jpg",
    url: "https://www.youtube.com/watch?v=OuVIJlSDOs0"
  }   
  
].map((videoDetails) => {
  return new Video(videoDetails);
  const categories = [...new set(Video.map((item)=> {return item}))];
  console.log(categories);  
}); */
