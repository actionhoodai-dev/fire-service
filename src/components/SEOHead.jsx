import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://vvsafetyfireandsafety.com';
const BUSINESS_NAME = 'Varatha Vinayagar Safety & Fire';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  path = '/', 
  image = DEFAULT_IMAGE,
  type = 'website'
}) => {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_NAME} | VV Safety Fire and Safety`
    : `${BUSINESS_NAME} | VV Safety Fire and Safety | Best Fire Safety in Tuticorin`;
  
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
