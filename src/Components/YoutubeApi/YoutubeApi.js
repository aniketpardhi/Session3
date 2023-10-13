
import axios from "axios";
export const YoutubeApi = axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        key : "AIzaSyDzoVowRw_wJihyBNzioxCJEatxG3_BfIE",
        part : "snippet",
    },
});

export default YoutubeApi;

