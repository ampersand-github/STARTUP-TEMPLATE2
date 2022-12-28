import { SampleId } from "src/sample/domain/sample-id";
import { ISample, Sample } from "../sample";
import { Age } from "../value-object/age";
import { Gender, GenderType } from "../value-object/gender";

// - - - - - - - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const defaultSample: ISample = {
  age: new Age({ value: 30 }),
  gender: new Gender({ value: GenderType.male }),
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const makeSampleDummy = ({
  id = SampleId.create(),
  age = defaultSample.age,
  gender = defaultSample.gender,
}): Sample => {
  return Sample.reBuild({ age, gender }, id);
};
