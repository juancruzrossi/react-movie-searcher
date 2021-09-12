const API = "https://api.themoviedb.org/3";

export function getAPIData(path) {
    return fetch(API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRiZWI3YmQ1Mzc3Nzg2NTRiMGU3ZmYzZWE4NGE4MSIsInN1YiI6IjYxMmU4NjZhYzFmZmJkMDA4YjU5ZGNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TZvL0P7J-hZedn0dFIUzCErEnLKRKN9uOCuKTUgWtA",
                "Content-Type": "application/json;charset=utf-8"
            }}
        )
        .then(response => response.json())
}