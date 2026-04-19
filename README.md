# Teniu Mobile Chat — A Cross-platform AI Assistant

> Your Personal AI Workspace — Chat, Create Apps, and More

Teniu Mobile Chat is a fast and responsive AI assistant forked from [SwiftChat](https://github.com/aws-samples/swift-chat),
developed with [React Native](https://reactnative.dev/) and powered by [Amazon Bedrock](https://aws.amazon.com/bedrock/),
with compatibility extending to other model providers such as Ollama, DeepSeek, OpenAI and OpenAI Compatible.
With its minimalist design philosophy and robust privacy protection, it delivers real-time streaming conversations,
AI image generation, instant web app creation and voice conversation capabilities across Android, iOS, and macOS platforms.

### What's New

- Upgrade to React Native 0.85.1 with New Architecture enabled, supporting Xcode 26+.
- Support creating multiple apps in background with Live Activity on iOS and notifications on Android.
- Support create or edit instant web apps with one prompt.
- Support Web Search for real-time information retrieval.
- AI image generation, voice conversation, rich Markdown rendering and more.

## Acknowledgments

Teniu Mobile Chat is a fork of [SwiftChat](https://github.com/aws-samples/swift-chat) by AWS Samples.
We thank the original SwiftChat team for their excellent work and open-source contribution.

## Features

### Multi-Provider AI Chat

- **Amazon Bedrock** — Direct API Key mode or via SwiftChat Server (API Gateway + Lambda)
- **Ollama** — Local or remote Ollama server
- **DeepSeek** — DeepSeek API
- **OpenAI** — GPT series models
- **OpenAI Compatible** — Any OpenAI-compatible API endpoint (up to 10 providers)

### Core Capabilities

- Real-time streaming chat with AI
- Instant web app creation, editing and sharing
- Background app creation with progress tracking
- Web search for real-time information retrieval
- Rich Markdown Support: Tables, Code Blocks, LaTeX, Mermaid Chart and More
- AI image generation with progress
- Multimodal support (images, videos & documents)
- Conversation history list view and management
- Cross-platform support (Android, iOS, macOS)
- Tablet-optimized for iPad and Android tablets
- Fast launch and responsive performance
- Fully Customizable System Prompt Assistant

### App Privacy & Security

- Encrypted API key storage
- Minimal permission requirements
- Local-only data storage
- No user behavior tracking
- No data collection
- Privacy-first approach

## App Build and Development

First, clone this repository. All app code is located in the `react-native` folder. Before proceeding, execute the
following command to download dependencies.

```bash
cd react-native && npm i && npm start
```

### Build for Android

Open a new terminal and execute:

```bash
npm run android
```

### Build for iOS

Also open a new terminal. For the first time you need to install the native dependencies
by executing `cd ios && pod install && cd ..`, then execute the following command:

```bash
npm run ios
```

> **Note**: Requires Xcode 26+ and Ruby 3.3 for CocoaPods. If `pod install` fails with `objectVersion` error,
> change `objectVersion = 70` to `objectVersion = 56` in `ios/SwiftChat.xcodeproj/project.pbxproj`.

### Build for macOS

1. Execute `npm start`.
2. Double click `ios/SwiftChat.xcworkspace` to open the project in Xcode.
3. Change the build destination to `My Mac (Mac Catalyst)` then click the Run button.

## Configuration

### Amazon Bedrock

<details>
<summary><b>Configure Bedrock API Key (Click to expand)</b></summary>

1. Click [Amazon Bedrock Console](https://console.aws.amazon.com/bedrock/home#/api-keys/long-term/create) to create a
   long-term API key.

2. Copy and paste the API key to the (Amazon Bedrock -> Bedrock API Key) under Settings page.

3. The App will automatically get the latest model list based on the region you currently selected. If multiple models
   appear in the list, it means the configuration is successful.

</details>

### Ollama

<details>
<summary><b>Configure Ollama (Click to expand)</b></summary>

1. Navigate to the **Settings Page** and select the **Ollama** tab.
2. Enter your Ollama Server URL. For example: `http://localhost:11434`
3. Enter your Ollama Server API Key (Optional).
4. Once the correct Server URL is entered, you can select your desired Ollama models from the **Chat Model** dropdown
   list.

</details>

### DeepSeek

<details>
<summary><b>Configure DeepSeek (Click to expand)</b></summary>

1. Go to the **Settings Page** and select the **DeepSeek** tab.
2. Input your DeepSeek API Key.
3. Choose DeepSeek models from the **Chat Model** dropdown list:
   - `DeepSeek-Chat`
   - `DeepSeek-Reasoner`

</details>

### OpenAI

<details>
<summary><b>Configure OpenAI (Click to expand)</b></summary>

1. Navigate to the **Settings Page** and select the **OpenAI** tab.
2. Enter your OpenAI API Key.
3. Select OpenAI models from the **Chat Model** dropdown list.

</details>

### OpenAI Compatible

<details>
<summary><b>Configure OpenAI Compatible models (Click to expand)</b></summary>

1. Navigate to the **Settings Page** and select the **OpenAI** tab.
2. Under **OpenAI Compatible**, enter:
   - `Base URL` of your model provider
   - `API Key` of your model provider
   - `Model ID` of the models you want to use (separate multiple models with commas)
3. Select one of your models from the **Chat Model** dropdown list.
4. Click the plus button to add another OpenAI-compatible provider (up to 10).

</details>

## API Reference

For server deployment, please refer to the original [SwiftChat Server documentation](server/README.md).

## License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file.
