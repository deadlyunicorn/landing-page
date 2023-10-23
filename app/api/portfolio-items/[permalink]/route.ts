import { NextRequest, NextResponse } from "next/server";
import mongoClient from "../../mongodb/mongoClient";
import { showcaseItem } from "@/app/types/showcaseItem";


export const GET = async ( request: NextRequest, context: { params: { permalink : string }  }) => {


  const showcaseItems = mongoClient.db('landing_page').collection('showcase_items');
  try{ 
    const showcaseItem  = await showcaseItems.findOne( { permalink: context.params.permalink } ) as unknown as showcaseItem | null;
    return NextResponse.json( showcaseItem );
  }
  catch( err ){
    console.log( " Error on /api/portfolio-items/[permalink ]");
    return NextResponse.json( null );
  }

}