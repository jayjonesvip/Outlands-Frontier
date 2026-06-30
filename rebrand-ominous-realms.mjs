OMINOUS REALMS REBRAND PACKAGE

Use this from your existing ominous-realms repo folder.

Easiest Windows steps:
1. Unzip this package.
2. Copy these files/folders into the root of your ominous-realms repo, next to index.html.
3. Double-click apply-rebrand.bat.

What it creates/updates:
- index.html
- styles.css
- script.js
- favicon.svg
- assets/ominous-realms-splash.svg

What changes:
- Rebrands Ominous Frontier to Ominous Realms.
- Splits the single index.html into index.html + styles.css + script.js.
- Adds a new splash screen.
- Adds favicon.svg.
- Adds a World Seed setting.
- Adds a Random seed button.
- Changing seed rebuilds/restarts the world with a rebuilding meter.

After it runs, open index.html locally and test.

Optional git steps:
git checkout -b rebrand-ominous-realms
git add index.html styles.css script.js favicon.svg assets/ominous-realms-splash.svg
git commit -m "Rebrand to Ominous Realms"
git push -u origin rebrand-ominous-realms
