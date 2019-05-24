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
![](https://dl.dropbox.com/s/rr1sh9m7mynh1mn/reload-plugin.gif)

### Kill processes
![](https://dl.dropbox.com/s/yw25p6l75t3962h/kill-plugin-process.gif)

### Select Plugin Engine
![](https://dl.dropbox.com/s/2a3lqruc7re2rid/select-engine.gif)
