# Repository contains plugins for [ImJoy](https://imjoy.io)

Plugin repository for ImJoy.IO, with a special focus on deep learning applications.

See <https://github.com/oeway/ImJoy> for more details.

## Dependencies and tags
The provided deep learning plugins are built on open-source Python libraries
with specific dependencies. For these plugins we therefore provide different
`tags`, that allow to control which libraries are installed. Frequently, we use
`GPU` and `CPU` to determine if the plugin is running on a CPU or GPU.

| Operating System   |                      Hardware specification                |  CPU | GPU|
| -------------------------------------- | ------------------------------------ | --- | ---|
| MacOS ( Mojave 10.14.4 )        | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 | [ ] | [ ]|
| Windows 10 (...)  | [ ]  | [ ]  |   |
| Ubuntu 16.04  |   | [ ]  | [ ]  |



## Note
The ImJoy web app will read the `manifest.imjoy.json` from this repository in order to render the plugin store list, when a new plugin file is added to the `repository` folder, run the following command to update the `manifest.imjoy.json` file:
