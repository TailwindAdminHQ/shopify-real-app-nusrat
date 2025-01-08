import '../assets/styles.css';

import { Page, Layout, Card, Button, VideoThumbnail, Grid, Text, Divider, InlineGrid, InlineStack, Box, Bleed } from '@shopify/polaris';
import { DropdownIcon, meetIcon, MenuIcon } from 'app/assets/icons/customIcons';

// const Placeholder = ({
//     label = '',
//     height = 'auto',
//     width = 'auto',
//     showBorder = false,
// }) => {
//     return (
//         <div
//             style={{
//                 display: 'inherit',
//                 background: 'var(--p-color-text-info)',
//                 height: height ?? undefined,
//                 width: width ?? undefined,
//                 borderInlineStart: showBorder
//                     ? '1px dashed var(--p-color-bg-surface-success)'
//                     : 'none',
//             }}
//         >
//             <InlineStack gap="400" align="center" blockAlign="center">
//                 <div
//                     style={{
//                         color: 'var(--p-color-text-info-on-bg-fill)',
//                         width: width ?? undefined,
//                     }}
//                 >
//                     <Text
//                         as="h2"
//                         variant="bodyMd"
//                         fontWeight="medium"
//                         alignment="center"
//                         tone="text-inverse"
//                     >
//                         {label}
//                     </Text>
//                 </div>
//             </InlineStack>
//         </div>
//     );
// };
export default function Dashboard() {
    return (
        <Page>

            <Layout>
                <Layout.Section>
                    <Card>
                        <Text as="h2" variant="bodyMd">
                            Content inside a card
                        </Text>
                        <Divider />
                        <InlineGrid columns="0.5fr 1fr 1fr 1fr" gap="100">
                            <Card>
                                <InlineGrid rows={3}>
                                    <Card>Item 2</Card>
                                    <Card>Item 3</Card>
                                    <Card>Item 4</Card>
                                </InlineGrid>
                            </Card>
                            <Card>Item 2</Card>
                            <Card>Item 3</Card>
                            <Card>Item 4</Card>
                        </InlineGrid>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card >
                        <Box padding={'100'}>
                            <Text variant="headingMd" as="h2">Media Library</Text>
                        </Box>
                        <Bleed marginInline="400">
                            <Divider />
                        </Bleed>
                        <InlineStack gap='600'>
                            <Box padding={'100'}>
                                <InlineStack gap="050">
                                    <Button icon={meetIcon} />
                                    <Button>All</Button>
                                    <Button>Active</Button>
                                    <Button>Draft</Button>
                                </InlineStack>
                            </Box>
                            <Box padding={'100'}>
                                <InlineStack blockAlign='center' gap='050'>
                                    <Box borderColor='border' borderWidth='025' borderRadius='100'>
                                        <MenuIcon />
                                    </Box>
                                    <Box borderColor='border' borderWidth='025' borderRadius='100' padding={'100'}>
                                        <InlineStack as='div' gap='500' blockAlign='center' >
                                            <Text>#Feed</Text>
                                            <DropdownIcon />
                                        </InlineStack>
                                    </Box>
                                </InlineStack>
                            </Box>
                        </InlineStack>
                        <Bleed marginInline="400">
                            <Divider />
                        </Bleed>
                        <Box padding={'400'}>
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
                        </Box>
                        <Button id='watermark'>Full media Library</Button>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
