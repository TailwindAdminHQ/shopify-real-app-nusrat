import React from 'react'
import db from "../db.server";
import { json } from '@remix-run/node';
import { ActionList, Button, Card, Layout, Page, Popover } from '@shopify/polaris';
import { useLoaderData } from '@remix-run/react';
import { authenticate } from "app/shopify.server";

export async function loader({ request }) {
    const { admin } = await authenticate.admin(request);

    const response = await admin.graphql(
        `#graphql
  query {
    themes(first: 10) {
      edges {
        node {
          name
          id
          role
        }
      }
    }
  }`,
    );

    const themes = await response.json();

    // Fetch all sections from the database
    const sections = await db.sections.findMany();

    return json({ sections, themes });
}
const MySections = () => {
    const { sections, themes } = useLoaderData<typeof loader>();
    console.log(themes.data.themes.edges)
    const themeOptions = themes.data.themes.edges.map((edge: any) => ({
        label: edge.node.name,
        value: edge.node.name, // Using theme name as value
    }));
    console.log(themeOptions)
    const [active, setActive] = React.useState<string | null>(null);

    const toggleActive = (id: string) => () => {
        setActive((activeId) => (activeId !== id ? id : null));
    };
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    {sections.map((section) => (
                        <Card key={section.id}>
                            <p><strong>Name:</strong> {section.name}</p>
                            <Popover
                                active={active === 'popover2'}
                                preferredAlignment="right"
                                activator={
                                    <Button
                                        onClick={toggleActive('popover2')}

                                        accessibilityLabel="Other save actions"
                                    />
                                }
                                autofocusTarget="first-node"
                                onClose={toggleActive('popover2')}
                            >
                                <ActionList
                                    actionRole="menuitem"
                                    items={[{ content: 'Save as draft' }]}
                                />
                            </Popover>
                        </Card>
                    ))}
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default MySections