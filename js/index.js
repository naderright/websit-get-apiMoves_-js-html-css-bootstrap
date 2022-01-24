
var ImgUrl = 'http://image.tmdb.org/t/p/w500';

var trindMovesURL = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3AUGFfQ26DXmgNxyv2UL-Yh-sfsONvNX7Xdrbu9xjy52NyMzCusdwlTvk";

moves(trindMovesURL);
async function moves(url) {
    var allMoves = await fetch(url);
    var finalALlMoves = await allMoves.json();

    console.log(finalALlMoves);
    // test(finalALlMoves.results);

    moveSlid(finalALlMoves.results);
    displayMoves(finalALlMoves.results);

    slderMoves(finalALlMoves.results);

    naderlist(finalALlMoves.results);

    console.log(finalALlMoves.results)
};


// ============================    curousel home   ================================
// start slidshow-home
var MovesHome = document.getElementById("move-list");
var allMovesHome = document.querySelectorAll(".item-move");
var arrow = document.querySelector(".icon-slid-move");
var arrowReturn = document.querySelector(".icon-slid-move-return");
console.log(arrowReturn)
// console.log(MovesHome);
// console.log(allMovesHome);
// console.log(arrow);

function slderMoves(totalMove) {
    console.log(totalMove)


    var indexImg = 0;
    var translateMove = 0;

    arrow.addEventListener("click", function () {

        if (indexImg <= totalMove.length - 13) {
            MovesHome.style.transform = `translateX(${translateMove + (-242)}px)`;
            arrowReturn.style.display = "block";
            console.log(indexImg);
            translateMove += -242;
            indexImg++;
        } else {
            indexImg = 0;
            translateMove = 0;
            MovesHome.style.transform = `translateX(${translateMove}px)`;
            arrowReturn.style.display = "none";

        }

    })


    arrowReturn.addEventListener('click', function () {
        if (translateMove < 0) {
            MovesHome.style.transform = `translateX(${translateMove - (-242)}px)`;
            console.log("mnb");
            translateMove += 242;
            console.log(translateMove)
            if (translateMove > -242) {
                arrowReturn.style.display = "none";

            }

        }
        // if(translateMove=0){
        //     arrowReturn.style.display="none";

        // }
    })



};
// ================================================================================


// end slidshow-home



// var showMoves = document.getElementById("moves-show");

// function test(title) {
//     var name;
//     for (var i = 0; i < title.length; i++) {
//         // console.log(title[i].title);
//         if (title[i].title == undefined) {
//             name = title[i].name;
//         } else {
//             name = title[i].title;
//         }
//     }
//     console.log(name);
//     return name;

// }

// ==============================     display moves   ===================

function displayMoves(data) {

    temp = ``;
    for (var i = 0; i < data.length; i++) {
        if (data[i].title != undefined) {
            temp += `<div class="col-md-3">
            <div class="poster-move text-center">
                <img src="${ImgUrl}${data[i].poster_path}" alt="">
                <div class="poster-data" id="poster-data">
                    <h3 class="name-move">${data[i].title}</h3>
                     
                </div>
            </div>
        </div>`
        } else {
            temp += `<div class="col-md-3">
            <div class="poster-move text-center">
                <img src="${ImgUrl}${data[i].poster_path}" alt="">
                <div class="poster-data" id="poster-data">
                    <h3 class="name-move">${data[i].name}</h3>
                     
                </div>
            </div>
        </div>`

        }

    };
    document.getElementById("moves-show").innerHTML = temp;
};
// document.getElementById("name-move").style="nadermohame";
// ==============================================================================================

// ============               function to display details for moves            =============================================

