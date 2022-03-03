import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "CS630 Claire Wang Portfolio";
    const description = "data vizzing and fizzing";
    const author = "Claire Wang";
    const twitter = "@clairebookworm1";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Claire Wang" />
            {children}
        </Head>
    )
}