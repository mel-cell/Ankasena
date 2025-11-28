export const serializeLexical = (node: any): string => {
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(serializeLexical).join("");
  }

  if (node.type === "text") {
    let text = node.text;
    if (node.format & 1) text = `<strong>${text}</strong>`;
    if (node.format & 2) text = `<em>${text}</em>`;
    if (node.format & 8) text = `<u>${text}</u>`;
    if (node.format & 16) text = `<code>${text}</code>`;
    return text;
  }

  const children = node.children?.map(serializeLexical).join("") || "";

  switch (node.type) {
    case "root":
      return children;
    case "paragraph":
      return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${children}</p>`;
    case "heading":
      const levels: Record<number, string> = {
        1: "text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-white",
        2: "text-3xl font-bold mb-5 mt-8 text-gray-900 dark:text-white",
        3: "text-2xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white",
        4: "text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-white",
        5: "text-lg font-semibold mb-2 mt-4 text-gray-900 dark:text-white",
        6: "text-base font-semibold mb-2 mt-4 text-gray-900 dark:text-white",
      };
      return `<h${node.tag} class="${levels[node.tag] || ""}">${children}</h${node.tag}>`;
    case "list":
      const listClass =
        "list-disc list-inside mb-4 pl-4 text-gray-700 dark:text-gray-300";
      return `<${node.tag} class="${listClass}">${children}</${node.tag}>`;
    case "listitem":
      return `<li class="mb-1">${children}</li>`;
    case "quote":
      return `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600 dark:text-gray-400">${children}</blockquote>`;
    case "link":
      return `<a href="${node.fields.url}" target="${node.fields.newTab ? "_blank" : "_self"}" class="text-primary-500 hover:underline">${children}</a>`;
    default:
      return children;
  }
};
