// import {
//     Page,
// } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { authenticate } from "app/shopify.server";
// import { json, useLoaderData } from "@remix-run/react";
// import { shopifyApi, ApiVersion } from "@shopify/shopify-api";
// const host = process.env.HOST || 'http://localhost'; // Use a default value if undefined

// const admin = shopifyApi({
//     apiKey: process.env.SHOPIFY_API_KEY,
//     apiSecretKey: process.env.SHOPIFY_API_SECRET,
//     scopes: process.env.SCOPES.split(","),
//     hostName: host.replace(/https?:\/\//, ""),
//     apiVersion: ApiVersion.January25,
// });
// export async function loader({ request }) {
//     const { session } = await authenticate.admin(request);
  
//     try {
//       // Fetch all themes using the Theme resource
//       const themes = await admin.rest.resources.Theme.all({
//         session: session,
//       });
//   console.log(themes)
//       return json({ themes });
//     } catch (error) {
//       console.error("Error fetching themes:", error);
//       throw new Response("Failed to fetch themes", { status: 500 });
//     }
//   }

// // async function handleSectionInject() {
// //     const themeId = document.getElementById("theme-select").value;
  
// //     // Call your API to inject the section
// //     await fetch(`/app/inject-section`, {
// //       method: "POST",
// //       body: JSON.stringify({ themeId }),
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     });
// //   }

// export default function SettingsPage() {
//     const { themes } = useLoaderData();

//     return (
//         <Page>
//             <TitleBar title="Sections" />
//             <div>
//                 <label htmlFor="theme-select">Choose a theme:</label>
//                 <select id="theme-select">
//                     {themes.map((theme) => (
//                         <option key={theme.id} value={theme.id}>
//                             {theme.name}
//                         </option>
//                     ))}
//                 </select>
//                 {/* <button onClick={handleSectionInject}>Inject Section</button> */}
//             </div>        
//             </Page>
//     );
// }
// //https://admin.shopify.com/store/nogor-test-store/admin/api/2025-01/themes.json