import Prismic from '@prismicio/client'

export function getPrismicCLient(req?: unknown) {
  const prismic = Prismic.client('https://autocalc.prismic.io/api/v2',
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  );

  return prismic
}