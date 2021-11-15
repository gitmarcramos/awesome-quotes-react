import React from "react";
import "./QuoteCardHeader.css";

export default function QuoteCardHeader(props) {
  
  return (
    <>
      <div className="quote_header">
        <div className="quote_header__infos">
          <div className="quote_header__infos--text">
            <span className="published-by">Published by: </span> 
            <a href="#" className="published-by-link"></a>
            <span className="publication-date">
              on{" "}
              <span id="quote-date" className="publication-date">
                DATE CREATED
              </span>
            </span>
          </div>

          <div className="quote_header__infos--kebab">
            <div className="kebab-dot"></div>
            <div className="kebab-dot"></div>
            <div className="kebab-dot"></div>
          </div>
        </div>
        <div className="quote_header__hashtags">
          <a href="#" className="hashtags">
            #HASHTAG
          </a>
        </div>
        <div className="line-separation"></div>
      </div>
    </>
  );
}
