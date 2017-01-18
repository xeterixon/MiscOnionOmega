#Getting the SD-Card reader to work on Omega2+
**If this bricks your device, don't blame me**

At the time of the writing of this, the "stock" Omega2+ firmware (v0.1.7) does not support the internal SD-card reader.

Get a firmware that supports it from [http://repo.onion.io/omega2/images/]()
Note that the Omega2+ firmwares are named something like "omega2p-".
I used `omega2p-v0.1.8-b145.bin`

Log into to the Omega with ssh or use the terminal from the Omega web.
Download the firmware to the /tmp folder

``` 
cd /tmp 
wget http://repo.onion.io/omega2/images/omega2p-v0.1.8-b145.bin 
```

Upgrade firmware

`sysupgrade /tmp/omega2p-v0.1.8-b145.bin ` 

This will take a couple of minutes. If your on ssh the connection will be dropped. Once the LED on the Omega stops blinking and turn black you can switch it on again.
Login to it again.

Edit /etc/opkg/distfeed.conf an uncomment the feeds:

```
src/gz reboot_core http://downloads.lede-project.org/snapshots/targets/ramips/mt7688/packages                                                
src/gz reboot_base http://downloads.lede-project.org/snapshots/packages/mipsel_24kc/base 
```

Update the packages and install some tools
```
opkg update
opkg install kmod-usb-storage-extras e2fsprogs kmod-fs-ext4
```
On one of my devices, this produced a bunch of errors, on the other it went fine. Don't really know if alla of them are needed.

Mount the SD-card do /mnt

`mount /dev/mmcblk0p1 /mnt/`

To make the SD-card the "default" storage, look into this tutorial
[https://wiki.onion.io/Tutorials/Using-USB-Storage-as-Rootfs]()

##Issues
* There seems to be some certs missing. `git clone` and probably every other stuff that goes over https complains about some missing certificate. Really don't know how that stuff works.

