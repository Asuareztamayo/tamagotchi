$(document).ready(function () {
    //variables
    let btnInfo = document.getElementById("btnInfo");
    let mainInfo = document.getElementById("info");
    let mainHome = document.getElementById("home");
    let btnBack = document.getElementById("btnBack");
    let backHome = document.getElementById("backHome");
    let mainGame = document.getElementById("game");
    let gameOver = document.getElementById("gameover");
    let start = document.getElementById("start");
    let fondo1 = document.getElementById("fondo1");
    let fondo2 = document.getElementById("fondo2");
    let happy = document.getElementById("happy");
    let sad = document.getElementById("sad");
    let burger = document.getElementById("burger");
    let sleep = document.getElementById("sleep");
    let bored = document.getElementById("bored");
    let progressBarFood = document.getElementById("barFood").ariaValueNow;
    let progressBarSleep = document.getElementById("barSleep").ariaValueNow;
    let progressBarBoring = document.getElementById("barBoring").ariaValueNow;
    let restart = document.getElementById("restart");
    let starwars = document.getElementById("starwars");
    let w = window.innerWidth;
    let intro = document.getElementsByClassName("intro")[0];
    let h = window.innerHeight;
    let historia = document.getElementsByClassName("historia")[0];
    let parrafos = document.getElementsByClassName("parrafos")[0];

    intro.style.fontSize = w / 30 + "px";
    historia.style.fontSize = w / 20 + "px";
    parrafos.style.height = h + "px";

    //Events
    window.addEventListener("resize", function () {
        w = window.innerWidth;
        h = window.innerHeight;
        intro.style.fontSize = w / 30 + "px";
        historia.style.fontSize = w / 20 + "px";
        parrafos.style.height = h + "px";
    });

    btnInfo.addEventListener("click", () => {
        pageInfo();
        starwars.play();
        starwars.loop = true;
    });

    btnBack.addEventListener("click", () => {
        starwars.pause();
        pageHome();
    });

    backHome.addEventListener("click", () => {
        location.reload();
    });

    restart.addEventListener("click", () => {
        location.reload();
    });

    start.addEventListener("click", () => {
        starwars.play();
        pageGame();
        tictac();
    });

    burger.addEventListener("click", () => {
        giveFood();
        progressBar();
        eating();
    });

    sleep.addEventListener("click", () => {
        goToSleep();
        progressBar();
        sleeping();
    });

    bored.addEventListener("click", () => {
        playWhithGrogu();
        progressBar();
        playing();
    });

    //functions
    function animar() {
        intro.className = "intro texto_intro animación_intro";
        historia.className = "historia texto_historia animación_historia";
    }

    function pageInfo() {
        if (mainHome.style.display == "block") {
            mainHome.style.display = "none";
        }
        if (mainInfo.style.display == "none") {
            mainInfo.style.display = "block";
        }
        animar();
        starwars.play();
    }

    function pageHome() {
        if (mainInfo.style.display == "block") {
            mainInfo.style.display = "none";
        }
        if (mainHome.style.display == "none") {
            mainHome.style.display = "block";
        }
        if (mainGame.style.display == "block") {
            mainGame.style.display = "none";
        }
    }

    function pageGame() {
        if (mainHome.style.display == "block") {
            mainHome.style.display = "none";
        }
        if (mainGame.style.display == "none") {
            mainGame.style.display = "block";
        }
    }

    function died() {
        if (mainGame.style.display == "block") {
            mainGame.style.display = "none";
        }
        if (gameOver.style.display == "none") {
            gameOver.style.display = "block";
        }
    }

    function tictac() {
        let exhaust = setInterval(function () {
                if (progressBarFood <= 0 || progressBarSleep <= 0) {
                    return;
                }
                progressBarFood = progressBarFood - 2;
                progressBarSleep = progressBarSleep - 2;
                progressBarBoring = progressBarBoring - 2;
                progressBar();
                if (progressBarFood <= 0 || progressBarSleep <= 0) {
                    died();
                }
        }, 3000);
    }

    function progressBar() {

        $("#barFood").css({ width: progressBarFood + "%" });
        $("#barSleep").css({ width: progressBarSleep + "%" });
        $("#barBoring").css({ width: progressBarBoring + "%" });
        if (progressBarFood <= 0 || progressBarSleep <= 0) {
            died();
        }
        change();

    }

    function playing() {
        Swal.fire({
            imageUrl: "img/yodaJuega.gif",
            imageAlt: "Playing",
        });
    }

    function sleeping() {
        Swal.fire({
            imageUrl: "img/yodaDuerme.gif",
            imageAlt: "Sleep grogu, sleep",
        });
    }

    function eating() {
        Swal.fire({
            imageUrl: "img/yodaCome.gif",
            imageAlt: "Grogu eats",
        });
    }

    function change() {
            if (
                progressBarFood < 50 ||
                progressBarSleep < 50 ||
                progressBarBoring < 50
            ) {
                changeWallpaper2();
                changeSad();
            } else {
                changeWallpaper();
                changeHappy();
            }

            if (progressBarBoring <= 25) {
                Swal.fire("Play with me");
        }
    }

    function giveFood() {
        if (progressBarFood >= 75) {
            return;
        }
        if (progressBarFood <= 0 || progressBarSleep <= 0) {
            return;
        }
        progressBarFood = parseInt(progressBarFood) + 50;
        progressBarSleep = progressBarSleep - 15;
        progressBarBoring = progressBarBoring - 15;
    }

    function goToSleep() {
        if (progressBarSleep >= 75) {
            return;
        }
        if (progressBarFood <= 0 || progressBarSleep <= 0) {
            return;
        }
        progressBarSleep = parseInt(progressBarSleep) + 50;
        progressBarFood = progressBarFood - 15;
        progressBarBoring = progressBarBoring - 15;
    }

    function playWhithGrogu() {
        if (progressBarBoring >= 75) {
            return;
        }
        if (progressBarFood <= 0 || progressBarSleep <= 0) {
            return;
        }
        progressBarBoring = parseInt(progressBarBoring) + 50;
        progressBarFood = progressBarFood - 15;
        progressBarSleep = progressBarSleep - 15;
    }

    function changeWallpaper2() {
        if (fondo1.style.display == "block") {
            fondo1.style.display = "none";
        }
        if (fondo2.style.display == "none") {
            fondo2.style.display = "block";
        }
    }

    function changeWallpaper() {
        if (fondo2.style.display == "block") {
            fondo2.style.display = "none";
        }
        if (fondo1.style.display == "none") {
            fondo1.style.display = "block";
        }
    }

    function changeSad() {
        if (happy.style.display == "block") {
            happy.style.display = "none";
        }
        if (sad.style.display == "none") {
            sad.style.display = "block";
        }
    }

    function changeHappy() {
        if (sad.style.display == "block") {
            sad.style.display = "none";
        }
        if (happy.style.display == "none") {
            happy.style.display = "block";
        }
    }
});
