import { ISample, Sample } from "./sample";
import { Age } from "./value-object/age";
import { SampleId } from "./sample-id";
import { Gender, GenderType } from "./value-object/gender";

describe("Sample", () => {
  const props: ISample = {
    gender: new Gender({ value: GenderType.male }),
    age: new Age({ value: 20 }),
  };

  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      const actual = Sample.create(props);
      expect(actual).toStrictEqual(expect.any(Sample));
    });

    it("reBuildできる", () => {
      const id = "1234567-0000-1234-1111-123456789012";
      const sampleId = SampleId.reBuild(id);
      const actual = Sample.reBuild(props, sampleId);
      expect(actual).toStrictEqual(expect.any(Sample));
      expect(actual.id.toString()).toStrictEqual(id);
    });
  });

  describe("値を取得できる", () => {
    it("値を取得できる", () => {
      const actual = Sample.create(props);
      expect(actual.gender).toStrictEqual(props.gender);
      expect(actual.age).toStrictEqual(props.age);
    });
  });
});
