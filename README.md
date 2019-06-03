# Repository contains plugins for [ImJoy](https://imjoy.io)

Plugin repository for ImJoy.IO, with a special focus on deep learning applications.

See <https://github.com/oeway/ImJoy> for more details.

## Dependencies and tags
The provided deep learning plugins are built on open-source Python libraries
with specific dependencies. For these plugins we therefore provide different
`tags`, that allow to control which libraries are installed.

Installations can depend on the **operating systems**, e.g. to account for
differences between Windows and Linux, or on importantly which type
of **computational hardware** the plugins are running on. Deep learning methods
require large computational resources, e.g. training is often performed on GPUs
rather than CPUs. For a quick primer on 'CPU vs GPU computing' see the
dedicated section below.

For the ImJoy plugins, we hence provide tags to determine if a plugin will be
running on a GPU or CPU, and if necessary provide operating system specific tags,
such as `CPU_Windows` for a plugin that will be using CPUs on Windows.

Below we detail the operating systems and hardware configurations where the
plugins were tested.

Additional tags can be added for other configurations. For this, please
file an issue [here](https://github.com/imjoy-team/example-plugins/issues).

| Operating System         | Hardware specification                                                          | CPU | GPU |
| ------------------------ | ------------------------------------------------------------------------------- | --- | --- |
| Ubuntu 16.04             | Application pod running on a NVIDIA DGX-1 node, with 4 Tesla V100 GPUs          | [X] | [X] |
| MacOS ( Mojave 10.14.4 ) | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 | [X] | [ ] |


## GPU vs CPU computing
Below we only a provide very brief overview over these two computational modes.
More details can be found in many online tutorials, for instance [here](https://medium.com/altumea/gpu-vs-cpu-computing-what-to-choose-a9788a2370c4.)

-   Training of large neural networks is frequently
    performed on so-called **GPUs (Graphics processing unit)**. These are specialised
    devices, which are ideally suited for training and prediction in deep learning
    applications. Many of the open-source libraries require GPUs of Nvidia. Such a device
    will not be available on every computer. Libraries might further depend on which
    specific GPU will be used.
-   As an alternative computations can be performed on the **CPU (central processing units)**,
    which is the general purpose processing unit of every computer. Here, training is
    often slow and in extreme cases not even possible. However, frequently trained networks
    can be be used with a **CPU**. While every computer will have a CPU, libraries will depend
    on the precise hardware specification and also the operating system.