function naderlist(listMoves) {

    var listNameMoves = Array.from(document.getElementsByClassName("name-move"));

    var currendIndex;

    for (var i = 0; i < listNameMoves.length; i++) {
        listNameMoves[i].addEventListener('click', function (e) {
            currendIndex = listNameMoves.indexOf(e.target);
            if (listMoves[currendIndex].title != undefined) {
                document.getElementById("display-data").style.right = "0";

                document.getElementById("img-current").setAttribute('src', `${ImgUrl}${listMoves[currendIndex].poster_path}`);
                document.getElementById("name-poster").innerHTML = `${listMoves[currendIndex].title}`;
                document.getElementById("desc-poster").innerHTML = `${listMoves[currendIndex].overview}`;
            } else {
                document.getElementById("display-data").style.right = "0";

                document.getElementById("img-current").setAttribute('src', `${ImgUrl}${listMoves[currendIndex].poster_path}`);
                document.getElementById("name-poster").innerHTML = `${listMoves[currendIndex].name}`;
                document.getElementById("desc-poster").innerHTML = `${listMoves[currendIndex].overview}`;
            }




            var num = listMoves[currendIndex].vote_average / 2;
            console.log(Number.isInteger(num))
            var star = document.getElementById("star-move");
            console.log("hygiu")
            if (num == 0) {
                star.innerHTML = `<i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>`
            }
            if (Number.isInteger(num)) {
                // if(num==0){
                //     star.innerHTML=`<i class="far fa-star star-emb"></i>
                //     <i class="far fa-star star-emb"></i>
                //     <i class="far fa-star star-emb"></i>
                //     <i class="far fa-star star-emb"></i>
                //     <i class="far fa-star star-emb"></i>`
                // }
                if (num == 1) {

                    star.innerHTML = `<i class="fas fa-star"></i>`
                }
                else if (num == 2) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>`}
                else if (num == 3) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
                }
                else if (num == 4) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
                }
                else if (num == 5) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
                }
                else {
                    star.innerHTML = `<i class="far fa-star star-emb"></i>
                    <i class="far fa-star star-emb"></i>
                    <i class="far fa-star star-emb"></i>
                    <i class="far fa-star star-emb"></i>
                    <i class="far fa-star star-emb"></i>`
                }
            } else {
                if (num < 2) {
                    var star = document.getElementById("star-move");
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>`
                }
                else if (num < 3 && num > 2) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>`}
                else if (num > 3 && num < 4) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>`
                }
                else if (num > 4 && num < 5) {
                    star.innerHTML = `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>`
                }

            }
            console.log(num);
            console.log(currendIndex);
            console.log(listMoves[currendIndex])
        });
    }


};
// ===========================================================================
// close details for moves
console.log(document.getElementById("close-show"))

document.getElementById("close-show").addEventListener('click', function () {
    document.getElementById("display-data").style.right = "100%";
});
// =======================================================================


var homeFoucs = document.getElementById("fa-home");

homeFoucs.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// ==============
var movSid = document.getElementById("movdb");

movSid.addEventListener('click', function () {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
})
// ============

var movbar = document.querySelector(" #movbar");
movbar.addEventListener('click', function () {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
})


var trendbar = document.getElementById("trend");
trendbar.addEventListener('click', function () {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
})

// ============================================================================
// ===================   sidebar       ===================================
var leave = document.getElementById("leave");
var iconLeave = document.getElementById("icon-leave");
var leaveIn = document.getElementById("icon-leavein");

iconLeave.addEventListener('click', function () {
    leave.style.left = "0";
    iconLeave.style.display = "none";

});
leaveIn.addEventListener('click', function () {
    leave.style.left = "-50px";
    iconLeave.style.display = "block";

});
// ==========================================================================

var up = document.querySelector(".up");
console.log(up)

window.addEventListener('scroll', function () {
    console.log(this.scrollY)
    if (this.scrollY >= 200) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
})

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



