let movieNameInput = document.querySelector('.search__input')
let searchBtn = document.querySelector('.search__button')
let result = document.querySelector('.result')

let getMovie = () => {
    let key = '18974264'
    let movieName = movieNameInput.value
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`

    if (movieName.length <=0) {
        result.innerHTML = `<h3 class='msg'>Please enter a movie name</h3>`
    } else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == 'True') {
                result.innerHTML = `
                <div class="result__main">
                    <img src="${data.Poster}" class="result__img">
                    <div class="result__descript">
                        <h2 class="result__name">${data.Title}</h2>
                        <div class="result__est">
                            <i class="fa-solid fa-star est-img"></i>
                            <p class="est-text">${data.imdbRating}</p>
                        </div>

                        <div class="details">
                            <span class="details__text">${data.Rated}</span>
                            <span class="details__text">${data.Year}</span>
                            <span class="details__text">${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div class="genre__item">
                                ${data.Genre.split(',').join('</div><div class="genre__item">')}
                            </div>
                        </div>
                    </div>
                    <h3 class="plot">Plot: </h3>
                    <p class="plot">${data.Plot}</p>
                    <h3 class="cast">Cast: </h3>
                    <p class="cast">${data.Actors}</p>
                </div>
                `
            } else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
        }).catch(() => {
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`
        })
    }
}

searchBtn.addEventListener('click', getMovie)

// window.addEventListener('load', getMovie)