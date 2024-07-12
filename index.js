<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RealEstate</title>

    <link rel="icon" href="favicon.ico"/>

    <!-- Font Awesome CDN link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    <!-- Custom CSS file link -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<!-- Header section starts -->

<header>
    <button onclick="darkMode()"><i class="fa-solid fa-moon"></i></button>
    <button onclick="lightMode()"><i class="fa-solid fa-sun"></i></button>
    <a href="#" class="logo"><span>real</span>Estate</a>

    <nav class="navbar nav-wrapper">
        <ul class="nav-list">
            <li><a href="index.html" class="active">Home</a></li> 
            <li><a href="services.html">Services</a></li> 
            <li><a href="featured.html">Featured</a></li> 
            <li><a href="#Reviews">Reviews</a></li> 
            <li><a href="#agents">Agents</a></li>
            <li><a class="contact" href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>

<!-- Loading element -->
<div class="spinner-wrapper">
    <div class="spinner"></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="index.js"></script>
<script>
    $(document).ready(function() {
        // Preloader
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    function darkMode() {
        var element = document.body;
        element.className = "dark-mode";
        let bg = document.querySelector('.nav-list');
        bg.style.background = 'linear-gradient(45deg, #efdbdb, #00838f)';
    }

    function lightMode() {
        var element = document.body;
        element.className = "light-mode";
        let bg = document.querySelector('.nav-list');
        bg.style.background = 'linear-gradient(45deg, #efdbdb, #f97a7a)';
    }

    window.addEventListener('resize', function(){
        addRequiredClass();
    });

    function addRequiredClass() {
        if (window.innerWidth < 1210) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }

    window.onload = addRequiredClass;

    let hamburger = document.querySelector('.hamburger');
    let mobileNav = document.querySelector('.nav-list');

    let bars = document.querySelectorAll('.hamburger div');

    let isActive = false;

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        if(!isActive) {
            bars[0].style.transform = 'rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg)';
            isActive = true;
        } else {
            bars[0].style.transform = 'rotate(0deg)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0deg)';
            isActive = false;
        }
    });
</script>
</body>
</html>
