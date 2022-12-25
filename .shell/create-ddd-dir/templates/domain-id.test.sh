#!/bin/bash

createDomainIdTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName}Id } from \"./${camelName}-id\";

describe(\"${pascalName}Id\", () => {
  describe(\"オブジェクトの生成\", () => {
    it(\"createできる\", () => {
      expect(${pascalName}Id.create()).toStrictEqual(expect.any(${pascalName}Id));
    });

    it(\"restoreできる\", () => {
      expect(${pascalName}Id.reBuild(\"test-id\")).toStrictEqual(expect.any(${pascalName}Id));
    });
  });
  it(\"toStringできる\", () => {
    expect(${pascalName}Id.reBuild(\"test-id\").toString()).toStrictEqual(\"test-id\");
  });

  it(\"equalsできる\", () => {
    expect(${pascalName}Id.reBuild(\"test-id\").equals(${pascalName}Id.reBuild(\"test-id\"))).toBe(true);
    expect(${pascalName}Id.reBuild(\"test-id\").equals(${pascalName}Id.reBuild(\"not-equal-id\"))).toBe(false);
  });
});
" > "${targetDir}/domain/${camelName}-id.test.ts"
}
