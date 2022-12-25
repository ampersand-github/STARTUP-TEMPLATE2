#!/bin/bash
echo "= = = = = START = = = = = "

# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "変数宣言"
# - - - - - - - - - - - - - - - - - - - - - - - - -
pascalName="Sample"
camelName="sample"
srcDir="../../backend/src"
targetDir="${srcDir}/${camelName}"


# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "ディレクトリ作成"
# - - - - - - - - - - - - - - - - - - - - - - - - -
if [ -d ${targetDir} ]; then
  exit 1
fi

mkdir "${targetDir}"
mkdir "${targetDir}/domain"
mkdir "${targetDir}/domain/value-object"
touch "${targetDir}/domain/value-object/.gitkeep"
mkdir "${targetDir}/domain/entity"
touch "${targetDir}/domain/entity/.gitkeep"
mkdir "${targetDir}/domain/collection"
touch "${targetDir}/domain/collection/.gitkeep"
mkdir "${targetDir}/use-case"
mkdir "${targetDir}/repository"
mkdir "${targetDir}/controller"


# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "ファイル作成"
# - - - - - - - - - - - - - - - - - - - - - - - - -

# モジュール
source ./templates/module.sh
createModuleFile "${targetDir}" $pascalName $camelName

# コントローラー
source ./templates/controller.sh
createControllerFile "${targetDir}" $pascalName $camelName

source ./templates/controller.test.sh
createControllerTestFile "${targetDir}" $pascalName $camelName

# リポジトリ
source ./templates/repository.sh
createRepositoryFile "${targetDir}" $pascalName $camelName

source ./templates/repository.test.sh
createRepositoryTestFile "${targetDir}" $pascalName $camelName

source ./templates/mapper.sh
createMapperFile "${targetDir}" $pascalName $camelName

source ./templates/mapper.test.sh
createMapperTestFile "${targetDir}" $pascalName $camelName

# ユースケース
source ./templates/find-one-use-case.sh
createFindOneUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/save-use-case.sh
createSaveUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/response-dto.sh
createResponseDtoFile "${targetDir}" $pascalName $camelName

# ドメイン
source ./templates/domain.sh
createDomainFile "${targetDir}" $pascalName $camelName

source ./templates/domain.test.sh
createDomainTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain-id.sh
createDomainIdFile "${targetDir}" $pascalName $camelName

source ./templates/domain-id.test.sh
createDomainIdTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain.interface.sh
createDomainInterfaceFile "${targetDir}" $pascalName $camelName

# その他

echo "= = = = = END = = = = = "
