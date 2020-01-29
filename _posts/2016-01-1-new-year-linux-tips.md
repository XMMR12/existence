---
title: New Year Linux Tips!
layout: post
author: Linux Admin
categories: []
tags: [linux]
excerpt_separator: <!--more-->
permalink: /new-year-linux-tips/
tweetid: 
---

## Checking versions

To check which kernel version you are running use uname -r

`uname -r`

To find out which RedHat (or CentOS) release is installed, have a look at /etc/redhat-release

`cat /etc/redhat-release`

## Checking Disk Space

To check disk space used / free use the df command and it will display each volume. The -h switch turns the bytes reading into GB to make it more readable.

`df -h`

If you want to check the size of a particular directory then use:

`du -sh /`

## Configuring DNS Settings

To configure which DNS servers your Linux server will use you need to edit /etc/resolv.conf

`vi /etc/resolv.conf`

Just add each name server as a new line as in the following example:

```
nameserver 1.1.1.1
nameserver 1.0.0.1
```

<!--more-->
## Changing the hostname

You'll find the hostname of the server in two places: /etc/hosts and /etc/sysconfig/network.

`vi /etc/hosts`

and

`vi /etc/sysconfig/network`

## Show Processor & Memory Usage

This is equivilant to the Windows Task Manager, and will show each process and the consumed CPU and RAM usage. Very useful!

`top`

## Show Processor Information

This command will display the processor type and speed.

`cat /proc/cpuinfo`

## Search command history for old commands you have forgotten!

Use the history command with grep to find previously entered commands.

`history | grep command`
