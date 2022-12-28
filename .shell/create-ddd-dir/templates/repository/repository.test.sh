#!/bin/bash

createRepositoryTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
repository.test.ts
" > "${targetDir}/repository/${camelName}.repository.test.ts"
}
