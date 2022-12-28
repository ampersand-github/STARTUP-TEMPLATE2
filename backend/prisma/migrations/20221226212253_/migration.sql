/*
  Warnings:

  - You are about to drop the column `something3` on the `samples` table. All the data in the column will be lost.
  - You are about to drop the column `something4` on the `samples` table. All the data in the column will be lost.
  - You are about to drop the column `something5` on the `samples` table. All the data in the column will be lost.
  - You are about to drop the column `something6` on the `samples` table. All the data in the column will be lost.
  - You are about to drop the column `something7` on the `samples` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `samples` DROP COLUMN `something3`,
    DROP COLUMN `something4`,
    DROP COLUMN `something5`,
    DROP COLUMN `something6`,
    DROP COLUMN `something7`;
