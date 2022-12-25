#!/bin/bash

createDomainTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName}, I${pascalName} } from \"./${camelName}\";
import { ${pascalName}Id } from \"./${camelName}-id\";

describe(\"${pascalName}\", () => {
  const props: I${pascalName} = {
    something1: \"something1\",
    something2: 1,
  };

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
      expect(actual.something1).toStrictEqual(props.something1);
      expect(actual.something2).toStrictEqual(props.something2);
    });
  });
});

" > "${targetDir}/domain/${camelName}.test.ts"
}
