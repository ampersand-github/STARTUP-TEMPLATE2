#!/bin/bash

generateDomainTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { I${pascalName}, ${pascalName} } from \"./${camelName}\";
import { Age } from \"./value-object/age\";
import { ${pascalName}Id } from \"./${camelName}-id\";
import { Gender, GenderType } from \"./value-object/gender\";

describe(\"Sample\", () => {
  const props: I${pascalName} = default${pascalName};

  describe(\"オブジェクトの生成\", () => {
    it(\"createできる\", () => {
      const actual = ${pascalName}.create(props);
      expect(actual).toStrictEqual(expect.any(${pascalName}));
    });

    it(\"reBuildできる\", () => {
      const id = \"1234567-0000-1234-1111-123456789012\";
      const ${camelName}Id = ${pascalName}Id.reBuild(id);
      const actual = ${pascalName}.reBuild(props, ${camelName}Id);
      expect(actual).toStrictEqual(expect.any(${pascalName}));
      expect(actual.id.toString()).toStrictEqual(id);
    });
  });

  describe(\"値を取得できる\", () => {
    it(\"値を取得できる\", () => {
      const actual = ${pascalName}.create(props);
      expect(actual.gender).toStrictEqual(props.gender);
      expect(actual.age).toStrictEqual(props.age);
    });
  });
});

" > "${targetDir}/domain/${camelName}.test.ts"
}
