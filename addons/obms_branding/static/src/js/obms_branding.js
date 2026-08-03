/** @odoo-module **/

// OBMS is the product name shown to users. Keep Odoo's internal namespaces,
// routes, and module identifiers intact for compatibility with the server.
const replaceBrandText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
        if (node.parentElement?.closest("script, style, code, pre, textarea")) continue;
        if (/\bodoo\b/i.test(node.nodeValue || "")) {
            node.nodeValue = node.nodeValue.replace(/\bodoo\b/gi, "OBMS");
        }
    }
};

const refreshBranding = () => {
    if (document.title && /odoo/i.test(document.title)) {
        document.title = document.title.replace(/\bodoo\b/gi, "OBMS");
    }
    replaceBrandText(document.body);
};

if (document.body) refreshBranding();
new MutationObserver(refreshBranding).observe(document.documentElement, {
    childList: true,
    subtree: true,
});
