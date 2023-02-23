import { PrismaService } from "src/module/prisma/prisma.service";
import { SampleRepository } from "./sample.repository";
import { makeSampleDummy } from "../domain/dummy/make-sample-dummy";
import { ISample, Sample } from "../domain/sample";
import { Age } from "../domain/value-object/age";
import { Gender, GenderType } from "../domain/value-object/gender";

describe("SampleRepository", () => {
  const prisma = new PrismaService();
  const sampleRepository = new SampleRepository(prisma);

  beforeAll(async () => {
    await prisma.allTruncateForMysql();
  });

  beforeEach(async () => {
    await prisma.samples.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("save", () => {
    const dummy = makeSampleDummy({});

    test("登録したデータが元のデータと等しい", async () => {
      const actual = await sampleRepository.save(dummy);
      expect(actual).toStrictEqual(dummy);
    });

    test("データの更新ができる", async () => {
      const props: ISample = {
        gender: new Gender({ value: GenderType.notKnown }),
        age: new Age({ value: 30 }),
      };
      const updatedDummy = Sample.reBuild(props, dummy.id);
      await sampleRepository.save(dummy);
      const actual = await sampleRepository.save(updatedDummy);
      expect(actual).toStrictEqual(updatedDummy);
    });
  });

  describe("findOne", () => {
    const dummy = makeSampleDummy({});

    test("データが存在しない場合はundefinedが返る", async () => {
      const actual = await sampleRepository.findOne(dummy.id);
      expect(actual).toStrictEqual(undefined);
    });

    test("登録したデータを取得できる", async () => {
      await sampleRepository.save(dummy);
      const actual = await sampleRepository.findOne(dummy.id);
      expect(actual).toStrictEqual(dummy);
    });
  });

  describe("count", () => {
    test("件数が取得できる", async () => {
      await sampleRepository.save(makeSampleDummy({}));
      await sampleRepository.save(makeSampleDummy({}));
      await sampleRepository.save(makeSampleDummy({}));
      const actual = await sampleRepository.count();
      expect(actual).toStrictEqual(3);
    });
  });
});
