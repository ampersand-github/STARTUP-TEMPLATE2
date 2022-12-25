createSaveUseCaseFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
saveUseCase
" > "${targetDir}/use-case/save.use-case.ts"
}


