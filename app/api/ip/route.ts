import { NextRequest, NextResponse } from "next/server";
import { getDetailsOf } from "./getDetailsOfIp";

export const GET = async( 
    request: NextRequest, 
) => {

    const ip = String ( request.ip );

    try{
        return await getDetailsOf( ip );

    }
    catch( error ){
        console.log( error );
        return NextResponse.json({
            error: "Can't process your request."
        });
    }

    
}