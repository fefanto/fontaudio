# Fontaudio - icon toolkit for Audio Developers

> Version 1.0 – validation stage - any (polite) feedback is welcome:

> to leave feedback use issues on this repo, hit [@fefanto](https://twitter.com/fefanto) on twitter, or drop a me a [mail](mailto:fefanto@gmail.com)

## The problem

You are writing your plugin suite (DSP test, DAW experiment or anything related to audio software) and before committing to a full time UI designer you'd like to avoid the "reinvent-the-UI-wheel" sindrome and use something free and tailored to your needs.

Your first stop is maybe the awesome ... [fontawesome](https://fontawesome.com/), and if you're programming in juce its equally awesome [juce wrapper](https://github.com/danlin/danlin_modules).

Lots of stuff is missing tough: mainstream icons sets may have your media player icons and some more random usable items, but everything super-duper-audio-specific like filters, arpeggiator types, LFO types, DAW toolbar icons are nowhere to be found in a consistent package. Also searching around you see incredible svg icon set projects (e.g. like [this](https://thenounproject.com/)) but information is sparse and even your scratch UIs are time consuming to cobble up.

## Enter FontAudio

This Icon set wants to be the one-stop-free-toolkit for Audio Software Related icons.

Its goal is:

- to help You out with your Time-to-Demo or Time-to-Product for your plugin or DAW.
- to be a consistent and up-to-date source for basic audio related Icons and artwork.
- to give you the joy of drawing the UI for a filter type icon or a rotary slider with just a couple of lines of code.

<h1><img src="https://github.com/fefanto/fontaudio/blob/master/screenshots/fad-screenshot.png?raw=true" alt="FontAudio demo screenshot" width="120%"></h1>

## License

FontAudio is MIT licensed so its free and You can use it for commercial projects and open source projects.

I am not an expert on svg and icons licenses, but I guess we can start from the [Fontawesome free license](https://fontawesome.com/license/free), and go from there.

All logos and brand references are trademarks of their respective owners.
The use of these trademarks does not indicate endorsement of the trademark holder by FontAudio, nor vice versa. _Please do not use brand logos for any purpose except
to represent the company, product, or service to which they refer._

**NOTE** : I tried to design icons myself as much as possible and use logos that could be of interest to the audio developer. If any imagery constituting Your intellectual property or trademark cannot be included here just drop me a line.

## Content

- **./build** : all the icon set standard formats (.ttf etc.)
- **./scripts** : js scripts for (1) creating the juce module binary data and icon names and (2) cleaning up the SVG files before they are stuffed in the font.
- **./svgs** : svg files (just fork, add your own and rebuild)
- **./svgs-refs** : svg files reference frames: these areused to design the icons within a base shape to keep a consistent "mass". Possibly use those as references for your custom svgs.
- **./wrappers/juce/module** : juce module
- **./wrappers/juce/demo** : juce demo [PIP](https://forum.juce.com/t/what-is-a-pip/26821)
- **./screenshots** : some screenshots (got no dedicated website yet)

## Dependencies

node/yarn (node 8.10 and yarn 1.13.0 used for this 1.0 release)

## Building the font

_if you don't have any icons to add, just use the font in /build or using its wrappers, otherwise..._

- run yarn
- design your custom svgs and add new svgs to /svgs folder
- run _yarn build:all_ (see package.json for the internal commands)

**NOTE**: the font icon generator node package I'm using does not play nice with svg translations/rotations ... all paths flattened please :)

**NOTE**: currently developed on a mac - please leave feedback if you find trouble using this on windows/linux. Will try to make this truly cross platform.

## Building the demo

- Drag the file _./wrappers/juce/demo/FontAudioDemo_PIP.h_ over your projucer (currently tested with juce 5.4.3 and 5.4.4)
- save your new projucer project somewhere (projucer command is : CMD+P)
- go to the projucer modules pane and select _"Add module from specified folder.."_ then select _./wrappers/juce/module/fontaudio_
- open your projucer preferred exporter and launch the demo

<h1><img src="https://github.com/fefanto/fontaudio/blob/master/screenshots/fad-screenshot-demo.png?raw=true" alt="FontAudio demo screenshot" width="100%"></h1>

## Contributing

- All (polite) feedback is welcome. Contacts are on top of this file.
- Pull requests with new svg icons added in ./svgs folder are welcome. Keep in mind the goal of this package is to contain all possible Audio-Software-Related icons, but these icons will need to have some minimal general interest and usability. This is where You and I may argue but I'm looking forward to clear my own mind on this with Your very welcome help.
- Design related feedback is _very_ welcome : I am NOT a designer and I tried to give this icon set a minimal consistence being well aware that the work is _very much_ improvable. For reference I used some 256x256 svg. You can find the at _./svgs-refs_.

## Roadmap::Tooling

_Stuff I intend to go forward with goes here - help is welcome._

- public yarn/npm package for web projects :
- other wrappers? wdl-ol / llv2? ..contributions/ideas/feedback here are vey welcome.

## Roadmap::Next Icons

_Icons that are more or less agreed to be useful and are queued go here_

- Drum Sampler Icons : kick, hat, cymbal etc. In more than one form maybe.

## Roadmap::Random Icon Ideas

_"maybe" icons go here ... feedback welcome on icons to include and also on how to design them._

_NOTE: not sure yet on how wide I want this package to be. E.g.: all analog "spice" blocks (opamps, resistors, diodes) may be considered as audio related since lots of plugins are modeling analog circuitry modeled ... But still I'm not that convinced to include them: too ambiguous and wide a topic..._

- spdif/TRS
- fade in/fade out
- audio formats: wav,mp3,aac,vorbis,aiff
- logos : recycle/remote
- send, return
- notes!!! quartes - octaves - triplets etc
- time signatures: 5/4,4/4,3/4,2/4,6/8,12/8
- db/oct : 6,12,18,24,48,96
- linear,exponential
- audio brands (there's a kvr post soewhere naming audio brands in order of "web reputation")
- review plugin types to see if some icons type arise -> delay / modulation / compression / reverb / distortion
- review synth types as well: additive, subtractive, FM, granular, wavetable, phase distortion etc.
- block diagram (opamp etc)
- more waveforms (fading in/out)
- more things distortion related (there's a "corrosion" plugin from sinevibes listing some funky distortion types :exponential, soft clip, hard clip, triangle clip, triangle foldback, single foldback, multi foldback, sine foldback, sine shred ... get some ideas from there.
