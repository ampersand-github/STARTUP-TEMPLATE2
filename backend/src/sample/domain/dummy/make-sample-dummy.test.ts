import { Sample } from "../sample";
import { SampleId } from "../sample-id";
import { Age } from "../value-object/age";
import { Gender, GenderType } from "../value-object/gender";
import { defaultSample, makeSampleDummy } from "./make-sample-dummy";

describe("makeSampleDummy", () => {
  describe("インスタンスが生成できる", () => {
    it("指定をしない場合", () => {
      const actual = makeSampleDummy({});
      expect(actual).toStrictEqual(expect.any(Sample));
      expect(actual.id).toStrictEqual(expect.any(SampleId));
      expect(actual.age).toStrictEqual(defaultSample.age);
      expect(actual.gender).toStrictEqual(defaultSample.gender);
    });
    it("指定をする場合", () => {
      const id = SampleId.create();
      const age = new Age({ value: 19 });
      const gender = new Gender({ value: GenderType.notApplicable });
      const actual = makeSampleDummy({ id: id, age, gender });
      expect(actual).toStrictEqual(expect.any(Sample));
      expect(actual.id).toStrictEqual(expect.any(SampleId));
      expect(actual.id).toStrictEqual(id);
      expect(actual.age).not.toStrictEqual(defaultSample.age);
      expect(actual.age).toStrictEqual(age);
      expect(actual.age).not.toStrictEqual(defaultSample.age);
      expect(actual.age).toStrictEqual(age);
    });
  });
});
