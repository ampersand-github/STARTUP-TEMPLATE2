#!/bin/bash

createMapperFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
mapper.ts
" > "${targetDir}/repository/${camelName}.mapper.ts"
}
