
User says the hero photo is being cropped on desktop. Looking at Hero.tsx, the image uses `h-[520px] md:h-[620px] object-cover` — fixed heights with object-cover crop the image. The uploaded screenshot shows the woman's face is cut off at top.

Fix: change `object-cover` to `object-contain` won't work well with fixed height + decorative frame. Better approach: remove fixed pixel heights, use natural aspect ratio (object-cover with proper object-position, or use aspect-ratio + object-contain).

Best fix: use `object-cover` with `object-position: top` so face stays visible, OR switch to `object-contain` and let the frame adapt. Since design has decorative beige backing + gold border, `object-cover object-top` keeps the editorial look while showing the face on all viewports.

Actually checking the screenshot — the face IS cropped at top edge. Using `object-position: top center` (object-top) will preserve the head/face area.

Plan:
- In `src/components/landing/Hero.tsx`, update the `<img>` className: replace `object-cover` with `object-cover object-top` so the photo anchors to the top and the face is always visible on both desktop and mobile.
- Optionally adjust heights to be slightly more generous on mobile to avoid bottom cropping.

Single small change, one file.
