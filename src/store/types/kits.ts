import type { AnalysisType } from "#store/types/analyses";

export type KitListResponse = {
  kits: KitMinimalType[];
};

export type KitMinimalType = {
  description_min: string;
  id: string;
  img_url: string;
  title: string;
};

export type KitType = {
  analyses: AnalysisType[];
  benefits: string[];
  box_contents: { [key: string]: number };
  description: string;
  description_min: string;
  id: string;
  img_url: string;
  title: string;
  video_url: string;
};
