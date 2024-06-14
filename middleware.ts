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
    case "/whatsapp":
      return NextResponse.redirect('https://wa.me/qr/UFHJA7NFFFD4A1');
    case "/resume":
    case "/cv":
      return NextResponse.redirect('https://deadlyunicorn.s3.eu-central-1.amazonaws.com/CV/CV_Petrache_Alexandros.pdf');
    case "/webstore":
      return NextResponse.redirect('https://the-cool-webstore-deadlyunicorn.vercel.app/');
    case "/social_app":
      return NextResponse.redirect('https://the-amazing-social.vercel.app/about');


  }



}

export default middleware;