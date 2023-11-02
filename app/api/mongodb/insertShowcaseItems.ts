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
      title: "Document Editor",
      date_of_creation: new Date( '02 April 2023' ),
      fullDescription: '<center><a href="https://github.com/deadlyunicorn/document-editor">Document Editor</a> is a web app built using <b>React</b>. It also uses <b>Redux</b> for state management. \
      <br/><br/> I started developing it after I got frustrated when I was editing a document in some Office Tool. \
      <br/><br/>It is not intended for serious use and it might not work as intended for every browser. It <b>was</b> mostly made for personal use.\
      </center>\
      Some things it can do:\
      <li>Floating menu for text editing</li>\
      <li>Add/Remove pages</li>\
      <li>Remembers user\'s color preferences ( via localStorage API ) </li>\
      <li>Most rich text editing tools</li>\
      <li>Select from 4-5 different Google Fonts</li>\
      <br/>\
      A typical work flow goes like:\
      <br/>1. Create the document\
      <br/>2. Right click, &quot;Print...&quot;( browser-provided )\
      <br/>3. Save the pages as a PDF\
      <center>\
      <br/> ( excluding the last page which is used for some tools )\
      <br/>\
      <a href="https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/sample_document_creator.pdf">View an example</a>.\
      </center>\
      ',
      images: [
        "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/Doc_editor_sample.png",
        "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/Doc_editor_edit_menu.png",
        "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/Doc_editor_settings_menu.png",
        "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/Doc_editor_print_menu.png",
      ],
      permalink: 'document-editor',
      shortDescription: 'An Alternative Document Editor',
      thumbnail: "https://deadlyunicorn.s3.eu-central-1.amazonaws.com/landing-page/showcases/document-editor/Doc_editor_edit_menu.png",
    })
  )
})()