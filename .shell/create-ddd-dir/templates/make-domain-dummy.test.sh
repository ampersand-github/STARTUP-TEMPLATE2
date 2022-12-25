#!/bin/bash

createMakeDomainDummyTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { default${pascalName}, make${pascalName}Dummy } from \"src/${camelName}/domain/dummy/make-${camelName}-dummy\";
import { ${pascalName} } from \"src/${camelName}/domain/${camelName}\";
import { ${pascalName}Id } from \"src/${camelName}/domain/${camelName}-id\";

describe(\"make${pascalName}Dummy\", () => {
  describe(\"インスタンスが生成できる\", () => {
    it(\"指定をしない場合\", () => {
      const actual = make${pascalName}Dummy({});
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id).toStrictEqual(expect.any(${pascalName}Id));
      expect(actual.something1).toStrictEqual(default${pascalName}.something1);
      expect(actual.something2).toStrictEqual(default${pascalName}.something2);
    });
    it(\"指定をする場合\", () => {
      const id = ${pascalName}Id.create();
      const something1 = \"string\";
      const something2 = 100;
      const actual = make${pascalName}Dummy({ id: id, something1: something1, something2: something2 });
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id).toStrictEqual(expect.any(${pascalName}Id));
      expect(actual.id).toStrictEqual(id);
      expect(actual.something1).not.toStrictEqual(default${pascalName}.something1);
      expect(actual.something1).toStrictEqual(something1);
      expect(actual.something2).not.toStrictEqual(default${pascalName}.something2);
      expect(actual.something2).toStrictEqual(something2);
    });
  });
});

" > "${targetDir}/domain/dummy/make-${camelName}-dummy.test.ts"
}
