async function processMarkdownContent(text: string): Promise<string> {
  const { unified } = await import("unified");
  const remarkParse = (await import("remark-parse")).default;
  const remarkGfmPlugin = (await import("remark-gfm")).default;
  const remarkRehypePlugin = (await import("remark-rehype")).default;
  const rehypeRawPlugin = (await import("rehype-raw")).default;
  const rehypePrettyCodePlugin = (await import("rehype-pretty-code")).default;
  const rehypeStringifyPlugin = (await import("rehype-stringify")).default;

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfmPlugin)
    .use(remarkRehypePlugin, { allowDangerousHtml: true })
    .use(rehypeRawPlugin)
    .use(rehypePrettyCodePlugin, {
      theme: "github-dark",
      keepBackground: true,
    })
    .use(rehypeStringifyPlugin, { allowDangerousHtml: true })
    .process(text);

  return String(result);
}

export async function renderMarkdown(content: string): Promise<string> {
  // Extract <Collapse> blocks, render their inner markdown separately,
  // then re-inject as HTML inside <details>/<summary> elements.
  // This is necessary because remark-parse does not process markdown
  // that sits inside raw HTML blocks.
  const collapsePattern = /<Collapse summary="([^"]*)">[\s\S]*?<\/Collapse>/g;
  const collapseBlocks: { full: string; summary: string; inner: string }[] = [];

  let match;
  while ((match = collapsePattern.exec(content)) !== null) {
    const full = match[0];
    const summary = match[1];
    const inner = full
      .replace(/<Collapse summary="[^"]*">\s*/, "")
      .replace(/\s*<\/Collapse>$/, "");
    collapseBlocks.push({ full, summary, inner });
  }

  // Replace each Collapse block with a placeholder
  let processed = content;
  for (let i = 0; i < collapseBlocks.length; i++) {
    processed = processed.replace(
      collapseBlocks[i].full,
      `<!--COLLAPSE_PLACEHOLDER_${i}-->`
    );
  }

  // Render the main content
  let html = await processMarkdownContent(processed);

  // Render each Collapse block's inner content and inject back
  for (let i = 0; i < collapseBlocks.length; i++) {
    const innerHtml = await processMarkdownContent(collapseBlocks[i].inner);
    // Escape summary text to prevent HTML injection
    const safeSummary = collapseBlocks[i].summary
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
    const detailsHtml = `<details class="collapse-block"><summary>${safeSummary}</summary><div class="collapse-content">${innerHtml}</div></details>`;
    html = html.replace(`<!--COLLAPSE_PLACEHOLDER_${i}-->`, detailsHtml);
  }

  return html;
}
