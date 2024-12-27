const tab = document.querySelector('.tabs'),
      badges = tab.querySelectorAll('.tab'),
      icons = document.querySelectorAll('.icon span'),
      {clientWidth, scrollWidth} = tab;

      badges.forEach(badge => {
        badge.addEventListener('click', ()=> {
           //tab.querySelector('.active').classList.remove('active');
           // badge.classList.add('active');

            badge.scrollIntoView({
                inline: 'center'
            })
        })

      });  

      icons.forEach(icon => {
        icon.addEventListener('click', ()=> {
            tab.style.scrollBehavior = "";
            tab.scrollLeft -= icon.classList.contains('right-arrow') ? 300 : -300;
        })

      });  

      tab.addEventListener('scroll', (e)=>{
        //alert(e.target.scrollRight);
        updateIcons(e.target.scrollLeft);

      })
      tab.addEventListener('whell', (e)=>{
        tab.style.scrollBehavior = "auto";
        tab.scrollLeft += e.deltaY;

      })
      //alert(scrollWidth);
      function updateIcons(scrolled_width) {
          //--- LTR ----
          //icons[0].parentElement.classList.toggle('hide', scrolled_width <= 1);
          //icons[1].parentElement.classList.toggle('hide', scrollWidth - (clientWidth + scrolled_width) <= 1);

        //--- RTL ---
       //alert(scrolled_width);
        icons[0].parentElement.classList.toggle('hide', scrolled_width >= -1);  //right-arrow
        icons[1].parentElement.classList.toggle('hide',scrollWidth - (clientWidth - scrolled_width)  <= 1); //left-arrow
        //alert(scrolled_width);
        //alert(scrollWidth);
        let temp = scrollWidth - (clientWidth - scrolled_width);
       // console.log(temp);
        //console.log(clientWidth);
        //console.log(scrollWidth);
        //console.log(scrolled_width);
      }
