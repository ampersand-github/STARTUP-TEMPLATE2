#!/bin/bash

generateMakeDomainFakeTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../${camelName}\";
import { ${pascalName}Id } from \"../${camelName}-id\";
import { Age } from \"../value-object/age\";
import { Gender, GenderType } from \"../value-object/gender\";
import { default${pascalName}, makeFake${pascalName} } from \"./make-fake-${camelName}\";

describe(\"make${pascalName}Fake\", () => {
  describe(\"インスタンスが生成できる\", () => {
    it(\"指定をしない場合\", () => {
      const actual = makeFake${pascalName}({});
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id).toStrictEqual(expect.any(${pascalName}Id));
      expect(actual.age).toStrictEqual(default${pascalName}.age);
      expect(actual.gender).toStrictEqual(default${pascalName}.gender);
    });
    it(\"指定をする場合\", () => {
      const id = ${pascalName}Id.create();
      const age = new Age({ value: 19 });
      const gender = new Gender({ value: GenderType.notApplicable });
      const actual = makeFake${pascalName}({ id: id, age, gender });
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id).toStrictEqual(expect.any(${pascalName}Id));
      expect(actual.id).toStrictEqual(id);
      expect(actual.age).not.toStrictEqual(default${pascalName}.age);
      expect(actual.age).toStrictEqual(age);
      expect(actual.age).not.toStrictEqual(default${pascalName}.age);
      expect(actual.age).toStrictEqual(age);
    });
  });
});

" > "${targetDir}/domain/fake/make-fake-${camelName}.test.ts"
}
