# README
これは自分用のテンプレートです。

### link
[新規事業用ウェブサービステンプレート - 全般](https://scrapbox.io/ampersand/%E6%96%B0%E8%A6%8F%E4%BA%8B%E6%A5%AD%E7%94%A8%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)[新規事業用ウェブサービステンプレート - 全般](https://scrapbox.io/ampersand/%E6%96%B0%E8%A6%8F%E4%BA%8B%E6%A5%AD%E7%94%A8%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)

### モジュールベースで分けるかディレクトリベースでわけるか
モジュールベースで分ける
- メリット
  - 情報が一元化されていてわかりやすい
  - 高凝縮とみなすことができる？
  - 情報を探しやすい


### インターフェイスの命名方針
関数やクラスの名前の先頭にIをつける  
例：`export const useAuth = (): IUseAuth => {`

### フロントエンドについて
[frontend.md](.documents/frontend.md)に記述

### バックエンドについて
[backend.md](.documents/backend.md)に記述

### TODOリスト・懸念点
[テンプレートのtodo・懸念点 - 全般](https://scrapbox.io/ampersand/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%81%AEtodo%E3%83%BB%E6%87%B8%E5%BF%B5%E7%82%B9)


###
echo ■ 環境変数
echo GCP
export PROJECT_ID=startup-template2-stagin-79af5
export REGION=asia-northeast1
echo Cloud SQL
export INSTANCE_NAME=startup-template2-db
export CONNECTION_NAME=$PROJECT_ID:$REGION:$INSTANCE_NAME
export DB_USER=postgres
export DB_PASSWORD=password
export DATABASE_URL=postgresql://$DB_USER:$DB_PASSWORD@localhost:5432/postgres
echo Cloud run
export CONTAINER_NAME=startup-template2-backend
export DOCKER_REPOSITORY=asia.gcr.io/$PROJECT_ID/$CONTAINER_NAME
export DEPLOY_NAME=backend-deploy

echo ■ Cloud SQL インスタンス作成(最低)(初回のみ)
gcloud sql instances create $INSTANCE_NAME \
--database-version=POSTGRES_14 \
--tier=db-f1-micro \
--storage-size=10 \
--storage-type=HDD \
--region=$REGION

echo ■ Cloud SQL ユーザー作成(初回のみ)
gcloud sql users set-password $DB_USER \
--instance=$INSTANCE_NAME \
--password=$DB_PASSWORD

echo ■ ビルド
cd backend
gcloud builds submit \
--tag $DOCKER_REPOSITORY \
--project $PROJECT_ID

echo ■ ビルドイメージを Cloud Run にデプロイ
cd backend
gcloud run deploy $DEPLOY_NAME \
--region $REGION \
--image $DOCKER_REPOSITORY \
--project $PROJECT_ID \
--platform managed \
--allow-unauthenticated \
--add-cloudsql-instances $CONNECTION_NAME \
--set-env-vars project_id="startup-template2-stagin-79af5" \
--set-env-vars private_key_id="159e4489eb4784e68bd599280f5ee078b615cca6" \
--set-env-vars private_key="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrx73l0ognY4kc\nj0U72YXAmqOq2mguFu248jZ7SqGsrsViqlBOxBTSe607AQWJ5NSahO85bZnKkxxo\nbcJZ0AiRjT0urArgRwggfokpg12a1lc8QW0AUhvmeUtZ9Qr59kXQ9DNMyZL+4gH3\n4ZTuH0miNtugcUAE98fzeXtChgndAjV4Avzdb0WzRzsbXItrGQOq7g+2jL5YjtEw\nbC+mtd4Nwg/3XZQoFt3UeAA6AIu99P6QY1I2HvCP4vsTDYzP3275EGWcQZ3YOkkP\nv4mS9s/FGKP4hML6qNpukV9bMqhs+DNVz2F4ZSmk3kKRi3axb2nTVD2C9+uudkWR\n2Fk6lA13AgMBAAECggEAEDgv6f9S88UmMRgmBVyokGMJiRxOMevgTlIwarvFQDTQ\nVlyWcJl7DdS3qpaSG08L8/sRS27Z0pLJX+LdMvW9mWCoojuEW2DZl5fbA5xvvir2\n2a2jyR/3mm9hegD1JFzogq5MGbf+tSpJ3UnjcghqP3LGkgOfc9ihfI+/36wgSkm/\neR8UYFtNZFoyXY6gxfrzQFqGBMC0ps0F6wFUppRQ7YgzSZfe/3pvTPtkWv+AL7HD\nrj/MxfVjUmgxX/YL9gPXSIUtpGhTKbaMwkoJoeOQm0sr7oVhxEOpjuz1JyjFJLkb\nWNldH+2yhuQM+2NIJC1Z4OMfU1nosW+/6CVLBeUsIQKBgQDaCUqZPxpyhfcOewTj\nyZJX+Ho8sZ0TAhhdPqeGTPSRKFHZ+lErBZARa5CkPb2aZdtEYzYEvf15eGP6uiNT\negMCMxjxBYT1ARhzzz32cl+W7Xzo9iND878xfEliEwRdaWH4JwDIIjkAqfkgOu6/\ngJVORtxt+ZRJ0/KRIpLjQpMwbQKBgQDJsKRNzFk4d0zq8LmwYFZ27/ArFd48Uezo\ncThY7ibtK+MFbZxa7izTtxCspDsy6Hw28vLtlSqDgunpVsmgl+V5AQZCYd3waNm/\nCvCduJ5mZZnG2pxlTytH3f0F4dVquYYC1pNwvXtS/PCOwIJsamC5fbLg+bM6H6re\nTkp1q9+u8wKBgGA2D2P2E36LnMwX/r1hOiF1dMMJgQ1dNFEZD6VUmerfxtaP/Xcl\nekAlnerLj7nszkesG68WAx6xwDRoJKR2R5OV5qCcVeIi/J5FycrRB1s7Ko5F5qPa\nj/iPJnaPe7KYiPGOjGrDpzGiz1qohqecXsXuwOAKbKPzUas3fWeo/fg1AoGAKxKa\nRDMb6r8vogz+2vf3/zaGp+znpSIp4gor6nIRxhzVQteByLmMwTobSYNZUSntPR7t\nWme8yJEwuzBZpv5Jd2oMmCimaS07M112vXgr+9o+2QTe2ZPqvlJeMt9j4IL2Z6zD\nmBQfPj3ecd4S/GxLc9GwXfN1nzgcGZXGuRKXlpkCgYBgksydyVDgf5cotIqI+vVH\noDtSIqBVFq/0DjC2PyFNaW5CEkRDxUSlyxExoFlXBARWH+ZVsNvL01DIxgFoPE96\ndISMOF20JYvBWrFH/nD2+G1oZoqsiFo+Oe2fo0PabZU9e1hq/167IYyEDd+ySboE\nyPu4VEVA1gtUjuJ4Wm+d3w==\n-----END PRIVATE KEY-----\n" \
--set-env-vars client_email="firebase-adminsdk-s9rvh@startup-template2-stagin-79af5.iam.gserviceaccount.com" \
--set-env-vars client_id="104736114064226657069" \
--set-env-vars auth_uri="https://accounts.google.com/o/oauth2/auth" \
--set-env-vars token_uri="https://oauth2.googleapis.com/token" \
--set-env-vars auth_provider_x509_cert_url="https://www.googleapis.com/oauth2/v1/certs" \
--set-env-vars client_x509_cert_url="https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s9rvh%40startup-template2-stagin-79af5.iam.gserviceaccount.com" \
--set-env-vars DATABASE_URL="$DATABASE_URL?host=/cloudsql/$CONNECTION_NAME"
