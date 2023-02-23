#!/bin/bash

createMakeDomainDummyFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName}Id } from \"../${camelName}-id\";
import { I${pascalName}, ${pascalName} } from \"../${camelName}\";
import { Age } from \"../value-object/age\";
import { Gender, GenderType } from \"../value-object/gender\";

// - - - - - - - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const default${pascalName}: I${pascalName} = {
  age: new Age({ value: 30 }),
  gender: new Gender({ value: GenderType.male }),
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const make${pascalName}Dummy = ({
  id = ${pascalName}Id.create(),
  age = default${pascalName}.age,
  gender = default${pascalName}.gender,
}): ${pascalName} => {
  return ${pascalName}.reBuild({ age, gender }, id);
};

" > "${targetDir}/domain/dummy/make-${camelName}-dummy.ts"
}
