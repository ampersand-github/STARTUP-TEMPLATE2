#!/bin/bash

generateMapperFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${camelName}s } from \"@prisma/client\";
import { I${pascalName}, ${pascalName} } from \"../domain/${camelName}\";
import { Gender } from \"../domain/value-object/gender\";
import { Age } from \"../domain/value-object/age\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";

export const ${camelName}Mapper = (${camelName}: ${camelName}s): ${pascalName} => {
  const props: I${pascalName} = {
    gender: new Gender({ value: Gender.getType(${camelName}.gender) }),
    age: new Age({ value: ${camelName}.age }),
  };
  const id = ${pascalName}Id.reBuild(${camelName}.id);
  return ${pascalName}.reBuild(props, id);
};

" > "${targetDir}/repository/${camelName}.mapper.ts"
}
