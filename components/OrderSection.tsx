"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { dmLink, orderMessage } from "@/data/products";

export default function OrderSection({ product }: { product: Product }) {
  const [size, setSize] = useState<string>(product.sizes[0]);
  const [copied, setCopied] = useState(false);

  const message = orderMessage(product, size);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = message;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="order-box">
      <h2 className="order-box-title">
        SELECT SIZE — <span className="selected-readout">{size}</span>
      </h2>

      <div className="size-grid" role="group" aria-label="Select size">
        {product.sizes.map((s) => (
          <button
            key={s}
            type="button"
            className="size-btn"
            data-selected={s === size ? "true" : "false"}
            aria-pressed={s === size}
            onClick={() => {
              setSize(s);
            }}
          >
            {s === size ? `✓ ${s}` : s}
          </button>
        ))}
      </div>

      <a
        href={dmLink}
        target="_blank"
        rel="noopener noreferrer"
        className="order-btn"
      >
        ORDER VIA INSTAGRAM DM ↗
      </a>

      <div className="copy-box">
        <p className="copy-box-label">
          COPY THIS MESSAGE AND SEND IT IN THE DM:
        </p>
        <pre className="copy-msg" key={message}>{message}</pre>
        <button type="button" className="copy-btn" onClick={copyMessage}>
          {copied ? "COPIED ✓" : "COPY MESSAGE"}
        </button>
      </div>
    </div>
  );
}
