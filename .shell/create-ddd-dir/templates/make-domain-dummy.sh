#!/bin/bash

createMakeDomainDummyFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName}, I${pascalName} } from \"src/account/domain/${camelName}\";
import { ${pascalName}Id } from \"../${camelName}-id\";

// - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const default${pascalName}: I${pascalName} = {
  something1: \"something\",
  something2: 10,
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const make${pascalName}Dummy = ({
  id = ${pascalName}Id.create(),
  something1 = default${pascalName}.something1,
  something2 = default${pascalName}.something2,
}): ${pascalName} => {
  return ${pascalName}.reBuild({ something1: something1, something2: something2 }, id);
};

" > "${targetDir}/domain/dummy/make-${camelName}-dummy.ts"
}
