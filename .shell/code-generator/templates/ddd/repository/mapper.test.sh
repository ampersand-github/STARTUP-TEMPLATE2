#!/bin/bash

generateMapperTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${camelName}s } from \"@prisma/client\";
import { ${pascalName} } from \"../domain/${camelName}\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";
import { ${camelName}Mapper } from \"./${camelName}.mapper\";

describe(\"${camelName}Mapper\", (): void => {
  test(\"オブジェクトを生成できる\", () => {
    const props: ${camelName}s = {
      id: \"id\",
      gender: \"男性\",
      age: 20,
    };

    const actual = ${camelName}Mapper(props);
    expect(actual).toStrictEqual(expect.any(${pascalName}));
    expect(actual.id).toStrictEqual(${pascalName}Id.reBuild(props.id));
    expect(actual.gender.value).toStrictEqual(props.gender);
    expect(actual.age.value).toStrictEqual(props.age);
  });
});

" > "${targetDir}/repository/${camelName}.mapper.test.ts"
}
