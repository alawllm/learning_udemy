const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //object - console.dir
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    //emptying the input
    form.elements.query.value = '';
})

// looping over the results in order to not show only the first one 


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            //for every result img appended
            const img = document.createElement('IMG')
            img.src = result.show.image.medium;
            document.body.append(img)
        }

    }
}