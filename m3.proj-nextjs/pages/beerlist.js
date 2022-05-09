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

export default function BeerList({ allBeersData }) {
    return (
        <>
            <h1 className={utilStyles.heading2Xl}>Beer List</h1>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
                <ul className={utilStyles.list}>
                    {allBeersData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}