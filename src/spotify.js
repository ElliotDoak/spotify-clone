// https://developer.spotify.com/
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize"; 
const redirectUri = "http://localhost:3000/"; 
const clientId = "b2be7edc54d64dc9822d84f9209985af";

// theses are roles/permissions that the user has assigned to them
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        // accessToken=mysecretkey&name=John
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;