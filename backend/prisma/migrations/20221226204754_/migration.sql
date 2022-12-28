/*
  Warnings:

  - Added the required column `something4` to the `samples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `samples` ADD COLUMN `something4` INTEGER NOT NULL;
