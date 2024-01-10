import { NextResponse } from "next/server"

import mongoClient from "../mongodb/mongoClient";
import { showcaseItem, showcaseItemOnDB } from "@/app/types/showcaseItem";

export const GET = async () => {

  const showcaseItemsCollection = mongoClient.db('landing_page').collection('showcase_items');
  
  try{
    const showcaseItems: showcaseItem[] = [];
    const showcaseItemsCursor  = showcaseItemsCollection.aggregate([{
      $sort: { 
        date_of_creation : -1 
      }
    }]);
  
    for await ( const item of showcaseItemsCursor ){
      const {_id, ...showcaseItem} = item as unknown as showcaseItemOnDB; 
      showcaseItems.push( showcaseItem );
    }

    return NextResponse.json( showcaseItems );
  }
  catch( err ){
    console.log( "Error on /api/portfolio-items/");
    return NextResponse.json( null );

  }
 

}