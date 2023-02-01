import Instagram from './instagram.png';
import YouTube from './youtube.png';
import Facebook from './facebook.png';

function importAllImages(r, altKey) {
  let images = [];
  r.keys().map((item) => { return images.push({
    "image": r(item),
    "altText": item.replace('./', '').replace(/\.[^/.]+$/, "") + altKey,
    "title": item.replace('./', '').replace(/\.[^/.]+$/, "")
  }); });
  return images;
}

export const SocialMediaIcons = [
  {
    image: Instagram,
    altText: "Instagram icon",
    link: "https://www.instagram.com/casual.jason/",
  },
  {
    image: YouTube,
    altText: "YouTube icon",
    link: "https://www.youtube.com/channel/UCnI8hZ31oyEgxURQJzgBuTg",
  },
  {
    image: Facebook,
    altText: "Facebook icon",
    link: "https://www.facebook.com/jason.dam2/",
  }
]

export const LandingPageImages = importAllImages(require.context('./LandingPageImages', false, /\.(png|jpe?g|svg)$/), " landing page image");
export const PortraitTopicSelect = importAllImages(require.context('./Portrait/Thumbnail', false, /\.(png|jpe?g|JPE?G|svg)$/), " thumbnail image");
export const TravelTopicSelect = importAllImages(require.context('./Travel/Thumbnail', false, /\.(png|jpe?g|JPE?G|svg)$/), " thumbnail image");
export const EventTopicSelect = importAllImages(require.context('./Event/Thumbnail', false, /\.(png|jpe?g|JPE?G|svg)$/), " thumbnail image");

export const DisplayImages = {
  "wedding": importAllImages(require.context('./Event/Wedding', false, /\.(png|jpe?g|JPE?G|svg)$/), " wedding image"),
  "graduation": importAllImages(require.context('./Event/Graduation', false, /\.(png|jpe?g|JPE?G|svg)$/), " graduation image"),
  "vivid": importAllImages(require.context('./Event/Vivid', false, /\.(png|jpe?g|JPE?G|svg)$/), " vivid image"),
  "hokkaido": importAllImages(require.context('./Travel/Hokkaido', false, /\.(png|jpe?g|JPE?G|svg)$/), " Hokkaido image"),
  "kyoto": importAllImages(require.context('./Travel/Kyoto', false, /\.(png|jpe?g|JPE?G|svg)$/), " Kyoto image"),
  "shizouka": importAllImages(require.context('./Travel/Shizouka', false, /\.(png|jpe?g|JPE?G|svg)$/), " Shizouka image"),
  "tokyo": importAllImages(require.context('./Travel/Tokyo', false, /\.(png|jpe?g|JPE?G|svg)$/), " Tokyo image"),
  "huyen": importAllImages(require.context('./Portrait/Huyen', false, /\.(png|jpe?g|JPE?G|svg)$/), " Huyen image"),
}