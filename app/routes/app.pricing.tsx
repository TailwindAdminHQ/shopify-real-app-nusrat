import {Page, Grid, Card, Button, Text} from '@shopify/polaris';
import React from 'react';

function Pricing() {
  return (
    <Page fullWidth>
        <ui-title-bar title="Pricing">
        </ui-title-bar>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <Card title="Free Plan" sectioned>
            <Text variant='heading3xl' as='h2'>Free Plan</Text>
            <p>View a summary of your online store’s sales.</p>
            <p>View a summary of your online store’s sales.</p>
            <p>View a summary of your online store’s sales.</p>
            <p>View a summary of your online store’s sales.</p>
          </Card>
          <Button>Select</Button>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <Card title="Pro Plan" sectioned>
          <Text variant='heading3xl' as='h2'>Pro Plan</Text>
            <p>View a summary of your online store’s orders.</p>
            <p>View a summary of your online store’s orders.</p>
            <p>View a summary of your online store’s orders.</p>
            <p>View a summary of your online store’s orders.</p>
          </Card>
          <Button>Select</Button>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

export default Pricing;