変更されたファイルをgitにコミットしてpushしてください。以下の手順で実行すること:

1. `git status` で変更されたファイルを確認する
2. 変更されたファイルを適切に `git add` する（.env や credentials などの機密ファイルは除外する）
3. `git diff --staged` で差分を確認し、変更内容に応じた簡潔で適切なコミットメッセージを作成する
4. `git commit` でコミットする
5. `git push` でリモートにpushする
