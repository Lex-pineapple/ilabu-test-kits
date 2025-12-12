export type AnalysisResponse = {
  analyses: AnalysisType[];
  id: string;
  title: string;
};

export type AnalysisType = {
  article: string;
  description: string;
  execution_time_days: string;
  id: string;
  lab_name: string;
  price: string;
  title: string;
};
