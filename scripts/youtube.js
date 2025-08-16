import {videos, loadVideos} from '../data/videos.js';

//mport {myfunction} from 'main.js';

let videosHTML  = '';

export function test() {
  alert('test')
}

let grid = document.querySelector(".video-grid");
let filterInput = document.getElementById("filterInput");

const themeButton = document.querySelector(".theme-button i");
// initalize dark mode based on localStorage
if(localStorage.getItem("darkMode") === "enabled") {
  document.body .classList.add("dark-mode"); 
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle dark mode when button is clicked
themeButton.addEventListener("click", () => {
  const isDarkModeBody =  document.body.classList.toggle("dark-mode");
  const isDarkModeHeader =  document.querySelector(".header").classList.toggle("dark-mode");
  const isDarkModeSlider =  document.querySelector(".slider").classList.toggle("dark-mode");
  // const isDarkModeTilte =  document.querySelectorAll(".video-title").classList.toggle("dark-mode");
  // const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkModeBody ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkModeBody && isDarkModeHeader && isDarkModeSlider);
  themeButton.classList.toggle("uil-moon", !isDarkModeBody && !isDarkModeHeader && !isDarkModeSlider);
});

//document.getElementById("israel").onclick = function() {renderMyVideos("ישראלי")};
const menuItems = document.querySelectorAll('a');
let list = Array(document.querySelectorAll('myDIV'));
const gallary = document.querySelectorAll('img');

//slider
const tabs = document.querySelector(".tabs"),
allTabs = tabs.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});
let category = '';
allTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
        //console.log(tab.innerHTML);
        category = tab.innerHTML;
        loadVideos(renderVideosGrid);
    });
});
const dragging = (e) => {
    if(!isDragging) return;
    tabs.classList.add("dragging");
    tabs.scrollLeft -= e.movementX;
    handleIcons(tabs.scrollLeft)
}
const dragStop = () => {
    isDragging = false;
    tabs.classList.remove("dragging");
}
tabs.addEventListener("mousedown", () => isDragging = true);
tabs.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
//slider

function reset_menuItems_color()
{
  menuItems.forEach((item)=>{
     
        //item.style.background = 'hsl(0,0,70%)';
        item.style.color = 'black';
        item.style.background = 'whitesmoke';
        item.style.fontWeight = 'normal';
    });
}

function filterVideo(value) {
  let buttons = document.querySelectorAll("tweet-button");
  buttons.forEach((button) => {
    if (value == button.innerText) {
      button.classList.add("active");
    } else {
      button.classList.add("remove");
    }
  });
}

//reset_menuItems_color();


/*
const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  console.log(value);
  videos.forEach(video => {
    const isVisible =
    video.title.toLowerCase().includes(value)
    //video.element.classList.toggle("hide", !isVisible)
    })
})
*/

loadVideos(renderVideosGrid)

function renderVideosGrid() {
  let videosHTML = '';
videos.forEach((video) => {
  if (category === "הכל" || category === '') {
      console.log("הכל");
      videosHTML += `
      <div class="items js-video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail js-thumbnail" data-video-url ="${video.url}" src="${video.thumbnail}">
          <div class="video-time">${video.time}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture"
            src="${video.profile}">
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.title}
            </p>
            <p class="video-author">
            ${video.author}
            </p>
            <p class="video-stats">
              ${video.stats}
            </p>
          </div>
        </div>
    </div>
    `;
    }
    else if(video.stats === category) {
      //console.log("אחר");
      
      videosHTML += `
      <div class="items js-video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail js-thumbnail" data-video-url ="${video.url}" src="${video.thumbnail}">
          <div class="video-time">${video.time}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture"
            src="${video.profile}">
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.title}
            </p>
            <p class="video-author">
            ${video.author}
            </p>
            <p class="video-stats">
              ${video.stats}
            </p>
          </div>
        </div>
    </div>
    `;
    }
  });

  


//renderMyVideos("ישראלי");
//renderMyVideos("לועזי");


//console.log(videosHTML);

document.querySelector('.js-video-grid').innerHTML = videosHTML;

function openTab(url,target) {
  window.open(url);
  }


// document.querySelector('.youtube-logo').addEventListener('click', () => {
//   window.open('https://www.youtube.com/','_blank');

// });



document.querySelector('.home').addEventListener('click', () => {
 //console.log('home');
  //window.open('https://ualondev.com/');

});

// document.querySelector('.music').addEventListener('click', () => {
//   //console.log('home');
//    window.open('https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ/','_blank');
 
//  });

 
 //document.querySelector('.search-bar').addEventListener('Enter', () => {
  //console.log('enter');
   //window.open('https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ/','_blank');
 
 //});
  
// document.querySelectorAll('.js-thumbnail').forEach((thumbnail) => {
//   thumbnail.addEventListener('click', () => {
//     console.log("hello");
//     const videoUrl = thumbnail.dataset.videoUrl;
//     //addToCart(productId);
//     //updateCartQuantity()
//     openTab(videoUrl,'_blank');
      
//    //console.log(videoUrl);
//   });
//     //console.log(cart);
//   });

 filterInput.addEventListener('keyup', filterVideos);

// callback function 
function filterVideos(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.items')
    console.log('keyup');

    for (let i = 0; i < item.length; i++){
        let title = item[i].querySelector('.video-title');
        let author = item[i].querySelector('.video-author');
        let time = item[i].querySelector('.video-time');
        if(title.innerHTML.toUpperCase().indexOf(filterValue) > -1
           || author.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "block";
        }else{
            item[i].style.display = "none";
        }

    }
}
  }
