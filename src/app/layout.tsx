import Header from "./Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./Footer";
import Script from "next/script";
import Image from "next/image";

const mont = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className={mont.className}>
    //     <Header />
    //     {children}
    //     <Footer />
    //   </body>
    // </html>
    <html lang="en">
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1850015262086309');
              fbq('track', 'PageView');
            `}
      </Script>

      <body className={mont.className}>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            alt={"facebook pixel no script image"}
            src="https://www.facebook.com/tr?id=1850015262086309&ev=PageView&noscript=1"
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

  //original script from facebook
  //   < !--Meta Pixel Code-- >
  // <script>
  // !function(f,b,e,v,n,t,s)
  // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  // n.queue=[];t=b.createElement(e);t.async=!0;
  // t.src=v;s=b.getElementsByTagName(e)[0];
  // s.parentNode.insertBefore(t,s)}(window, document,'script',
  // '
  // https://connect.facebook.net/en_US/fbevents.js');
  // fbq('init', '1850015262086309');
  // fbq('track', 'PageView');
  // </script>
  // <noscript><img height="1" width="1" style="display:none"
  // src="
  // https://www.facebook.com/tr?id=1850015262086309&ev=PageView&noscript=1"
  // /></noscript>
  // <!--End Meta Pixel Code-- >
}
