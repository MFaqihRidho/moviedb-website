export const apiKey = "06b60557a575f53871415fab9e43d082";

export const getTrendingAPI = () => {
    return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    )
        .then((response) => response.json())
        .then((results) => Promise.resolve(results));
};
