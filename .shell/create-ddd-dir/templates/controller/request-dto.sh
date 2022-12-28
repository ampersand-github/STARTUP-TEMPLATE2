createRequestDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
requestDto
" > "${targetDir}/controller/request/${camelName}.request-dto.ts"
}


