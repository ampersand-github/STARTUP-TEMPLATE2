/*
  Warnings:

  - Added the required column `something6` to the `samples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `samples` ADD COLUMN `something6` INTEGER NOT NULL;
