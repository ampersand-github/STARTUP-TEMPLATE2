createControllerTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
${camelName}.controller.test.ts
" > "${targetDir}/controller/${camelName}.controller.test.ts"
}


