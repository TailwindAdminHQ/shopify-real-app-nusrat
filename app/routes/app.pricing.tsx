import React from 'react';
import { Button, Card, Layout, Page } from '@shopify/polaris';
import { json, useLoaderData } from "@remix-run/react";
// interface AppPurchaseResponse {
//   data?: {
//     appPurchaseOneTimeCreate?: {
//       appPurchaseOneTime?: {
//         createdAt?: string;
//         id?: string;
//         name?: string;
//         price?: {
//           amount: string;
//           currencyCode: string;
//         };
//       };
//       confirmationUrl?: string;
//     };
//   };
// }

export async function loader({ request }: { request: Request }) {
  const sectionsData = [
    {
      id: 1,
      name: "Section 1",
      price: 5.00,
      file: "/files/section1.pdf",
      featuredImage: "/images/section1.png",
      category: "Category 1",
      tags: "tag1, tag2",
    },
    {
      id: 2,
      name: "Section 2",
      price: 6.00,
      file: "/files/section2.pdf",
      featuredImage: "/images/section2.png",
      category: "Category 2",
      tags: "tag3, tag4",
    },
    {
      id: 3,
      name: "Section 3",
      price: 7.00,
      file: "/files/section3.pdf",
      featuredImage: "/images/section3.png",
      category: "Category 3",
      tags: "tag5, tag6",
    },
  ];


  return json(sectionsData);
}

const Pricing = () => {
  const allSections = useLoaderData<typeof loader>();
  const handlePurchase = async (section: any) => {
    const response = await fetch("/app/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(section),
    });

    const data = await response.json();
    const confirmationUrl = data.data.appPurchaseOneTimeCreate.confirmationUrl
    // console.log('URLLLLLLLLLLLLLLLLLLLL=======================================================================================================================================',data.data.appPurchaseOneTimeCreate)
    if (confirmationUrl) {
      window.open(confirmationUrl, "_blank");
    }
  };

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card>
            {allSections.map((section) => (
              <Card key={section.id}>
                <p>Name: {section.name}</p>
                <p>Price: {section.price}</p>
                <p>Category: {section.category}</p>
                <p>Tags: {section.tags}</p>
                <Button onClick={() => handlePurchase(section)}>
                  Purchase
                </Button>
              </Card>
            ))}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Pricing;
