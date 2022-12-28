#!/bin/bash

createMapperTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
mapper.test.ts
" > "${targetDir}/repository/${camelName}.mapper.test.ts"
}
