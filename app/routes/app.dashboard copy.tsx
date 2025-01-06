import React from 'react';
import { Page, Card, Text, Divider, InlineGrid, InlineStack, } from '@shopify/polaris';
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
const Dashboard = () => {
    return (
        <Page title="Dashboard">
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
        </Page>
    );
};

export default Dashboard;
