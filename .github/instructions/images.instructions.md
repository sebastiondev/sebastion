---
applyTo: '**'
---

## Image handling across the blog

Every image surface on the blog - thumbnails, hero images, card previews - must follow these rules.

### Cover images with `next/image`

- Use `next/image` with `fill` and `object-cover` for all image containers.
- Always set appropriate `sizes` for responsive loading (e.g. `(max-width: 768px) 100vw, 55vw` for hero, `50vw` for cards, exact pixel value for small thumbnails).
- Add `priority` only to the first visible image (featured/hero).
- Wrap images in a positioned container (`relative`) with `overflow-hidden` and `rounded-*` for consistent clipping.

### Tinted overlay

Every image container must include a warm tinted gradient overlay sitting above the image. The overlay uses the blog's design tokens:

- Dark roast base: `#2C2520`
- Golden accent: `#8B6914`

Apply as a `bg-gradient-to-br` with these stops:

```
from-[#2C2520]/50 via-[#8B6914]/20 to-[#2C2520]/40   (hero / featured)
from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35   (cards / thumbnails)
```

The overlay div sits after the `<Image>` in the DOM so it layers on top. It uses `absolute inset-0` to fill the container.

### Posts without a cover image

When a post has no `coverImage`, the entire image container is hidden. The layout adapts:

- **Hero / featured cards:** The image block is omitted entirely and the text content takes full width.
- **Standard cards:** The image-above-text block is omitted, leaving just the text.
- **Compact cards:** The side-by-side layout collapses to a text-only block.
- **Single post page:** The 21:9 hero banner is not rendered at all.

This is intentional. Research digests, policy posts and other text-heavy content should not display a blank coloured rectangle. The `coverImage` frontmatter field is optional.

### Posts with a cover image

When `coverImage` is set, the image container renders with a warm placeholder background colour and `next/image`:

```ts
const placeholderColors = [
  "#C9BDA8", "#B8A992", "#A69882", "#D1C6B5",
  "#BEB0A0", "#C5B8A6", "#AFA193", "#D6CCBF",
];
```

### Pattern

```tsx
{post.coverImage && (
  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative"
    style={{ backgroundColor: fallbackColor }}>
    <Image
      src={post.coverImage}
      alt={post.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/45 via-[#8B6914]/15 to-[#2C2520]/35" />
  </div>
)}
```

### When adding new image surfaces

Any new component, page or layout that displays a post thumbnail or cover image must follow this pattern. The entire image container must be conditional on `post.coverImage` - never render an empty placeholder. No images should appear without the tinted overlay. No images should use raw `<img>` tags - always use `next/image`.

### Pages and components that render cover images

All of the following implement the conditional pattern above. When editing any of them, preserve the `next/image` + tinted overlay approach and the conditional rendering. When creating new pages with post listings, follow the same pattern.

| File | Surfaces |
|---|---|
| `components/EditorialGrid.tsx` | Hero card (featured, full-width), standard cards (4:3), compact cards (square thumbnail) |
| `app/posts/page.tsx` | Featured hero (4:3), image-top cards (16:10) |
| `app/posts/[slug]/page.tsx` | Full-width hero banner (21:9) at the top of each article |
| `app/tags/[tag]/page.tsx` | Wide cards (4:3) and compact square thumbnails in the tag listing |

Every surface in this table conditionally renders the image container only when `coverImage` is set. Posts without images display a clean text-only layout. Do not regress this behaviour.
