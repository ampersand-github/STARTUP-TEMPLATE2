import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { ISampleRepository } from "../domain/interface/sample.interface";
import { Sample } from "../domain/sample";
import { SampleId } from "../domain/sample-id";
import { samples } from "@prisma/client";
import { sampleMapper } from "./sample.mapper";

@Injectable()
export class SampleRepository implements ISampleRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async count(): Promise<number> {
    return this.prisma.samples.count();
  }

  public async findOne(id: SampleId): Promise<Sample | undefined> {
    try {
      const _id = id.toString();
      const result: samples | null = await this.prisma.samples.findUnique({ where: { id: _id } });
      return result ? sampleMapper(result) : undefined;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  public async save(sample: Sample): Promise<Sample> {
    try {
      const id = sample.id.toString();
      const property = { age: sample.age.value, gender: sample.gender.value };

      const result: samples = await this.prisma.samples.upsert({
        where: { id: id },
        create: { id: id, ...property },
        update: property,
      });

      return sampleMapper(result);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
