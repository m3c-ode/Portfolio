import Layout from "../../components/layout";
import { getAllBeersIds, getBeersData } from "../../lib/beers";
import Head from 'next/head';



export default function Post({ beerData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {beerData.title}
            <br />
            {beerData.id}
            <br />
            {beerData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: beerData.contentHtml }} />
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