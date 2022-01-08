import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x042c30D3B5852932bA37030AD600876575F89e0C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Developer",
        description: "This NFT will give you access to SubgraphsDevsDAO!",
        image: readFileSync("scripts/assets/thegraph.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()