const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        const searchTerm = form.elements.query.value;
        const config = {params: {q: searchTerm, isFunny: "colt"}};
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        makeImages(res.data);
        form.elements.query.value = "";
    } catch (e) {
        console.log("NOT SEARCH!!", e);
    }
});
const makeImages = (shows) => {
    deleteImages();
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};
const deleteImages = () => {
    const deletedImages = document.querySelectorAll("img");
    for (image of deletedImages) {
        image.remove();
    }
};
