createResponseDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
responseDto
" > "${targetDir}/use-case/${camelName}.response-dto.ts"
}


