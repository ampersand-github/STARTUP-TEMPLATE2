#!/bin/bash

createRepositoryFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
repository.ts
" > "${targetDir}/repository/${camelName}.repository.ts"
}
