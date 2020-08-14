
window.onload = criaElementos;
window.onload = CreatePesquisa;

function criaElementos() {

    var divframe = document.createElement('div');
    var closeIframe = document.createElement('span');
    var minizarIframe = document.createElement('span');
    var background = document.createElement('div');
    var background2 = document.createElement('div');

    divframe.id = "framediv"

    background.style.width = "142px";
    background.style.height = "138px";
    background.style.backgroundImage = "url(https://files.directtalk.com.br/1.0/api/file/public/d5debb43-afe6-47a9-b6b8-973f0c9ae78f/content-inline)"
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";
    background.style.backgroundSize = "135px";
    background.style.backgroundColor = "transparent";

    background2.style.width = "142px";
    background2.style.height = "138px";
    background2.style.backgroundImage = "url(https://files.directtalk.com.br/1.0/api/file/public/d5debb43-afe6-47a9-b6b8-973f0c9ae78f/content-inline)"
    background2.style.backgroundRepeat = "no-repeat";
    background2.style.backgroundPosition = "center";
    background2.style.backgroundSize = "135px";
    background2.style.backgroundColor = "transparent";

    divframe.appendChild(closeIframe);
    divframe.appendChild(minizarIframe);

    minizarIframe.style.backgroundImage = "url(https://i.ibb.co/3rRyPXS/fechar.png)";
    minizarIframe.style.position = "absolute"
    minizarIframe.style.right = "20px";
    minizarIframe.style.top = "20px";
    minizarIframe.style.width = "16px";
    minizarIframe.style.height = "16px";
    minizarIframe.style.cursor = "pointer";

    minizarIframe.onclick = DeleteIframe;

    closeIframe.onclick = desapareceIframe;
    
    closeIframe.style.backgroundImage = "url(https://i.ibb.co/3hq23fF/minimizar.png)";
    closeIframe.style.position = "absolute"
    closeIframe.style.left = "20px";
    closeIframe.style.top = "20px";
    closeIframe.style.width = "16px";
    closeIframe.style.height = "16px";
    closeIframe.style.cursor = "pointer";

    divframe.style.bottom = "10px";
    divframe.style.right = "30px";
    divframe.style.position = "fixed";

    document.body.appendChild(divframe);

    var framebutton = document.createElement('div');

    framebutton.appendChild(background);

    framebutton.style.right = "30px";
    framebutton.style.bottom = "10px";
    framebutton.style.borderRadius = "50%";
    framebutton.style.cursor = "pointer";
    framebutton.style.height = "142px";
    framebutton.style.position = "fixed";
    framebutton.style.transition = "0.5s ease-in-out";
    framebutton.style.zIndex = "99";
    framebutton.style.width = "138px";  
    framebutton.style.backgroundPosition = "center";
    framebutton.style.backgroundSize = "auto 50%";
    framebutton.style.outline = "none";
    framebutton.style.border = "none";

    var framebutton2 = document.createElement('button');

    framebutton2.style.right = "30px";
    framebutton2.style.bottom = "10px";
    framebutton2.style.cursor = "pointer";
    framebutton2.style.height = "142px";
    framebutton2.style.position = "fixed";
    framebutton2.style.transition = "0.5s ease-in-out";
    framebutton2.style.zIndex = "99";
    framebutton2.style.width = "138px";  
    framebutton2.style.backgroundPosition = "center";
    framebutton2.style.backgroundSize = "auto 50%";
    framebutton2.style.background = "transparent";
    framebutton2.style.outline = "none";
    framebutton2.style.border = "none";
    framebutton2.style.display = "none";

    framebutton2.appendChild(background2)

    framebutton2.id = "callback";

    framebutton.id = "iframebutton";
    document.body.appendChild(framebutton2);



    framebutton2.onclick = function() {
        document.getElementById('iframe').style.display = "block";
        document.getElementById('callback').style.display = "none";
    }
    

    framebutton.onclick = function exibirIframe() {

    // LINK DE ACESSO AO CHAT    
    const link = "https://www4.directtalk.com.br/chat31/?idd=B45300300C58200897F3";
    // DADOS USUARIO - INSERIR DO BANCO DE DADOS
    const nome = "Teste Teste";
    const email = "teste@teste.com";
    const telefone = "0000000000";
    const area = "aluno";
    const pesquisa = false;
    
    if (area == "aluno") {
        const link = "https://www4.directtalk.com.br/chat31/?idd=D4560030012BD0090972";
        if (pesquisa == false) {
        const aluno = `&nome=${nome}&email=${email}&telefone=${telefone}&area${area}`;

        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`;

    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    } else {
        const aluno = ""; 
        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`; 
    
    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    }
    } if (area == "comercial") {
        const link = "https://www4.directtalk.com.br/chat31/?idd=B45300300C58200897F3";

        if (pesquisa == false) {
        const aluno = `&nome=${nome}&email=${email}&telefone=${telefone}&area${area}`;

        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`;

    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    } else {
        const aluno = ""; 
        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`; 
    
    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    }
    } if (area == "parceiros") {
        const link = "https://www4.directtalk.com.br/chat31/?idd=BC3C00300FE5A0091056";

        if (pesquisa == false) {
        const aluno = `&nome=${nome}&email=${email}&telefone=${telefone}&area${area}`;

        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`;

    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    } else {
        const aluno = ""; 
        var iframe = document.createElement('iframe');
        iframe.id = "iframe"
        iframe.style.display = "none";
        iframe.style.width = "300px";
        iframe.style.height = "500px";

    iframe.style.display = "block";  
    iframe.src =  `${link}${aluno}`; 
    
    document.getElementById("framediv").appendChild(iframe);
    document.getElementById("iframebutton").style.display = "none";
    }
    }

  


    };
    document.body.appendChild(framebutton);

    function desapareceIframe() {
        document.getElementById("iframe").style.display = "none";
        document.getElementById("callback").style.display = "block";
    }

    function DeleteIframe() {
        document.getElementById("iframe").remove();
        document.getElementById("iframebutton").style.display = "block";
    }

    function CreatePesquisa() {

        var divPesquisa = document.createElement("Div")

        divPesquisa.style.right = "10px";
        divPesquisa.style.bottom = "30px";
        divPesquisa.style.position = "fixed";
        divPesquisa.style.width = "380px";
        divPesquisa.style.height = "420px";
        divPesquisa.style.backgroundColor = "black";


    }

}    