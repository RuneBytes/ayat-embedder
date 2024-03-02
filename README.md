# Ayat Embedder

Ayat Embedder is a mobile application developed using React Native and Expo. This project aims to provide a platform for embedding Quranic verses (Ayat) with translation in 52 Languages, in a video. Users can easily select specific verses, customize their appearance, and generate embedded video to share on different platforms.

## Features

- Verse Selection: Choose specific Quranic verses for embedding.

- Customization: Customize the appearance of the embedded verses, including font size, color, and style.

- Embedded Video Generation: Generate embedded video with verses for the selected verses with the chosen customization.

## Installation

### Clone the repository:

```bash
git clone https://github.com/runebytes/ayat-embedder.git
cd ayat-embedder
```

### Install dependencies:

```bash
npm install
```

### Start the Expo development server:

```bash
npm start
```

Follow the instructions in the console or the Expo DevTools to run the app on your desired platform (iOS or Android).

## Usage

- Launch the Ayat Embedder app on your device or emulator.

- Select the desired Quranic verses.

- Customize the appearance of the verses.

- Select the timestamps for each verses

- Share the embeded video on your preferred platform.

## Development Environment

- React Native
- Expo
- Android Studio Virtual Device for Android emulation

## How to Run

- Make sure you have a emulator (android studio in my case) and a device setup (for emulating), if you choose to run on your physical device, skip to step 4.

1. Navigate to the emulator folder `C:\Users\DELL\AppData\Local\Android\Sdk\emulator` (in my case) and open the terminal there.

2. Type in the following `./emulator -list-avds` to see all available devices
3. Type in `./emulator -avd {your_device_name_from_the_list_you_got_above}` to start the device
4. Start your project by opening in your Code Editor, and type in `npm start` in your terminal.
5. Follow the prompts to successfully run the app in the emulator, or your device

## Contributing

If you'd like to contribute to Ayat Embedder, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make changes and commit them.
- Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any inquiries or suggestions, feel free to reach out to sajibwebdev@gmail.com
