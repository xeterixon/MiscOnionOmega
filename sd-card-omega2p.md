#Getting the SD-Card reader to work on Omega2+
At the time of the writing of this, the "stock" Omega2+ firmware does not support the internal SD-card redader.

Get a firmware that supports it from http://repo.onion.io/omega2/images/
Note that the Omega2+ firmawares are named something like "omega2p-".
I used "omega2p-v0.1.8-b145.bin"

Log int to the Omega with ssh or use the terminal from the Omega web.
Download the firmware to the /tmp folder

` cd /tmp `

` wget http://repo.onion.io/omega2/images/omega2p-v0.1.8-b145.bin `

Upgrade firmware

` sysupgrade /tmp/omega2p-v0.1.8-b145.bin ` 

Edit /etc/opkg/distfeed.conf an uncomment the feeds:

src/gz reboot_core http://downloads.lede-project.org/snapshots/targets/ramips/mt7688/packages                                                     
src/gz reboot_base http://downloads.lede-project.org/snapshots/packages/mipsel_24kc/base 

opkg install kmod-usb-storage-extras e2fsprogs kmod-fs-ext4

Mount the SD-card do /mnt

mount /dev/mmcblk0p1 /mnt/

https://wiki.onion.io/Tutorials/Using-USB-Storage-as-Rootfs
