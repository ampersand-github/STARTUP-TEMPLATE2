/*
  Warnings:

  - Added the required column `something5` to the `samples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `samples` ADD COLUMN `something5` INTEGER NOT NULL;
