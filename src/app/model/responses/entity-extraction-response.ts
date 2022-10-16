export interface EntityExtractionResponse {
  timestamp: string,
  time: number,
  annotations: Entity[]
}

export interface Entity {
  abstract: string,
  label: string,
  spot: string,
  confidence: number,
  categories: string[],
  image: Image,
  isReadMore: boolean
}

export interface Image {
  full: string,
  thumbnail: string
}
