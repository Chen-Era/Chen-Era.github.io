(function() {  
    var style = document.createElement('style');  
    style.innerHTML = `  
    /* ����Ӣ������ */  
    body {  
        font-family: 'MyEnglishFont', sans-serif;  
    }  
    /* ������������ */  
    .chinese-content {  
        font-family: 'MyChineseFont', 'MyEnglishFont', sans-serif;  
    }  
    `;  
    document.head.appendChild(style);  
})();