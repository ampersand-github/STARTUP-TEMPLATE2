createFindOneUseCaseFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
findOneUseCase
" > "${targetDir}/use-case/find-one.use-case.ts"
}


