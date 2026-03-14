Place your sponsor logo images in this directory.

Recommended format: PNG or SVG with transparent background.
Recommended size: ~200px width, ~80px height.

Once you have added your images here (e.g., `logo1.png`), update `index.html` like this:

```html
<div class="slide"><img src="assets/images/sponsors/logo1.png" alt="Sponsor Name"></div>
```
The lines to edit are 380 to 397 in 
index.html
.

There are two identical sets of logos to create the loop effect:

First Set: Lines 380 - 387
Duplicate Set: Lines 390 - 397
Important: When you change a logo in the first set, make sure to change the corresponding logo in the duplicate set to keep the loop smooth.

<!-- First Set -->
380: <div class="slide"><img src="..." alt="Google"></div>
...
387: <div class="slide"><img src="..." alt="Adobe"></div>

<!-- Duplicate Set (Must match the first set!) -->
390: <div class="slide"><img src="..." alt="Google"></div>
...
397: <div class="slide"><img src="..." alt="Adobe"></div>