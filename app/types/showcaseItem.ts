import { ObjectId } from "mongodb"

export type showcaseItem = {
      title: string,
      permalink: string,
      date_of_creation: Date,
      thumbnail: string,
      shortDescription: string,
      fullDescription: string,
      images: string[]
    }

export type showcaseItemOnDB = {
  _id: ObjectId,
  title: string,
  permalink: string,
  date_of_creation: Date,
  thumbnail: string,
  shortDescription: string,
  fullDescription: string,
  images: string[]
}