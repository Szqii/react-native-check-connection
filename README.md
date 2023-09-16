# React Native Check Connection

This package provides check connection functions.

Package solves the problem of running functions that require internet connection before the device is connected to the internet.

## Installation

- Using NPM

   ```shell
  npm install react-native-check-connection
   ```

## Usage

1. Import the function into your project
   ```ts
   import { waitForInternetConnection } from 'react-native-check-connection'
   ```
2. Use function in app.tsx
   ```ts
   await waitInternetConnection()
    // Do stuff that requires internet connection
    ```

## API

| Option                        | *Type*                |
|-------------------------------|-----------------------|
| **waitForInternetConnection** | *() => Promise<void>* |

## Contributing

All contributions are welcome.
If you would like to contribute to this project, feel free to submit pull requests.
Prior to making significant changes, I recommend opening an issue to discuss the changes.

## License

This project is licensed under the MIT license. For more information, refer to the `LICENSE` file.
