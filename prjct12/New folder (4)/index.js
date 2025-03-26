// HTML structure
const container = document.createElement("div");
container.classList.add("youtube-container");

// Title
const title = document.createElement("h1");
title.innerText = "YouTube Journey";
title.classList.add("youtube-title");
container.appendChild(title);

// Subscriber Count (Dynamic Fetch)
const subs = document.createElement("h2");
subs.innerText = "137K Subscribers"; // You can fetch dynamically
subs.classList.add("youtube-subscribers");
container.appendChild(subs);

// Embed YouTube Video
const videoFrame = document.createElement("iframe");
videoFrame.width = "560";
videoFrame.height = "315";
videoFrame.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
videoFrame.title = "YouTube video player";
videoFrame.frameBorder = "0";
videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
videoFrame.allowFullscreen = true;
videoFrame.classList.add("youtube-video");
container.appendChild(videoFrame);

// Append container to the body
document.body.appendChild(container);

