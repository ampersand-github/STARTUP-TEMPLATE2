#!/bin/bash

createRepositoryTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { PrismaService } from \"src/module/prisma/prisma.service\";
import { ${pascalName}Repository } from \"./${camelName}.repository\";
import { make${pascalName}Dummy } from \"../domain/dummy/make-${camelName}-dummy\";
import { I${pascalName}, ${pascalName} } from \"../domain/${camelName}\";
import { Age } from \"../domain/value-object/age\";
import { Gender, GenderType } from \"../domain/value-object/gender\";

describe(\"${pascalName}Repository\", () => {
  const prisma = new PrismaService();
  const ${camelName}Repository = new ${pascalName}Repository(prisma);

  beforeAll(async () => {
    await prisma.allTruncateForMysql();
  });

  beforeEach(async () => {
    await prisma.${camelName}s.deleteMany();
  });

  afterAll(async () => {
    await prisma.\$disconnect();
  });

  describe(\"save\", () => {
    const dummy = make${pascalName}Dummy({});

    test(\"登録したデータが元のデータと等しい\", async () => {
      const actual = await ${camelName}Repository.save(dummy);
      expect(actual).toStrictEqual(dummy);
    });

    test(\"データの更新ができる\", async () => {
      const props: I${pascalName} = {
        gender: new Gender({ value: GenderType.notKnown }),
        age: new Age({ value: 30 }),
      };
      const updatedDummy = ${pascalName}.reBuild(props, dummy.id);
      await ${camelName}Repository.save(dummy);
      const actual = await ${camelName}Repository.save(updatedDummy);
      expect(actual).toStrictEqual(updatedDummy);
    });
  });

  describe(\"findOne\", () => {
    const dummy = make${pascalName}Dummy({});

    test(\"データが存在しない場合はundefinedが返る\", async () => {
      const actual = await ${camelName}Repository.findOne(dummy.id);
      expect(actual).toStrictEqual(undefined);
    });

    test(\"登録したデータを取得できる\", async () => {
      await ${camelName}Repository.save(dummy);
      const actual = await ${camelName}Repository.findOne(dummy.id);
      expect(actual).toStrictEqual(dummy);
    });
  });

  describe(\"count\", () => {
    test(\"件数が取得できる\", async () => {
      await ${camelName}Repository.save(make${pascalName}Dummy({}));
      await ${camelName}Repository.save(make${pascalName}Dummy({}));
      await ${camelName}Repository.save(make${pascalName}Dummy({}));
      const actual = await ${camelName}Repository.count();
      expect(actual).toStrictEqual(3);
    });
  });
});

" > "${targetDir}/repository/${camelName}.repository.test.ts"
}
