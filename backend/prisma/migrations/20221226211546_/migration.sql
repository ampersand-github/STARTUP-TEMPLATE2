/*
  Warnings:

  - Added the required column `something7` to the `samples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `samples` ADD COLUMN `something7` INTEGER NOT NULL;
