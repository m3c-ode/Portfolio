import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedBeersData } from '../lib/beers';

export async function getStaticProps() {
  const allBeersData = getSortedBeersData();
  return {
    props: {
      allBeersData,
    },
  };
}

export default function Home({ allBeersData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Introducing the m3 projects</p>
        <p>m3.AA</p>
        <p><a href="./beerlist">m3.beer</a></p>
        <p>powered by m3.code</p>
      </section>
    </Layout>
  );
}
