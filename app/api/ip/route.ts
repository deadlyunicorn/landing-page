import { NextRequest, NextResponse } from "next/server";
import { getDetailsOf } from "./getDetailsOfIp";

export const dynamic = 'force-dynamic'

export const GET = async( 
    request: NextRequest, 
) => {

    const ip = String ( request.ip );

    try{
        // return await getDetailsOf( ip );
        return NextResponse.json({
            ip: request.ip,
            geo: request.geo,
            signal: request.signal,
            url: request.url

        })

    }
    catch( error ){
        console.log( error );
        return NextResponse.json({
            error: "Can't process your request.",
            erro2: `${error}`
        });
    }

    
}