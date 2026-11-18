export const partyLogoImg = new URL("../assets/image.png", import.meta.url).href;
export const leaderImg = new URL("../assets/leader.jpg", import.meta.url).href;
export const rallyImg = new URL("../assets/rally.jpg", import.meta.url).href;
export const farmersImg = new URL("../assets/farmers.jpg", import.meta.url).href;
export const womenImg = new URL("../assets/women.jpg", import.meta.url).href;
export const youthImg = new URL("../assets/youth.jpg", import.meta.url).href;
export const socialServiceImg = new URL("../assets/social_service.jpg", import.meta.url).href;

export const ASSET_MAP: Record<string, string> = {
  "leader.jpg": leaderImg,
  "rally.jpg": rallyImg,
  "farmers.jpg": farmersImg,
  "women.jpg": womenImg,
  "youth.jpg": youthImg,
  "social_service.jpg": socialServiceImg,
  "image.png": partyLogoImg,
};

export function getAssetUrl(key: string): string {
  return ASSET_MAP[key] ?? rallyImg;
}

