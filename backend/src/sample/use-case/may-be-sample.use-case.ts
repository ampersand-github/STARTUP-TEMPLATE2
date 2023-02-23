import { Inject, Injectable } from "@nestjs/common";
import { ISampleRepository } from "../domain/interface/sample.interface";
import { SampleId } from "../domain/sample-id";
import { SampleResponseDto } from "./response/sample.response-dto";

@Injectable()
export class MayBeSampleUseCase {
  constructor(
    @Inject("SampleRepositoryProvide") private readonly sampleRepository: ISampleRepository
  ) {}

  public async execute(id: string): Promise<SampleResponseDto | null> {
    try {
      const sampleId = SampleId.reBuild(id);
      const sample = await this.sampleRepository.findOne(sampleId);
      if (sample) return new SampleResponseDto(sample);
      return null;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
