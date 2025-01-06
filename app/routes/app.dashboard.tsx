import { Page, Layout, Card, Button, Select, Thumbnail, VideoThumbnail, Grid, Text, Divider, InlineGrid, InlineStack } from '@shopify/polaris';
const options = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last 7 days', value: 'lastWeek' },
];
const Placeholder = ({
    label = '',
    height = 'auto',
    width = 'auto',
    showBorder = false,
}) => {
    return (
        <div
            style={{
                display: 'inherit',
                background: 'var(--p-color-text-info)',
                height: height ?? undefined,
                width: width ?? undefined,
                borderInlineStart: showBorder
                    ? '1px dashed var(--p-color-bg-surface-success)'
                    : 'none',
            }}
        >
            <InlineStack gap="400" align="center" blockAlign="center">
                <div
                    style={{
                        color: 'var(--p-color-text-info-on-bg-fill)',
                        width: width ?? undefined,
                    }}
                >
                    <Text
                        as="h2"
                        variant="bodyMd"
                        fontWeight="medium"
                        alignment="center"
                        tone="text-inverse"
                    >
                        {label}
                    </Text>
                </div>
            </InlineStack>
        </div>
    );
};
export default function Dashboard() {
    return (
        <Page>
            <Card>
                <Layout>
                    <Layout.Section>
                    <Card>
                        <Text as="h2" variant="bodyMd">
                            Content inside a card
                        </Text>
                        <Divider />
                        <InlineGrid columns={['oneThird', 'twoThirds', 'twoThirds', 'twoThirds']}>
                            <Placeholder height="320px" label="oneThird" >

                            </Placeholder>
                            <Placeholder height="320px" label="twoThirds" showBorder />
                            <Placeholder height="320px" label="twoThirds" showBorder />
                            <Placeholder height="320px" label="twoThirds" showBorder />
                        </InlineGrid>
                    </Card>
                    </Layout.Section>
                    <Layout.Section>
                        <div style={{ display: 'flex', gap: 'var(--p-space-050)' }}>
                            <Button>All</Button>
                            <Button>Active</Button>
                            <Button>Draft</Button>
                            <div>
                                <Select
                                    options={options}
                                    onChange={''}
                                    value={''}
                                />
                            </div>
                        </div>
                        <div>
                            <Grid>
                                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                    <VideoThumbnail
                                        videoLength={80}
                                        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        onClick={() => console.log('clicked')} />
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                    <VideoThumbnail
                                        videoLength={80}
                                        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        onClick={() => console.log('clicked')} />
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                    <VideoThumbnail
                                        videoLength={80}
                                        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        onClick={() => console.log('clicked')} />
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                    <VideoThumbnail
                                        videoLength={80}
                                        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        onClick={() => console.log('clicked')} />
                                </Grid.Cell>
                            </Grid>
                        </div>
                        <Button style={{ backgroundColor: 'var(--p-color-bg-fill-critical-secondary)' }}>Full media Library</Button>
                    </Layout.Section>
                </Layout>
            </Card>
        </Page>
    );
}
