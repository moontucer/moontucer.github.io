/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["", "Software Engineering", "Data Science", "Blockchain", "Computer Vision"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }

            function closeLoadingScreen(loadingScreen) {
                loadingScreen.style.transitionDuration = ".5s";
                loadingScreen.style.transitionTimingFunction = "cubic-bezier(0,.75,.25,1)";
                loadingScreen.style.opacity = 0;
                loadingScreen.style.borderRadius = "40px";
                loadingScreen.style.transform = "scale(0.75)";
                loadingScreen.style.cursor = "initial";
                setTimeout(() => {
                  loadingScreen.parentNode.removeChild(loadingScreen);
                }, 500)
              }
              
              document.body.onload = ()=>{
                  // Here I can load some data (any) and then call closeLoadingScreen(lscreen) function such as:
                lscreen = document.getElementById("loading-screen");
                hero = document.getElementById("hero");
                
                setTimeout(()=>{closeLoadingScreen(lscreen)}, 5000); // Juste pour la démonstration
              }

  $(document).ready(function(){
    $("#myButton").click(function() {
        alert("Thanks for your interest!");
    });
});
