import { NextRequest, NextResponse } from "next/server";
import { getDetailsOf } from "./getDetailsOfIp";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic'

export const GET = async( 
    request: NextRequest, 
) => {

    notFound();
    const ip = String(request.ip) ;

    try{
        return await getDetailsOf( ip );
    }
    catch( error ){
        return NextResponse.json({
            error: "Can't process your request.",
        });
    }

    
}