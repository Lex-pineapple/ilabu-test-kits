import type { AnalysisType } from "#store/types/analyses";

export type KitMinimalType = {
  description_min: string;
  id: string;
  img_url: string;
  title: string;
};

export type KitType = {
  analyses: AnalysisType[];
  benefits: string[];
  box_contents: [string, number];
  description: string;
  description_min: string;
  id: string;
  img_url: string;
  title: string;
  video_url: string;
};
