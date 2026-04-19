# Teniu Mobile Chat — 跨平台 AI 助手

> 您的个人 AI 工作空间 — 聊天、创建应用等

Teniu Mobile Chat 是一款快速响应的 AI 助手，基于 [SwiftChat](https://github.com/aws-samples/swift-chat) 开发，
采用 [React Native](https://reactnative.dev/) 构建，依托 [Amazon Bedrock](https://aws.amazon.com/bedrock/) 提供强大支持，
同时兼容 Ollama、DeepSeek、OpenAI 和 OpenAI 兼容的其他模型供应商。凭借极简设计理念与坚实的隐私保护措施，
该应用在 Android、iOS 和 macOS 平台上实现了实时流式对话、AI 图像生成、极速 Web 应用创建和语音对话功能。

### 新功能

- 升级至 React Native 0.85.1，启用 New Architecture，支持 Xcode 26+。
- 支持后台创建多个应用，iOS 使用 Live Activity 显示进度，Android 使用通知显示进度。
- 支持一句话创建或编辑极速 Web 应用。
- 支持网络搜索，获取实时信息。
- AI 图像生成、语音对话、丰富 Markdown 渲染等。

## 致谢

Teniu Mobile Chat 基于 AWS Samples 的 [SwiftChat](https://github.com/aws-samples/swift-chat) 项目开发。
感谢 SwiftChat 原团队的出色工作和开源贡献。

## 功能特性

### 多模型供应商 AI 聊天

- **Amazon Bedrock** — 直接 API Key 模式或通过 SwiftChat Server（API Gateway + Lambda）
- **Ollama** — 本地或远程 Ollama 服务器
- **DeepSeek** — DeepSeek API
- **OpenAI** — GPT 系列模型
- **OpenAI Compatible** — 任何 OpenAI 兼容的 API 端点（最多 10 个供应商）

### 核心能力

- 与 AI 进行实时流式聊天
- 极速 Web 应用创建、编辑和分享
- 支持后台创建应用并显示进度
- 网络搜索实时信息检索
- 丰富的 Markdown 支持：表格、代码块、LaTeX、Mermaid 图表等
- 带进度显示的 AI 图像生成
- 多模态支持（图像、视频和文档）
- 对话历史列表查看和管理
- 跨平台支持（Android、iOS、macOS）
- 针对 iPad 和 Android 平板电脑优化
- 快速启动和响应性能
- 完全可自定义的系统提示词助手

### 应用隐私与安全

- 加密的 API 密钥存储
- 最小权限要求
- 仅本地数据存储
- 无用户行为跟踪
- 无数据收集
- 隐私优先方针

## 应用构建和开发

首先，克隆此存储库。所有应用代码位于 `react-native` 文件夹中。在继续之前，执行以下命令下载依赖项。

```bash
cd react-native && npm i && npm start
```

### 构建 Android

打开新终端并执行：

```bash
npm run android
```

### 构建 iOS

同样打开新终端。首次运行需要执行 `cd ios && pod install && cd ..` 安装原生依赖，然后执行以下命令：

```bash
npm run ios
```

> **注意**：需要 Xcode 26+ 和 Ruby 3.3 来运行 CocoaPods。如果 `pod install` 因 `objectVersion` 错误失败，
> 将 `ios/SwiftChat.xcodeproj/project.pbxproj` 中的 `objectVersion = 70` 改为 `objectVersion = 56`。

### 构建 macOS

1. 执行 `npm start`。
2. 双击 `ios/SwiftChat.xcworkspace` 在 Xcode 中打开项目。
3. 将构建目标更改为 `My Mac (Mac Catalyst)` 然后点击运行按钮。

## 配置

### Amazon Bedrock

<details>
<summary><b>配置 Bedrock API Key（点击展开）</b></summary>

1. 点击 [Amazon Bedrock 控制台](https://console.aws.amazon.com/bedrock/home#/api-keys/long-term/create) 创建长期 API 密钥。

2. 复制并粘贴 API 密钥到设置页面的（Amazon Bedrock -> Bedrock API Key）中。

3. 应用程序将根据您当前选择的区域自动获取最新的模型列表。如果列表中出现多个模型，说明配置成功。

</details>

### Ollama

<details>
<summary><b>配置 Ollama（点击展开）</b></summary>

1. 导航到 **设置页面** 并选择 **Ollama** 选项卡。
2. 输入您的 Ollama 服务器 URL。例如：`http://localhost:11434`
3. 输入您的 Ollama 服务器 API 密钥（可选）。
4. 输入正确的服务器 URL 后，您可以从 **Chat Model** 下拉列表中选择所需的 Ollama 模型。

</details>

### DeepSeek

<details>
<summary><b>配置 DeepSeek（点击展开）</b></summary>

1. 前往 **设置页面** 并选择 **DeepSeek** 选项卡。
2. 输入您的 DeepSeek API 密钥。
3. 从 **Chat Model** 下拉列表中选择 DeepSeek 模型：
   - `DeepSeek-Chat`
   - `DeepSeek-Reasoner`

</details>

### OpenAI

<details>
<summary><b>配置 OpenAI（点击展开）</b></summary>

1. 导航到 **设置页面** 并选择 **OpenAI** 选项卡。
2. 输入您的 OpenAI API 密钥。
3. 从 **Chat Model** 下拉列表中选择 OpenAI 模型。

</details>

### OpenAI Compatible

<details>
<summary><b>配置 OpenAI Compatible 模型（点击展开）</b></summary>

1. 导航到 **设置页面** 并选择 **OpenAI** 选项卡。
2. 在 **OpenAI Compatible** 下，输入：
   - 您的模型提供商的 `Base URL`
   - 您的模型提供商的 `API Key`
   - 您想使用的模型的 `Model ID`（用逗号分隔多个模型）
3. 从 **Chat Model** 下拉列表中选择您的一个模型。
4. 点击右侧的加号按钮添加另一个 OpenAI 兼容的模型提供商（最多 10 个）。

</details>

## API 参考

服务器部署请参考原 [SwiftChat Server 文档](server/README.md)。

## 许可证

此项目使用 MIT-0 许可证。详见 [LICENSE](LICENSE) 文件。
