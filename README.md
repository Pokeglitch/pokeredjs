# pokeredjs

A Javascript based Pokemon Red disassembly

---

# Notes

This repository is based on the pret pokered disassembly.  It is not using any reference to official Pokemon source codes.

This disassembly is a WIP, and is being built hand in hand with the js2gb Gameboy Assembler.

It still relies on using the Pokemon Red base rom for build confirmation.  That is not delivered with this package, and must be acquired separately.

It can be built through the pret pokered disassembly project: https://github.com/pret/pokered
---

# Instructions

1. Inside your local version of this repository, copy the Pokemon Red rom file and rename it to

`baserom.gb`

2. Install the latest js2gb module, running this in the command line:

`npm install js2gb`

3. Run the 'make.js' file

`node .\make.js`

4. You should see the build log in the console, and afterwards, the pokered.gb rom will be built in the directory