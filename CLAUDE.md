# 3D Game — Babylon.js + TypeScript + Vite

## Project overview

ブラウザで動く3Dゲーム。Babylon.js (ES6 deep imports) + TypeScript + Vite構成。

## Commands

- `npm run dev` — 開発サーバー起動 (localhost:5173)
- `npm run build` — 型チェック + 本番ビルド (`tsc && vite build`)
- `npm run lint` — ESLint実行 (`eslint src/`)
- `npm run format` — Prettierでフォーマット適用
- `npm run format:check` — フォーマットチェックのみ
- `npm run docs` — typedocでAPIドキュメント生成 (`docs/`へ出力)

## Code style

- Prettier: semi, double quotes, trailing commas, printWidth 100
- ESLint: recommended + typescript-eslint recommended
- Cyclomatic complexity: ESLint `complexity` ルールで閾値 **10** (関数単位)

## Babylon.js deep imports

バンドルサイズ最小化のため `@babylonjs/core/Engines/engine` のようなdeep importを使用する。
メッシュ描画には副作用インポート `import "@babylonjs/core/Meshes/meshBuilder"` が必要。

## CI (GitHub Actions)

push / PR で以下を実行:

1. TypeScript型チェック (`tsc --noEmit`)
2. ESLint (循環的複雑度チェック含む)
3. Prettierフォーマットチェック
4. Viteビルド
5. typedocドキュメント生成

## Project structure

```
├── index.html          # エントリHTML
├── src/
│   └── main.ts         # シーン構築コード
├── eslint.config.js    # ESLint flat config
├── .prettierrc.json    # Prettier設定
├── typedoc.json        # typedoc設定
├── tsconfig.json       # TypeScript設定
├── vite.config.ts      # Vite設定
└── .github/workflows/ci.yml
```
