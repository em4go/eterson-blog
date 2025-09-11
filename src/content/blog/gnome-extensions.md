---
title: 'GNOME extensions setup for productivity and aesthetics'
description: "A review of the GNOME extensions I use to gain productivity and give my desktop a touch of aesthetics in Fedora, with my top 3 essentials and how to install them step by step."
pubDate: 'Sep 11 2025'
heroImage: '../../assets/gnome-extensions/desktop-screenshot.png'
lang: 'en'
canonicalSlug: 'gnome-extensions'
---

Over the years I've bounced between different linux distributions and desktop environments, but for the past few years I've been using GNOME.
I like from GNOME that it's very easy to customize and that it has a lot of extensions available, so I can make it look and feel the way I want it to.

Right now I’m running Fedora Workstation 42 with GNOME Shell 48.4, and this combination has been the smoothest I’ve had in a long time. My priorities are clear:

- **Stability**: I want to have a stable and reliable system that doesn't give problems with any updates or new versions of the system. The RPM package manager is a plus.
- **Productivity**: I want to be able to work efficiently. As a programmer I use a lot of tools and I want to have a fast and smooth experience.
- **Aesthetics**: I want to have a visually appealing and modern interface. I like to have a clean and minimalistic look, but I also like to have a lot of customization options.

## GNOME extensions

GNOME works well out of the box, but for me, extensions are where the magic happens. Each one solves a small friction point. These are my favorites right now:

### AppIndicator and KStatusNotifierItem Support

This brings back the "legacy tray icons" that GNOME hides by default. For me, it’s essential for apps that remain open all the time like Docker, Slack, and Telegram.

[Link to extension](https://gitlab.com/ubuntu/gnome-shell-extension-appindicator)

### Caffeine

Sometimes I need to keep my laptop awake for long periods, like running heavy machine learning models training, executing data intensive tasks or simply when I don't want the laptop to sleep. Caffeine solves this with a single click. I like to keep the indicator in the top bar menu so I can always access it easily.

It includes a timer feature in case you want to set a specific amount of time to keep the laptop awake.

[Link to extension](https://github.com/eonpatapon/gnome-shell-extension-caffeine)

<!-- img-center img-xsmall img-no-shadow -->
![Caffeine](../../assets/gnome-extensions/caffeine-screenshot.png)

### Clipboard Indicator

I paste things all day: URLs, commands, notes, etc. and I often need to go back to something I copied 10 minutes ago. Clipboard Indicator keeps a searchable history (I set it to ~100 items, you never know when you'll need it 😉), ignores password fields for safety, and wipes itself clean when reaches a size limit.

[Link to extension](https://github.com/Tudmotu/gnome-shell-extension-clipboard-indicator)

<!-- img-center img-xsmall img-no-shadow -->
![Clipboard Indicator](../../assets/gnome-extensions/clipboard-indicator-screenshot.png)

### Color Picker

If you make slides, tweak docs, or do any kind of design/dev work, you’ll love this. I keep it at the top bar so I can grab a color on screen and instantly copy the hex code to my clipboard.

It also keeps track of the colors you've copied, so you can easily access them again, and it allows you to save colors to a favorites list.

[Link to extension](https://github.com/tuberry/color-picker)

<!-- img-center img-small img-no-shadow -->
![Color Picker](../../assets/gnome-extensions/color-picker-screenshot.png)

### Dash to Dock

GNOME's default dash is fine, but Dash to Dock makes switching apps faster and smarter. I set it to intelligent autohide, 48 px icons, and keep it at the bottom of the screen. It also handles multiple monitors gracefully, which is a must for me.

I can also access the dock programs using keyboard shortcuts. For example, Super + Ctrl + 1 to access the first program, Super + Ctrl + 2 to access the second program, etc. You can configure the shortcuts in the settings.

[Link to extension](https://github.com/micheleg/dash-to-dock)

<!-- img-center img-small img-no-shadow -->
![Dash to Dock](../../assets/gnome-extensions/dash-to-dock-screenshot.png)

### Just Perfection

This one is about polish. It gives you switches for nearly every UI element in GNOME. I disable the world clock, cut down animations, specify a date format in the top bar, and many other tweaks. Small changes that add up to less distraction and smoother experience (and why not, elegant 🎩).

[Link to extension](https://gitlab.gnome.org/jrahmatzadeh/just-perfection)

### Space Bar

GNOME workspaces are powerful, but they can feel invisible. Space Bar fixes that by showing me my workspaces and window titles at a glance. It works beautifully with GNOME’s keyboard shortcuts for workspace navigation.

[Link to extension](https://github.com/christopher-l/space-bar/)

### Tactile

I like tiling, but I don’t want a full tiling window manager. Tactile is the sweet spot: it gives me edge and quarter tiling, configurable gaps, and shortcuts that fit my muscle memory. Windows snap into place, dialogs stay floating in the center, and nothing feels forced.

[Link to extension](https://gitlab.com/lundal/tactile)

### User Themes

This one is purely aesthetic: it lets me match the GNOME Shell with my GTK theme. The result is a cohesive look across apps and the desktop. I just make sure the theme keeps strong contrast for readability.

There are lots of themes available in the [GNOME Look website](https://www.gnome-look.org/browse/)

[Link to extension](https://gitlab.gnome.org/GNOME/gnome-shell-extensions)

## My top 3 essential extensions

After trying a lot of extensions, these are the ones that I find most useful:

1. [Clipboard Indicator](https://github.com/Tudmotu/gnome-shell-extension-clipboard-indicator). Saves me a lot of time when I need to copy something and I don't want to look for it again.
2. [Caffeine](https://github.com/eonpatapon/gnome-shell-extension-caffeine). It's a must for me when I need to keep my laptop awake for long periods.
3. [Dash to Dock](https://micheleg.github.io/dash-to-dock/). It makes my desktop look and feel much better.

These are the ones that I find most useful, but there are many more extensions available in the [GNOME Extensions website](https://extensions.gnome.org/).

## How to install extensions

To enable the usage of extensions, you need to install the packages `gnome-tweaks` and `gnome-browser-connector` (it replaced older `chrome-gnome-shell` naming in other distros). You can install them using this command:

```bash
sudo dnf install gnome-tweaks gnome-browser-connector
```

You can install extensions from the [GNOME Extensions website](https://extensions.gnome.org/) and manage them locally with the GNOME Extensions app.

```bash
sudo dnf install gnome-extensions-app
```

To deep dive into how to use and install extensions in fedora, you can check the [official documentation](https://docs.fedoraproject.org/en-US/quick-docs/gnome-shell-extensions/).
