

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'http://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY + '&query=';

console.log(searchURL);

async function moves(url) {
    let moves = await fetch(url);
    let finall = await moves.json();
    console.log(finall.results);
    if (finall.results.length != 0) {
        document.getElementById("search-home").style.display = 'none';
        document.getElementById("footer").style.bottom = 'inherit';
        document.getElementById("warrning").style.display = 'none';
        displayMoves(finall.results);
        naderlist(finall.results);
    } else {
        document.getElementById("warrning").style.display = 'block';
    }



}

const iconSearch = document.getElementById("icon-search");
const inputSearch = document.getElementById("search");

iconSearch.addEventListener('click', () => {
    console.log(inputSearch.value)
    let title = inputSearch.value;
    if (title != "") {

        moves(searchURL + title);

    }
    inputSearch.value = '';

})





function displayMoves(data) {
    console.log(data)
    temp = ``;
    for (var i = 0; i < data.length; i++) {
        if (data[i].title != undefined) {
            temp += `<div class="col-md-3">
            <div class="poster-move text-center">
                <img src="${IMG_URL}${data[i].poster_path}" alt="">
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


// document.getElementById("search-icon").addEventListener('click', () => {
//     console.log("nader")
//     document.getElementById("icon-close").style.display = 'block';
//     document.getElementById("home").style.display = 'none';
//     document.getElementById("search-home").style.display = 'block';
//     document.getElementById("search-home").style.height = '92vh';
//     document.getElementById("footer").style.position = 'absolute';
//     document.getElementById("footer").style.width = '100%';
//     document.getElementById("footer").style.bottom = '0%';

// });




// document.getElementById("icon-close").addEventListener('click', () => {
//     document.getElementById("home").style.display = 'block';
//     document.getElementById("search-home").style.display = 'none';
//     document.getElementById("footer").style.position = 'none';
//     document.getElementById("footer").style.bottom = 'inherit';

// })

// ============               function to display details for moves            =============================================

function naderlist(listMoves) {

    var listNameMoves = Array.from(document.getElementsByClassName("name-move"));

    var currendIndex;

    for (var i = 0; i < listNameMoves.length; i++) {
        listNameMoves[i].addEventListener('click', function (e) {
            currendIndex = listNameMoves.indexOf(e.target);
            if (listMoves[currendIndex].title != undefined) {
                document.getElementById("display-data").style.right = "0";

                document.getElementById("img-current").setAttribute('src', `${IMG_URL}${listMoves[currendIndex].poster_path}`);
                document.getElementById("name-poster").innerHTML = `${listMoves[currendIndex].title}`;
                document.getElementById("desc-poster").innerHTML = `${listMoves[currendIndex].overview}`;
            } else {
                document.getElementById("display-data").style.right = "0";

                document.getElementById("img-current").setAttribute('src', `${IMG_URL}${listMoves[currendIndex].poster_path}`);
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

// ===========================================================================
// close details for moves
console.log(document.getElementById("close-show"))

document.getElementById("close-show").addEventListener('click', function () {
    document.getElementById("display-data").style.right = "100%";
});
// =======================================================================

















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






