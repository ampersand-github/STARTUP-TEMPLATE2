#!/bin/bash

generateGenderTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Gender, GenderType } from \"../../domain/value-object/gender\";

describe(\"Gender\", (): void => {
  test(\"オブジェクトを生成できる\", () => {
    const actual = new Gender({ value: GenderType.male });
    expect(actual.value).toStrictEqual(GenderType.male);
  });
});
" > "${targetDir}/domain/value-object/gender.test.ts"
}
