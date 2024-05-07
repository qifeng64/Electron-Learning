# init

- npm init -y
- npm install -D electron
- npm install -D @electron-forge/cli
- npx electron-forge import

# package.json

## type

```json
// forge.config.js 中需要模块不支持 ESM，不能直接将 type 设置为 modue
// 应将想要使用 ESM 语法的 .js 文件命名为 .mjs
```

## script

```json
// 不使用 electron-forge 时配置，若使用按 init 步骤会自动生成
// --trace-warnings 展示更详细的报错信息
"scripts": {
    "start": "electron . --trace-warnings"
}
```
