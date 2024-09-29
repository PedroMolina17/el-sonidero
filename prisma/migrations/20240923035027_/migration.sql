/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "category";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageCover" (
    "id" SERIAL NOT NULL,
    "img_url" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "ImageCover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sound" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Sound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailSound" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url_youtube" VARCHAR(255),
    "url_command" VARCHAR(255),
    "date" TIMESTAMP(6) NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "duration" VARCHAR(50),
    "categoryId" INTEGER NOT NULL,
    "imageCoverId" INTEGER,
    "soundId" INTEGER NOT NULL,

    CONSTRAINT "DetailSound_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "DetailSound_name_key" ON "DetailSound"("name");

-- AddForeignKey
ALTER TABLE "DetailSound" ADD CONSTRAINT "DetailSound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailSound" ADD CONSTRAINT "DetailSound_imageCoverId_fkey" FOREIGN KEY ("imageCoverId") REFERENCES "ImageCover"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailSound" ADD CONSTRAINT "DetailSound_soundId_fkey" FOREIGN KEY ("soundId") REFERENCES "Sound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
