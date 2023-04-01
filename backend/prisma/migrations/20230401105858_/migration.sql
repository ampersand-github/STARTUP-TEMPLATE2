/*
  Warnings:

  - You are about to drop the column `profile` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `profile_text` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Made the column `nick_name` on table `profiles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motto` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `profile`,
    ADD COLUMN `profile_text` VARCHAR(191) NOT NULL,
    MODIFY `nick_name` VARCHAR(191) NOT NULL,
    MODIFY `motto` VARCHAR(191) NOT NULL;
