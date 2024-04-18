const article = document.querySelector("article");

// document.queryselector may return null if the selector doesn't match anything
if(article) {
    
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length00;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // use the same styling as the publish information in the article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // support for API reference docs
    const heading = article.querySelector("h1");
    // support for article docs with date
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);

}