// ===========================================
// wight web
var ball = document.querySelector(".toggle-ball");
var items = document.querySelectorAll(
    ".movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.navbar,.about,.trend , .footer,.trend::after"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

// ===================================================



//=======================================    slider home    ====================================

var sliderHome = document.getElementById("move-list");


function moveSlid(mslid) {

    temp = ``;
    for (var i = 0; i < mslid.length; i++) {

        temp += `<div class="item-move">
        <img class="scroll-move" src="${ImgUrl}${mslid[i].poster_path}" alt="">
    </div>`
    }

    sliderHome.innerHTML = temp;

    //   ==============   home watch move  from slid home  =============================

    var listNameMoves = Array.from(document.getElementsByClassName("scroll-move"));
    console.log(listNameMoves);
    let nameMoveHome = document.getElementById("name-poster-home");
    let descMoveHome = document.getElementById("desc-poster-home");
    let starMove = document.getElementById("star-move-home");
    console.log(starMove)

// =========

    document.getElementById("home").style.backgroundImage = `url(${ImgUrl}${mslid[0].backdrop_path})`;
    if (mslid[0].name != undefined) {
        nameMoveHome.innerHTML = `${mslid[0].name}`;
        descMoveHome.innerHTML = `${mslid[0].overview}`;

    } else {
        nameMoveHome.innerHTML = `${mslid[0].title}`;
        descMoveHome.innerHTML = `${mslid[0].overview}`;
    }

    let vote = mslid[0].vote_average/2
    console.log(Number.isInteger(vote))
    if(Number.isInteger(vote)){
        if(vote==1){
            starMove.innerHTML = `<i class="fas fa-star"></i>`;
        }else if(vote==2){
            starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            `
        }else if(vote==3){
            starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            `
        }else if(vote==4){
            starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            `
        }else if(vote==5){
            starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            `
        }
    }else{
        if (vote < 2) {
            starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>`
        }
        else if (vote < 3 && vote > 2) {
          starMove.innerHTML = `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half"></i>`}
        else if (vote > 3 && vote < 4) {
          starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>`
        }
        else if (vote > 4 && vote < 5) {
          starMove.innerHTML = `<i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>`
        }

    }

// ===========


    let currendIndex;

    for (let i = 0; i < listNameMoves.length; i++) {

        listNameMoves[i].addEventListener('click', function (e) {

            currendIndex = listNameMoves.indexOf(e.target)

            document.getElementById("home").style.backgroundImage = `url(${ImgUrl}${mslid[currendIndex].backdrop_path})`
            // console.log(document.getElementById("home"))
            console.log(mslid[currendIndex])
            if (mslid[currendIndex].title != undefined) {
                nameMoveHome.innerHTML = `${mslid[i].title}`;
                // nameMoveHome.innerHTML=`${mslid[i].title}`;
                descMoveHome.innerHTML = `${mslid[i].overview}`;

            }
            else {
                nameMoveHome.innerHTML=`${mslid[i].name}`;
                descMoveHome.innerHTML=`${mslid[i].overview}`;
            }
            var num = mslid[currendIndex].vote_average / 2;
                      console.log(Number.isInteger(num))
                    //   var star = document.getElementById("star-move");
                      if (num == 0) {
                          starMove.innerHTML = `<i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>`
                      }
                      if (Number.isInteger(num)) {
                          // if(num==0){
                          //     star.innerHTML=`<i class="far fa-star star-emb"></i>
                          //     <i class="far fa-star star-emb"></i>
                          //     <i class="far fa-star star-emb"></i>
                          //     <i class="far fa-star star-emb"></i>
                          //     <i class="far fa-star star-emb"></i>`
                          // }
                          if (num == 1) {
        
                              starMove.innerHTML = `<i class="fas fa-star"></i>`
                          }
                          else if (num == 2) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>`}
                          else if (num == 3) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>`
                          }
                          else if (num == 4) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>`
                          }
                          else if (num == 5) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>`
                          }
                          else {
                            starMove.innerHTML = `<i class="far fa-star star-emb"></i>
                              <i class="far fa-star star-emb"></i>
                              <i class="far fa-star star-emb"></i>
                              <i class="far fa-star star-emb"></i>
                              <i class="far fa-star star-emb"></i>`
                          }
                      } else {
                          if (num < 2) {
                              var star = document.getElementById("star-move");
                              starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star-half"></i>`
                          }
                          else if (num < 3 && num > 2) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half"></i>`}
                          else if (num > 3 && num < 4) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star-half"></i>`
                          }
                          else if (num > 4 && num < 5) {
                            starMove.innerHTML = `<i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star-half"></i>`
                          }
        
                      }
                      console.log(num);
                      console.log(currendIndex);
                      console.log(mslid[currendIndex])
                  });
              }


};



