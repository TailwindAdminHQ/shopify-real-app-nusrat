import { Card, EmptyState } from '@shopify/polaris';
import React from 'react';

function Overview() {
  return (
    <>
      <ui-title-bar title="Overview">
      </ui-title-bar>

      <Card>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{ content: 'Add transfer' }}
          secondaryAction={{
            content: 'Learn more',
            url: 'https://help.shopify.com',
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Track and receive your incoming inventory from suppliers.</p>
        </EmptyState>
      </Card>
    </>
  );
}

export default Overview;