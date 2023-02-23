import { samples } from "@prisma/client";
import { ISample, Sample } from "../domain/sample";
import { Gender } from "../domain/value-object/gender";
import { Age } from "../domain/value-object/age";
import { SampleId } from "../domain/sample-id";

export const sampleMapper = (sample: samples): Sample => {
  const props: ISample = {
    gender: new Gender({ value: Gender.getType(sample.gender) }),
    age: new Age({ value: sample.age }),
  };
  const id = SampleId.reBuild(sample.id);
  return Sample.reBuild(props, id);
};
