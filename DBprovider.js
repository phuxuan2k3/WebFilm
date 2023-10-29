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
        }
    })

}