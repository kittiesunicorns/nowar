# stopthewar-site

Static HTML site. Three pages, one shared stylesheet, no build process, no dependencies.

## Files

```
index.html       — homepage
email.html       — write your rep (rep cards + email template modal)
resources.html   — background reading and links
css/style.css    — shared stylesheet
```

## To publish on HostGator

1. Log into HostGator cPanel
2. Open File Manager → public_html
3. Upload all files maintaining the folder structure:
   - index.html → public_html/index.html
   - email.html → public_html/email.html
   - resources.html → public_html/resources.html
   - css/style.css → public_html/css/style.css
4. Done. No server config needed.

If using a subdirectory (e.g. stopthewar.yourdomain.com), upload into that folder instead.

## Before publishing — fill in the placeholders

Search for `[placeholder]` and `[Name]` across all files. Things to fill in:

### email.html
- Senator names, party affiliations
- Senate email addresses (format: firstname_lastname@senator.gov or via contact form)
- Senate contact form URLs
- House rep names, district numbers, boroughs
- House contact form URLs
- `resources@[yourdomain].nyc` email address

### resources.html
- Update the suggest-a-resource email address

### index.html + footer (all pages)
- Update `StopTheWar.nyc` with your actual domain once registered

## Domain suggestions (as of March 2026)

Check availability at NameCheap or GoDaddy:
- stopthewarny.org
- nystopthewar.org
- writeyourrep.nyc
- emailyourrep.nyc
- demandpeaceny.org
- nowarny.org

## Adding more reps (future states)

Each rep card in email.html follows the same pattern. Copy any `.rep-card` block,
update the name/district/links, and add a new entry to the `templates` object in the
`<script>` block at the bottom. Match the key name to the `onclick="openTemplate('key')"` value.

## Customization

Colors are CSS variables in css/style.css (`:root` block at top). Main accent: `--accent` (blue).
Warning/urgency color: `--warn` (dark red). Easy to change without touching HTML.
