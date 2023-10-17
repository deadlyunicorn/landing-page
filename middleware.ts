import { NextRequest, NextResponse } from "next/server";

const middleware = async( request: NextRequest ) => {


  switch ( request.nextUrl.pathname ){

    case "/github":
      return NextResponse.redirect('https://github.com/deadlyunicorn');
    case "/linkedin":
      return NextResponse.redirect('https://linkedin.com/in/deadlyunicorn');
    case "/x":
      return NextResponse.redirect('https://twitter.com/deadlyunicorn_');
    case "/links":
      return NextResponse.redirect('https://linktr.ee/deadlyunicorn');


  }



}

export default middleware;