# Repository contains plugins for [ImJoy](https://imjoy.io)

Plugin repository for ImJoy.IO, with a special focus on deep learning applications.

See <https://github.com/oeway/ImJoy> for more details.

## Dependencies and tags

The provided deep learning plugins are built on open-source Python libraries
with specific dependencies. For these plugins we therefore provide different
`tags`, that allow to control which libraries are installed. Frequently, we use
`GPU` and `CPU` to determine if the plugin is running on a CPU or GPU.

| Operating System         | Hardware specification                                                          | CPU | GPU |
| ------------------------ | ------------------------------------------------------------------------------- | --- | --- |
| MacOS ( Mojave 10.14.4 ) | iMac (Retina 5K, 27-inch, Late 2014), 3.5 GHz Intel Core i5,32 GB 1600 MHz DDR3 | [ ] | [ ] |
| Windows 10 (...)         | [ ]                                                                             | [ ] | [ ] |
| Ubuntu 16.04             | [ ]                                                                             | [ ] | [ ] |


## Troubleshooting

Here we list some problems you might encounter when running deep learning
plugins, and propose solutions how solve them. Animated GIFs in the section
"Proposed solution" illustrate how to perform the proposed actions.

### Problem: "Could not find an available GPU"
This indicates that no GPU can be assigned to your computational task.

```
<DPNUnet>: Traceback (most recent call last):
File "/imjoy-engine/miniconda/lib/python3.6/site-packages/imjoy/worker.py", line 73, in handle_execute
exec(content, conn.local) # pylint: disable=exec-used
File "<string>", line 11, in <module>
File "/imjoy-engine/miniconda/envs/dsb2018-gpu/lib/python3.6/site-packages/GPUtil/GPUtil.py", line 203, in getFirstAvailable
raise RuntimeError('Could not find an available GPU after ' + str(attempts) + ' attempts with ' + str(interval) + ' seconds interval.')
RuntimeError: Could not find an available GPU after 1 attempts with 900 seconds interval.
```

**SOLUTION**: kill plugin processes which may occupying GPU and restart the plugin.


## Proposed solutions
For issue related to using a plugin which runs on the plugin engine,
 there the following basic operations can be used to resolve problem.

### Reload the plugin
Reloading the plugin can help to reassign it correctly to a computational ressource,
such as a remote computational cluster. 
<img src="https://dl.dropbox.com/s/rr1sh9m7mynh1mn/reload-plugin.gif" width="200" >

### Kill processes
Below we show how you can kill a specific process on a plugin engine. If multiple
users are connected to the same engine, make sure that you don't kill the process
of another user.

<img src="https://dl.dropbox.com/s/yw25p6l75t3962h/kill-plugin-process.gif" width="200" >

### Select Plugin Engine
Make sure that your plugin is running on the appropriate plugin engine.

As an example, your ImJoy instance is connected to two engine, one running on your local
computer `My computer` for some testing, one on a remote engine `imjoy.pasteur.cloud`.
The plugin `DPNUnet` should run on the remote engine for some deep learning based
cell segmentation. The GIF below shows how to select this engine for this plugin.
<img src="https://dl.dropbox.com/s/2a3lqruc7re2rid/select-engine.gif" width="200" >
