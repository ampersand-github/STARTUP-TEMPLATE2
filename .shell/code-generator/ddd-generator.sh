#!/bin/bash
echo "= = = = = START = = = = = "

# - - - - - - - - - - - - - - - - - - - - - - - - -
echo "変数宣言"
# - - - - - - - - - - - - - - - - - - - - - - - - -
pascalName="Profile" # <- ここを変える 頭大文字
camelName="profile" # <- ここを変える 頭小文字

# - - - - - - - - - - - - - - - - - - - - - - - - -
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
mkdir "${targetDir}/domain/fake"
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
source ./templates/ddd/module.sh
generateModuleFile "${targetDir}" $pascalName $camelName

# コントローラー
source ./templates/ddd/controller/controller.sh
generateControllerFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/controller/controller.test.sh
generateControllerTestFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/controller/request-dto.sh
generateRequestDtoFile "${targetDir}" $pascalName $camelName

# リポジトリ
source ./templates/ddd/repository/repository.sh
generateRepositoryFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/repository/mapper.sh
generateMapperFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/repository/mapper.test.sh
generateMapperTestFile "${targetDir}" $pascalName $camelName

# ユースケース
source ./templates/ddd/use-case/find-one-use-case.sh
generateFindOneUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/use-case/result-one-use-case.sh
generateResultOneUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/use-case/save-use-case.sh
generateSaveUseCaseFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/use-case/response-dto.sh
generateResponseDtoFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/use-case/result-response-dto.sh
generateResultResponseDtoFile "${targetDir}" $pascalName $camelName

# ドメイン
source ./templates/ddd/domain/domain.sh
generateDomainFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/domain.test.sh
generateDomainTestFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/domain-id.sh
generateDomainIdFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/domain-id.test.sh
generateDomainIdTestFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/domain.interface.sh
generateDomainInterfaceFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/domain-id.test.sh
generateDomainIdTestFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/make-domain-fake.sh
generateMakeDomainFakeFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/make-domain-fake.test.sh
generateMakeDomainFakeTestFile "${targetDir}" $pascalName $camelName

# ドメイン 値オブジェクト
source ./templates/ddd/domain/value-object/age.sh
generateAgeFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/value-object/age.test.sh
generateAgeTestFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/value-object/gender.sh
generateGenderFile "${targetDir}" $pascalName $camelName

source ./templates/ddd/domain/value-object/gender.test.sh
generateGenderTestFile "${targetDir}" $pascalName $camelName

# その他

echo "= = = = = END = = = = = "
