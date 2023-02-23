import { Sample } from "../sample";
import { SampleId } from "../sample-id";

export interface ISampleRepository {
  count(id: SampleId): Promise<number>;
  findOne(id: SampleId): Promise<Sample>;
  save(sample: Sample): Promise<Sample>;
}
