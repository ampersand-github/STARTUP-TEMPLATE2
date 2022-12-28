import { ISample, Sample } from "../domain/sample";
import { Inject, Injectable } from "@nestjs/common";
import { SampleId } from "../domain/sample-id";
import { ISampleRepository } from "../domain/interface/sample.interface";
import { Age } from "../domain/value-object/age";
import { Gender } from "../domain/value-object/gender";
import { SaveSampleRequestDto } from "../controller/request/save-sample.request-dto";

@Injectable()
export class SaveSampleUseCase {
  constructor(
    @Inject("SampleRepositoryProvide") private readonly sampleRepository: ISampleRepository
  ) {}

  public async execute(id: string, dto: SaveSampleRequestDto): Promise<void> {
    try {
      const sampleId = SampleId.reBuild(id);
      const props: ISample = {
        age: new Age({ value: dto.age }),
        gender: new Gender({ value: Gender.getType(dto.gender) }),
      };
      const sample: Sample = Sample.reBuild(props, sampleId);
      await this.sampleRepository.save(sample);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
