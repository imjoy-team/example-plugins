# Repository contains plugins for [ImJoy](https://imjoy.io)
Plugin repository for ImJoy.IO, with a special focus on deep learning applications.
For more details on ImJoy, see <https://github.com/oeway/ImJoy>.

These example plugins are described in our publication [Ouyang et al., arXiv:1905.13105, ImJoy: an open-source computational platform for the deep learning era](https://arxiv.org/abs/1905.13105).

The provided version are frozen at the time of publication. For more recent version, 
please also visit the plugin repositories

* [**ImJoy Plugins**](https://github.com/oeway/ImJoy-Plugins)
* [**ImJoy Demo Plugins**](https://github.com/oeway/ImJoy-Demo-Plugins)

## Dependencies and tags
The provided deep learning plugins are built on open-source Python libraries
with specific dependencies. For these plugins we therefore provide different
`tags`, that allow to control which libraries are installed.

Deep learning methods require large computational resources, e.g. training is 
often performed on GPUs rather than CPUs. For a quick primer on 'CPU vs GPU computing' 
see the dedicated section below.

For the ImJoy plugins, we hence provide tags to determine if a plugin will be
running on a GPU or CPU. Below we detail the operating systems and hardware 
configurations where the plugins were tested.

Some plugins, such as the `DPNUnet` are based on implementations that 
only permit GPU computations. Here, no `CPU` tag is provided. 

Additional tags can be added for other configurations. For this, please
file an issue [here](https://github.com/imjoy-team/example-plugins/issues).

**Table 1. Tested environments for the DPNUnet plugin**

| Operating System         | CPU | GPU | Hardware specification                                                          |
| ------------------------ | --- | --- | ------------------------------------------------------------------------------- |
| Ubuntu 16.04             | [X] | [X] | Application pod running on a NVIDIA DGX-1 node, with 4 Tesla V100 GPUs          |
| MacOS ( Mojave 10.14.4 ) | [X] | [ ] | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 |
| Window 10                | [ ] | [ ] | Not tested yet                                                                  |



**Table 2. Tested environments for the CARE plugin**

| Operating System         | CPU | GPU | Hardware specification                                                          |
| ------------------------ | --- | --- | ------------------------------------------------------------------------------- |
| Ubuntu 16.04             | [X] | [X] | Application pod running on a NVIDIA DGX-1 node, with 4 Tesla V100 GPUs          |
| MacOS ( Mojave 10.14.4 ) | [X] | [ ] | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 |
| Window 10                | [X] | [ ] | Windows 10 (Core i7 16GB DDR4)                                                  |



**Table 3. Tested environments for the ANNA-PALM plugin**

| Operating System         | CPU | GPU | Hardware specification                                                          |
| ------------------------ | --- | --- | ------------------------------------------------------------------------------- |
| Ubuntu 16.04             | [X] | [X] | Application pod running on a NVIDIA DGX-1 node, with 4 Tesla V100 GPUs          |
| MacOS ( Mojave 10.14.4 ) | [X] | [ ] | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 |
| Window 10                | [ ] | [ ] | Not tested yet                                                                  |

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
-   Installations can depend on the **operating systems**, e.g. to account for
    differences between Windows and Linux. This could be accounted for by 
    operating system specific tags, such as `CPU_Windows` for a plugin that will be using 
    CPUs on Windows.
  
  
