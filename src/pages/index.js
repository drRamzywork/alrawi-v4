import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DraggableBox = dynamic(() => import("@/components/DraggableBox"), {
  ssr: false, // Disable server-side rendering for the component that uses browser-specific events
});

export default function HomePage() {
  const { locale } = useRouter();
  const imagePath = `/assets/imgs/white_logo.png`;

  const stieName = "الراوي";
  const siteURL = "https://al-rawi.vercel.app";

  const SiteDescription = `أهلًا وسهلًا..
أنا الراوي الافتراضي محمد، يسعدني أن أتحدث هنا عن قصور التابعي الجليل عروة بن الزبير، لنتعرف سويًا على أسرارها وتاريخها العريق فهي تعد من أبرز المعالم السياحية في المدينة، ونتيجة للجهود التي بذلتها وتبذلها هيئة التراث لتأهيلها لاستقبال الزوار، فقد أصبح بإمكان محبي التراث والتاريخ زيارتها طوال أيام الأسبوع
`;


  return (
    <>
      <Head>
        <title>{stieName}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#092e47" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={stieName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={stieName} />
        <link rel="apple-touch-icon" href={`${siteURL}${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}${imagePath}`} />
        <meta name="author" content={stieName} />
        <meta name="description" content={SiteDescription} />
        <link rel="canonical" href={`${siteURL}/${locale}`} />
        <meta name="msapplication-TileColor" content="#092e47" />
        <meta
          name="msapplication-TileImage"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={stieName} />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale} />
        <meta property="og:url" content={`${siteURL}/${locale}`} />
        <meta property="og:title" content={stieName} />
        <meta property="og:description" content={SiteDescription} />
        <meta property="og:image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="name" content={stieName} />
        <meta itemProp="author" content={stieName} />
        <meta itemProp="image" content={`${siteURL}${imagePath}`} />
        <meta itemProp="description" content={SiteDescription} />
        <meta name="twitter:image" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={stieName} />
        <meta name="twitter:image:src" content={`${siteURL}${imagePath}`} />
        <meta name="twitter:description" content={SiteDescription} />
      </Head>

      <DraggableBox />
    </>
  );
}
