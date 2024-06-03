(function() {  
    var style = document.createElement('style');  
    style.innerHTML = `  
    /* 设置英文字体 */  
    body {  
        font-family: 'MyEnglishFont', sans-serif;  
    }  
    /* 设置中文字体 */  
    .chinese-content {  
        font-family: 'MyChineseFont', 'MyEnglishFont', sans-serif;  
    }  
    `;  
    document.head.appendChild(style);  
})();