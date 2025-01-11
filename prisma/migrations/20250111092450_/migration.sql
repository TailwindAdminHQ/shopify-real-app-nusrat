/*
  Warnings:

  - You are about to alter the column `price` on the `Sections` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "file" TEXT,
    "featuredImage" TEXT,
    "category" TEXT,
    "tags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Sections" ("category", "createdAt", "featuredImage", "file", "id", "name", "price", "shop", "tags", "updatedAt") SELECT "category", "createdAt", "featuredImage", "file", "id", "name", "price", "shop", "tags", "updatedAt" FROM "Sections";
DROP TABLE "Sections";
ALTER TABLE "new_Sections" RENAME TO "Sections";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
