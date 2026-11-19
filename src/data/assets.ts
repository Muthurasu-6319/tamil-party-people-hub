export const partyLogoImg = "/assets/image.png";
export const leaderImg = "/munna.png";
export const rallyImg = "/assets/rally.jpg";
export const farmersImg = "/assets/farmers.jpg";
export const womenImg = "/assets/women.jpg";
export const youthImg = "/assets/youth.jpg";
export const socialServiceImg = "/assets/social_service.jpg";

export const ASSET_MAP: Record<string, string> = {
  "leader.jpg": leaderImg,
  "munna.png": leaderImg,
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
