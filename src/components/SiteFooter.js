import React from "react";
import "./SiteFooter.css";
import NewsletterForm from "./Footer/NewsletterForm";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>footer text</span>
      <NewsletterForm />
    </footer>
  );
}
