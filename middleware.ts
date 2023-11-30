import { NextRequest, NextResponse } from "next/server";

const middleware = async( request: NextRequest ) => {


  switch ( request.nextUrl.pathname.toLowerCase() ){

    case "/github":
      return NextResponse.redirect('https://github.com/deadlyunicorn/');
    case "/linkedin":
      return NextResponse.redirect('https://www.linkedin.com/in/alexander-petrache/');
    case "/x":
      return NextResponse.redirect('https://twitter.com/deadlyunicorn_/');
    case "/links":
      return NextResponse.redirect('https://linktr.ee/deadlyunicorn/');
    case "/resume":
    case "/cv":
      return NextResponse.redirect('https://cv-job-resume.vercel.app/');


  }



}

export default middleware;