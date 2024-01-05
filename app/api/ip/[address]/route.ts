import { NextRequest, NextResponse } from "next/server";
import { getDetailsOf } from "../getDetailsOfIp";

export const GET = async( 
    request: NextRequest, 
    { params } : { params: { address: string } } 
) => {

    const ip = params.address ;

    try{
        return await getDetailsOf(ip);

    }
    catch( error ){
        console.log( error );
        return NextResponse.json({
            error: "Can't process your request."
        });
    }

    
}

