import ogImg from '../assets/images/ogImg.jpg';
import { SITE_URL, FACEBOOK_APP_ID } from '../configs';

export const defaultTitle = 'www.4codev.com';
const defaultDescription =
  'This is a really awesome website where we can render on the server. Supa cool.';
const defaultImage = `${SITE_URL}${ogImg}`;
const defaultTwitter = '';
export const defaultSep = ' | ';

const getMetaTags = (
  {
    title,
    description,
    image,
    contentType,
    twitter,
    noCrawl,
    published,
    updated,
    category,
    tags,
  },
  pathname,
) => {
  const theTitle = title
    ? (title + defaultSep + defaultTitle).substring(0, 60)
    : defaultTitle;
  const theDescription = description
    ? description.substring(0, 155)
    : defaultDescription;
  const theImage = image ? `${SITE_URL}${image}` : defaultImage;

  const metaTags = [
    { itemprop: 'name', content: theTitle },
    { itemprop: 'description', content: theDescription },
    { itemprop: 'image', content: theImage },
    { name: 'description', content: theDescription },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: defaultTwitter },
    { name: 'twitter:title', content: theTitle },
    { name: 'twitter:description', content: theDescription },
    { name: 'twitter:creator', content: twitter || defaultTwitter },
    { name: 'twitter:image:src', content: theImage },
    { property: 'og:title', content: theTitle },
    { property: 'og:type', content: contentType || 'website' },
    { property: 'og:url', content: SITE_URL + pathname },
    { property: 'og:image', content: theImage },
    { property: 'og:description', content: theDescription },
    { property: 'og:site_name', content: defaultTitle },
    { property: 'fb:app_id', content: FACEBOOK_APP_ID },
  ];

  if (noCrawl) {
    metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
  }

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }
  if (updated) {
    metaTags.push({ name: 'article:modified_time', content: updated });
  }
  if (category) {
    metaTags.push({ name: 'article:section', content: category });
  }
  if (tags) {
    metaTags.push({ name: 'article:tag', content: tags });
  }

  return metaTags;
};

export default getMetaTags;
