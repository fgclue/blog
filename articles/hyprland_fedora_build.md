Hello, you might have seen people talk about this `Hyprland` window manager. It's a wlroots-based wayland compositor for linux. But, Hyprland is not in the Fedora Linux repositories. So, you have to compile it from source.
## Dependencies
You need to have `ninja-build cmake meson gcc-c++ libxcb-devel libX11-devel pixman-devel wayland-protocols-devel cairo-devel pango-devel` and `libdisplay-info libdisplay-info-devel libdisplay-info-tools libdrm libdrm-devel libliftoff-devel libliftoff`.
To install it, run: `sudo dnf install libdisplay-info libdisplay-info-devel libdisplay-info-tools libdrm libdrm-devel libliftoff-devel libliftoff ninja-build cmake meson gcc-c++ libxcb-devel libX11-devel pixman-devel wayland-protocols-devel cairo-devel pango-devel`
## Compiling
Now, you need to download the source code for Hyprland. Run `git clone --recursive https://github.com/hyprwm/Hyprland` to download the source code.
The `--recursive` argument is important. It will copy all the other branches of the repo into the subprojects folder.
Now, to compile you will need `meson` and `ninja`. Then run:
```
cd Hyprland
meson _build
ninja -C _build
```
Now, for installation. Run:
```
sudo ninja -C _build install
```
Done, now you need to copy the config to the config folder and the .desktop file to the /usr/share/wayland-sessions folder. Run:
```
sudo cp /usr/local/share/wayland-sessions/hyprland.desktop /usr/share/wayland-sessions
mkdir -p ~/.config/hypr
cp example/hyprland.conf ~/.config/hypr
```
Now, Hyprland is installed and you can now run it with your display manager or by running `Hyprland`.