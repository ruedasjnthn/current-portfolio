import { createClient } from 'contentful'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY!,
    })

    const res = await client.getEntries({ content_type: 'techstack'})
  
    return res.items
}
