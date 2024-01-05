import { NextRequest, NextResponse } from "next/server";
import mongoClient from "../mongodb/mongoClient";
import { notFound } from "next/navigation";

export const GET = async ( request: NextRequest, context: { params: { section: string } }) => {


  try{
    const description = await mongoClient.db('landing_page')
      .collection('sections')
      .findOne( { section: String( context.params.section ) } )
      .then( res => res? res.content :null );

    return NextResponse.json( description );
  }
  catch( err ){
    notFound();
    console.log( " Error on /api/[section]/");
    return NextResponse.json( null );
  }
}