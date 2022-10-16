export interface EntityExtractionResponse {
  timestamp: string,
  time: number,
  annotations: Entity[]
}

export interface Entity {
  abstract: string,
  label: string,
  spot: string,
  categories: string[],
  image: Image
}

export interface Image {
  full: string,
  thumbnail: string
}
