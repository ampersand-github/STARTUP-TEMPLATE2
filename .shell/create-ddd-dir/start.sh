#!/bin/bash
echo "= = = = = START = = = = = "

# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "変数宣言"
# - - - - - - - - - - - - - - - - - - - - - - - - -
pascalName="Sample" # <- ここを変える 頭大文字
camelName="sample" # <- ここを変える 頭小文字
srcDir="../../backend/src"
targetDir="${srcDir}/${camelName}"


# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "ディレクトリ作成"
# - - - - - - - - - - - - - - - - - - - - - - - - -
if [ -d ${targetDir} ]; then
  echo "すでにディレクトリが存在します。以降の処理をSKIPします"
  exit 1
fi

mkdir "${targetDir}"
mkdir "${targetDir}/domain"
mkdir "${targetDir}/domain/interface"
mkdir "${targetDir}/domain/dummy"
mkdir "${targetDir}/domain/value-object"
mkdir "${targetDir}/domain/entity"
touch "${targetDir}/domain/entity/.gitkeep"
mkdir "${targetDir}/domain/collection"
touch "${targetDir}/domain/collection/.gitkeep"
mkdir "${targetDir}/use-case"
mkdir "${targetDir}/use-case/response"
mkdir "${targetDir}/repository"
mkdir "${targetDir}/controller"
mkdir "${targetDir}/controller/request"

# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "ファイル作成"
# - - - - - - - - - - - - - - - - - - - - - - - - -

# モジュール
source ./templates/module.sh
createModuleFile "${targetDir}" $pascalName $camelName

# コントローラー
source ./templates/controller/controller.sh
createControllerFile "${targetDir}" $pascalName $camelName

source ./templates/controller/controller.test.sh
createControllerTestFile "${targetDir}" $pascalName $camelName

source ./templates/controller/request-dto.sh
createRequestDtoFile "${targetDir}" $pascalName $camelName

# リポジトリ
source ./templates/repository/repository.sh
createRepositoryFile "${targetDir}" $pascalName $camelName

source ./templates/repository/repository.test.sh
createRepositoryTestFile "${targetDir}" $pascalName $camelName

source ./templates/repository/mapper.sh
createMapperFile "${targetDir}" $pascalName $camelName

source ./templates/repository/mapper.test.sh
createMapperTestFile "${targetDir}" $pascalName $camelName

# ユースケース
source ./templates/use-case/find-one-use-case.sh
createFindOneUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/use-case/save-use-case.sh
createSaveUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/use-case/response-dto.sh
createResponseDtoFile "${targetDir}" $pascalName $camelName

# ドメイン
source ./templates/domain/domain.sh
createDomainFile "${targetDir}" $pascalName $camelName

source ./templates/domain/domain.test.sh
createDomainTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain/domain-id.sh
createDomainIdFile "${targetDir}" $pascalName $camelName

source ./templates/domain/domain-id.test.sh
createDomainIdTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain/domain.interface.sh
createDomainInterfaceFile "${targetDir}" $pascalName $camelName

source ./templates/domain/domain-id.test.sh
createDomainIdTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain/make-domain-dummy.sh
createMakeDomainDummyFile "${targetDir}" $pascalName $camelName

source ./templates/domain/make-domain-dummy.test.sh
createMakeDomainDummyTestFile "${targetDir}" $pascalName $camelName

# ドメイン 値オブジェクト
source ./templates/domain/value-object/age.sh
createAgeFile "${targetDir}" $pascalName $camelName

source ./templates/domain/value-object/age.test.sh
createAgeTestFile "${targetDir}" $pascalName $camelName

source ./templates/domain/value-object/gender.sh
createGenderFile "${targetDir}" $pascalName $camelName

source ./templates/domain/value-object/gender.test.sh
createGenderTestFile "${targetDir}" $pascalName $camelName

# その他

echo "= = = = = END = = = = = "
