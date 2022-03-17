# 1. Saga Of The Goblin Horde
Library for [Foundry VTT](https://foundryvtt.com/) which provides packaged setting information as well as bestiary, ruleset, and journal entries with items, armor, a gazetteer and more.

[![Version (latest)](https://img.shields.io/github/v/release/CrezTheHomie/Saga-Of-The-Goblin-Horde)](https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest/download/module.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=blueviolet)](https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest)
[![GitHub downloads (latest)](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets[?(@.name.includes('zip'))].download_count&url=https://api.github.com/repos/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest&color=green)](https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest)
[![Forge Install Base](https://img.shields.io/badge/dynamic/json?label=Forge%20Install%20Base&query=package.installs&suffix=%&url=https://forge-vtt.com/api/bazaar/package/lib-wrapper&colorB=brightgreen)](https://forge-vtt.com/)
[![GitHub issues](https://img.shields.io/github/issues-raw/CrezTheHomie/Saga-Of-The-Goblin-Horde)](https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/issues)
[![Ko-fi](https://img.shields.io/badge/-buy%20me%20a%20coffee-%23FF5E5B?logo=Ko-fi&logoColor=white)](https://ko-fi.com/crezyte)

- [1. Saga-Of-The-Goblin-Horde](#1-Saga-Of-The-Goblin-Horde)
  - [1.1. Why?](#11-why)
  - [1.2. Installation](#12-installation)
    - [1.2.1. As a Module](#121-as-a-module)
  - [1.3. Usage](#13-usage)
    - [1.3.1. Summary](#131-summary)
    - [1.3.2. Common Issues and Pitfalls](#132-common-issues-and-pitfalls)
    - [1.3.3. Art Assets](#133-art-assets)
  - [1.4. Support](#14-support)
    - [1.4.1. Module-specific Support](#141-module-specific-support)
    - [1.4.2. Community Support](#142-community-support)


## 1.1. Why?

I wanted ease of access to the rules settings I made for Zadmar's Saga Of The Goblin Hordes for FoundryVTT. Figured others would like to be able to set up a new campaign quickly as well and the amount of digital content for Savage Worlds via Foundry is limited at the moment.


## 1.2. Installation

### 1.2.1. As a Module
1.  Copy this link and use it in Foundry's Module Manager to install the Module

    > https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/releases/latest/download/module.json

2.  Enable the Module in your World's Module Settings

## 1.3. Usage

### 1.3.1. Summary

Usage of the compendium folders in FoundryVTT is somewhat simple. From a user's perspective, you will be able to import the elements in the compendium as by dragging and dropping them onto your world or their respective tab.

For example, if you would like to use the template for the Player Character Ict Redfang, you would navigate to the Compendium Packs tab in FoundryVTT, then navigate to the Default folder. In that Default folder will be the compendia for Saga Of The Goblin Horde. The Player Chater Ict Redfang can be found in the SOTGH-Bestiary compendium under the PCs/Pre-Gens directory inside said compendium.

### 1.3.2 Common Issues and Pitfalls

"The hyper links in many Edges and Hindrances don't link to anything".

I had thought about adding swade-core-rules from Pinnacle's Foundry VTT assets as a dependency, which is what many of the Edges and Hindrances link to, but decided against it. Please support the official release of the SWADE VTT assets to access these hyperlinks.

### 1.3.3 Art Assets

Unfortunately, no additional art assets are available for this module at the moment. As such, most of the actor tokens will default to the "mystery man" token in Foundry. However, if you are able to source art assets, you can link your own assets to the tokens, journal entries, items, and scenes onces you've imported them from their compendia to your game. 


## 1.4. Support

As with any piece of software, you might sometimes encounter issues with the Saga Of The Goblin Horde module that were unexpected with its release. Here is how you can find support.


### 1.4.1. Module-specific Support

When libWrapper notifies you of an error, it will usually let you know whether the issue is caused by a specific module or by the Saga Of The Goblin Horde module itself.

Many modules have support channels set up by their developers. If you receive any warnings about specific modules, please go to that module's repository and find their support channels.

If you find issues with , please submit an issue at this repository. [Saga-Of-The-Goblin-Horde issue tracker](https://github.com/CrezTheHomie/Saga-Of-The-Goblin-Horde/issues)

If you encounter an internal libWrapper error, or are a package developer looking for support (i.e. bug reports, feature requests, questions, etc), you may get in touch by opening a new issue on the . It is usually a good idea to search the existing issues first in case yours has already been answered before.

### 1.4.2. Community Support

The easiest way to find support when there are no module-specific support channels is to ask the Foundry community.

The largest community-provided support channels are:
- [FoundryVTT Discord](https://discord.gg/foundryvtt)'s #modules-troubleshooting channel
- [FoundryVTT Reddit](https://www.reddit.com/r/FoundryVTT)
