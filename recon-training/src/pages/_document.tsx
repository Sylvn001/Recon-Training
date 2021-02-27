import Document, {Html, Head, NextScript, Main} from 'next/document'; 

export default class myDocument extends Document{
  rendder(){
    return (
      <Html> 
        <Head>
          <link rel="shortcut icon" href="icon.png" type="image/png"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/> 
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <link rel="manifest" href="manifest.webmanifest"></link>
          <link href='.icons/icon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='.icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="./apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB"/>
        </Head>
        <body> 
          <Main/> 
          <NextScript/>
        </body>
      </Html> 
    );
  }
}