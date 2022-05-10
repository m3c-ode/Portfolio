import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

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
                            <Link href={`/beers/${id}`}><a>{title}</a></Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={utilStyles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    );
}