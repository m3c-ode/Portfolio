import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';

export default function Bio() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Biography</title>
                    {/* <Script
                        src="https://connect.facebook.net/en_US/sdk.js"
                        strategy="lazyOnload"
                        onLoad={() =>
                            console.log(`script loaded correctly, window.FB has been populated`)
                        }
                    /> */}
                </Head>
                <h1> Biography </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A provident amet repudiandae, soluta nisi quis quia impedit iure neque et atque eligendi cumque nihil. Optio doloribus facere quam voluptatibus vitae.</p>
                <h2>
                    <Link href="/">Back to home page</Link>
                </h2>
            </Layout>
        </>
    );
}