#!/bin/bash

createMakeDomainDummyTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../${camelName}\";
import { ${pascalName}Id } from \"../${camelName}-id\";
import { Age } from \"../value-object/age\";
import { Gender, GenderType } from \"../value-object/gender\";
import { default${pascalName}, make${pascalName}Dummy } from \"./make-${camelName}-dummy\";

describe(\"make${pascalName}Dummy\", () => {
  describe(\"インスタンスが生成できる\", () => {
    it(\"指定をしない場合\", () => {
      const actual = make${pascalName}Dummy({});
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id).toStrictEqual(expect.any(${pascalName}Id));
      expect(actual.age).toStrictEqual(default${pascalName}.age);
      expect(actual.gender).toStrictEqual(default${pascalName}.gender);
    });
    it(\"指定をする場合\", () => {
      const id = ${pascalName}Id.create();
      const age = new Age({ value: 19 });
      const gender = new Gender({ value: GenderType.notApplicable });
      const actual = make${pascalName}Dummy({ id: id, age, gender });
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

" > "${targetDir}/domain/dummy/make-${camelName}-dummy.test.ts"
}
