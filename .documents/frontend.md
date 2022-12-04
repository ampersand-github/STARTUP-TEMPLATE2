# FRONTEND
ここにはフロントエンドに関することを記述します。

### componentsの方針
atomic designをベースにしつつ、以下の改造を加える


#### organisms層をpresentationalとcontainerに分ける
- 以下のようにファイルを分ける
    - `organisms/index.ts`
    - `organisms/index.container.ts`
    - `organisms/index.stories.ts`
- メリット
    - index.tsが完全なるpresentationalになるため、storybookでの記述が簡単になる。
    - `index.container.ts`にロジックをまとめることでリファクタしやすくする
- デミリット
    - 記述量が増える。特に引数の引き渡しが大変になる


#### atoms層とmolecules層をelements層に統合する
- 単純にわけるのが面倒くさいというのが理由


#### templates層はpages層に統合し、あらたにlayouts層を設ける
- organisms層をpresentationalとcontainerに分離することで、pages層で必要なロジック記述量が減る
- 一方でtemplates層はorganismの調整をするだけ。
- 一本化することで記述が冗長になってしまうことを避ける
- Next.jsのlayouts層はtemplates層の代わりになる


### フロントエンドにおけるコンポーネントの切り分けの基準
- 厳密にするつもりはない。
- しかし、以下を場合は切り分ける
    - コードが100行を超えた場合
    - 同じコンポーネントを２箇所以上で使う場合
