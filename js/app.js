/**
 * @author: Raj Kumar Thapa
 * March 10 2022
 */
"use strict";
$(document).ready(function(){
    const articleList = $('#articlesList');
    articleList.on('click', 'a', function(event){
        event.preventDefault();
        const newArticle = `<article>
        <p>Article Title - 
            <a href="http://www.google.com">Click to Add a new Article</a>
        </p>
    </article>`;
    articleList.append(newArticle);
    });
});