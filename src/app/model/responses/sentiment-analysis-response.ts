export interface SentimentAnalysisResponse {
  timestamp: string,
  time: number,

}

export interface Sentiment {
  score: number,
  type: SentimentType
}

export enum SentimentType {
  positive= "positive",
  neutral = "neutral",
  negative = "negative"
}
