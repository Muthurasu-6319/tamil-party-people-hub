export const partyLogoImg = "/assets/image.png";
export const leaderImg = "/munna.png";
export const jaiBabuImg = "/jai-babu.jpg";
export const anandJiImg = "/anand-ji.jpg";
export const pavanJiImg = "/pavan-ji.jpg";
export const news2026Img = "/news-2026-election.jpg";
export const newsCmDemandsImg = "/news-cm-demands.jpg";
export const newsPartyEqualityImg = "/news-party-equality.jpg";
export const newsPriceControlImg = "/news-price-control.jpg";
export const rallyImg = "/assets/rally.jpg";
export const farmersImg = "/assets/farmers.jpg";
export const womenImg = "/assets/women.jpg";
export const youthImg = "/assets/youth.jpg";
export const socialServiceImg = "/assets/social_service.jpg";

export const ASSET_MAP: Record<string, string> = {
  "leader.jpg": leaderImg,
  "munna.png": leaderImg,
  "jai-babu.jpg": jaiBabuImg,
  "anand-ji.jpg": anandJiImg,
  "pavan-ji.jpg": pavanJiImg,
  "news-2026-election.jpg": news2026Img,
  "news-cm-demands.jpg": newsCmDemandsImg,
  "news-party-equality.jpg": newsPartyEqualityImg,
  "news-price-control.jpg": newsPriceControlImg,
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
