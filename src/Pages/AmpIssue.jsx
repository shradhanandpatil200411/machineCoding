import React, { useState } from "react";

function AmpIssue() {
  const [articleContent, setArticleContent] = useState("");

  const handlePaste = (e) => {
    // 1. Stop the rich text from pasting automatically
    e.preventDefault();

    // 2. Get the pasted data (it usually comes with HTML if copied from a webpage)
    const clipboardHtml =
      e.clipboardData.getData("text/html") ||
      e.clipboardData.getData("text/plain");

    // 3. The Magic: Use native DOMParser to strip all tags securely
    const parser = new DOMParser();
    const virtualDoc = parser.parseFromString(clipboardHtml, "text/html");

    // This extracts ONLY the text, ignoring all <span>, <style>, and <div> tags
    const cleanText = virtualDoc.body.textContent || "";

    // 4. Update the React State with the clean text
    setArticleContent((prev) => prev + cleanText);
  };

  return (
    <div className='h-screen w-fit mx-auto mt-10'>
      <textarea
        value={articleContent}
        onChange={(e) => setArticleContent(e.target.value)}
        onPaste={handlePaste}
        className='border mx-auto'
        placeholder='Paste news article here...'
        rows='10'
        cols='50'
      />
    </div>
  );
}

export default AmpIssue;
