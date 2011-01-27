$(document).ready(function() {
    //footnote = 1;
    $("q[cite],q[title],blockquote[cite],blockquote[title]").addClass("footnote");
    $(".footnote").each(function(f=1) {
        $(this).after(" <sup><a href=\"#fn"+i+"\">"+f+"</a></sup>");
        $("a[href=#fn"+f+"]").attr("id", "fnr" + f);
        cite="<li id=fn"+f+">";
        url=$(this).attr("cite");
        title=$(this).attr("title");
        if(title && url) {
            cite+="<a href=\""+url+"\">"+title+"</a>";
        } else if(title) {
            cite+=title;
        } else if(url) {
            cite+="<a href=\""+url+"\">"+url+"</a>";
        }
        cite+=" <a href=\"#fnr"+f+"\">&#8617;</a>";
        cite+="</li>";
        $("#footnotes").append(cite);
        //footnote++;
    });
});