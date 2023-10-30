import data from './db/data.js'
export function fetchFilmData(url) {
    return new Promise(resolve => {

        const urlComs = url.split('/');
        if (urlComs[0] == 'get') {
            if (urlComs[1] == 'movie') {
                if (urlComs[2] == 'newest') {
                    data.Movies.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : ((b.releaseDate < a.releaseDate) ? -1 : 0))
                    resolve(data.Movies.slice(0, 5));
                }
            } else if (urlComs[1] == 'mostpopular') {
                resolve(data.MostPopularMovies);
            }
            else if (urlComs[1] == 'top50') {
                resolve(data.Top50Movies);
            }
        } else if (urlComs[0] == 'detail') {
            if (urlComs[1] == 'movie') {
                let res = { detail: '', review: '' };
                res.detail = (data.Movies.find(function (ele) {
                    return ele.id == urlComs[2];
                }))

                res.review = (data.Reviews.find(function (ele) {
                    return ele.movieId == urlComs[2];

                }))
                if (res.review) {
                    res.review = res.review.items;
                }
                resolve(res);
                console.log(data);
            }
        }
        else if (urlComs[0] == 'search') {
            if (urlComs[1] == 'movie') {
                let res = [];
                data.Movies.forEach(ele => {
                    if (ele.fullTitle.toLowerCase().includes(urlComs[2].toLowerCase())) {
                        res.push(ele);
                    }
                })
                data.MostPopularMovies.forEach(ele => {
                    if (ele.fullTitle.toLowerCase().includes(urlComs[2].toLowerCase())) {
                        res.push(ele);
                    }
                })
                data.Top50Movies.forEach(ele => {
                    if (ele.fullTitle.toLowerCase().includes(urlComs[2].toLowerCase())) {
                        res.push(ele);
                    }
                })
                resolve(res);
            }
        }
    })

}