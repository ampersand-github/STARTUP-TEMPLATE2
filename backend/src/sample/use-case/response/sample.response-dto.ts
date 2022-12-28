import { Sample } from "src/sample/domain/sample";

export class SampleResponseDto {
  private readonly age: number;
  private readonly gender: string;
  public constructor(sample: Sample) {
    this.age = sample.age.value;
    this.gender = sample.gender.value;
  }
}
