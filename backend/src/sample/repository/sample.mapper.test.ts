import { samples } from "@prisma/client";
import { Sample } from "../domain/sample";
import { SampleId } from "../domain/sample-id";
import { sampleMapper } from "./sample.mapper";

describe("sampleMapper", (): void => {
  test("オブジェクトを生成できる", () => {
    const props: samples = {
      id: "id",
      gender: "男性",
      age: 20,
    };

    const actual = sampleMapper(props);
    expect(actual).toStrictEqual(expect.any(Sample));
    expect(actual.id).toStrictEqual(SampleId.reBuild(props.id));
    expect(actual.gender.value).toStrictEqual(props.gender);
    expect(actual.age.value).toStrictEqual(props.age);
  });
});
