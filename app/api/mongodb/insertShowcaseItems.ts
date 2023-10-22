import { showcaseItem } from "@/app/types/showcaseItem";
import { MongoClient } from "mongodb";

const insertShowcaseItems = async(
  {
    date_of_creation,
    fullDescription,
    images,
    permalink,
    shortDescription,
    thumbnail,
    title
  }
  : showcaseItem
) => {

  const mongoClient = new MongoClient( String(process.env.MONGODB_URI_DEV) );
  try{

    const items = mongoClient.db('landing_page').collection('showcase_items');

  const showcaseItem = {
    date_of_creation,
    fullDescription,
    images,
    permalink,
    shortDescription,
    thumbnail,
    title
  }
  // return await items.insertOne( { title: title } );
  return await items.updateOne( { title: title } , { $set:  showcaseItem });
  }
  finally{
    await mongoClient.close();
  }

  
}

( async()=> {
  
  console.log( 
    await insertShowcaseItems({
      title: "YTMusic Listener",
      date_of_creation: new Date( '16 June 2023' ),
      fullDescription: '<center><a href="https://chrome.google.com/webstore/detail/ytmusic-listener/oolbocgobnnjceiilnbomnahldmpchof">YTMusic Listener</a> is built using the <b>Chrome Extension API</b>.\
      <br/>\
      It checks whether you are listening to some song in <b>Youtube Music</b> and automatically opens <b>Discord</b> on your Browser and updates your status the way a normal user would do, but <em>programmatically</em>.\
      </center>',
      images: [
        "https://lh3.googleusercontent.com/J7sxMQl3ojKAXyuUWu0DNfHaWdRGZ-uYtT2JxF57l2mD_n3dezWlpTXmD1vjJudUJj3NwkSum8CirUa8-Y9TglKe8w=w1920-h1080-e365-rj-sc0x00ffffff",
        "https://lh3.googleusercontent.com/7B9sItvRmAQddpZFtqQkbmAh10E6AAq5k8KeL_XTHy1XftNEm4GnLiqt1cym2y3mcn6Ya7oZXuEalnCTWn4SfBp060o=w1920-h1080-e365-rj-sc0x00ffffff",
        "https://lh3.googleusercontent.com/hjXzjGZV4-DOWYxmHoxNpnhhDUGnWXsXno9fb2ouUHJ1oQ13cFtDyhFLfwoUt1lGc_fsyXyKHWi-ShKNXxvMz04Artw=w1920-h1080-e365-rj-sc0x00ffffff",
        "https://lh3.googleusercontent.com/XqTueM80E4b6Z2dALfhK0TlvvkJ57_d27EAuIFTVWFGH1flnviWw4c_PdYe_vD-IV0Y6Hdcgce6BfNsneM-pQBkZog=w1920-h1080-e365-rj-sc0x00ffffff",
        "https://lh3.googleusercontent.com/-fjimbOV0NHsT2E_4bG_wjiOK3dt8zmKKnfAwpKaXGXWHdou075tdUsAJyTx0Zkim3RyClfRmnanZEg2t3PFmmNc=w1920-h1080-e365-rj-sc0x00ffffff",
      ],
      permalink: 'ytmusic-listener',
      shortDescription: 'This app shares YTMusic to Discord',
      thumbnail: "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/yt-music-listener/YT_listener_512.png",
    })
  )
})()