import Layout from "../../components/layout";
import { getAllBeersIds, getBeersData } from "../../lib/beers";
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';



export default function Post({ beerData }) {
    return (
        <Layout>
            <Head>
                <title>{beerData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{beerData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={beerData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: beerData.contentHtml }} />
            </article>
        </Layout>);
}

export async function getStaticPaths() {
    //returns a list of possible values for id
    const paths = getAllBeersIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const beerData = await getBeersData(params.id);
    return {
        props: {
            beerData,
        }
    };
}