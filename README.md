# NodeJS bindings to GLFW

This projects attempts to provide platform-independent access to windowing system and input devices on desktop/laptop computers using GLFW 3 and above.

## Changes in this fork
- Removed AntTweakBar dependency
- Added TypeScript definitions
- Fixed compilation for newer Node versions
- Changed GL backend from GLEW to glad

## Notes
This fork has been tested on Linux only so far. Windows/Mac build settings have been adjusted, but might be erroneous. Windows compatibility might be tested in the future, depending on when/if this ever gets used on a Windows platform.
