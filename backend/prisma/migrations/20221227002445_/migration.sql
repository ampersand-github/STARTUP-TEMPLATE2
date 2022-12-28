/*
  Warnings:

  - You are about to drop the column `something1` on the `samples` table. All the data in the column will be lost.
  - You are about to drop the column `something2` on the `samples` table. All the data in the column will be lost.
  - Added the required column `age` to the `samples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `samples` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `samples` DROP COLUMN `something1`,
    DROP COLUMN `something2`,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL;
