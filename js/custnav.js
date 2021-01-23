window.onload = function() {
    // let navActive = false;
    // nav_btn = document.querySelector('#nav-btn');
    // nav = document.querySelector('#nav');
    // nav_btn.addEventListener('click', function() {
    //     navActive = !navActive;
    //     if (navActive) {
    //         nav.className = 'active';
    //     } else {
    //         nav.className = '';
    //     }
    // })

    // Create a new Particle
    var ps = new ParticleSlider({
        ptlGap: 2,
        mouseForce: 1,
        monochrome: false ,
        ptlSize: 2,
        slideDelay: 6
        
    });
    var count = 0;
    
    var ptl = new ps.Particle(ps);
    
    // Set time to live of Particle to20 frames.
    ptl.ttl = null;
    ps.onNextSlide = function () {
        // if (count==0) {
        //     count++;
        //     var cnv = document.getElementById("particle-canvas");
        //     var gif = document.getElementById("gif");
        //     var data = document.getElementById("data");
        //     cnv.style.display = "none";
        //     gif.classList.add("show");
        //     data.classList.add("show");

        // }
    }
    
    var timeout = null;
    window.addEventListener('resize', function() {
        // Clear any existing debounced re-init
        clearTimeout(timeout);

        // Set up a re-init to fire in 1/2 a secound
        timeout = setTimeout(function() {
            ps.init();
        }, 500);
    });
  
  
  
};