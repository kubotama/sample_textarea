<template>
  <div class="text-center">
    <div>
      <textarea
        id="sampleTextArea"
        v-model="sampleText"
        placeholder="変換したい文字列を入力してください"
        rows="10"
        cols="50"
      ></textarea>
    </div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="black" dark v-on="on" outlined="true">
          プライバシーポリシー
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          プライバシーポリシー
        </v-card-title>

        <v-card-text>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          この規約に関しての詳細は<a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >
            Googleアナリティクスサービス利用規約のページ </a
          >や
          <a href="https://policies.google.com/technologies/ads?hl=ja"
            >Googleポリシーと規約ページ</a
          >をご覧ください。
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleText: "",
      dialog: false
    };
  }
};
</script>
