function gerar(){
    var nome1 = document.getElementById('nome').value;
    var texto1 = document.getElementById("txt").value;

        
    document.getElementById("principal").innerHTML = texto1 + '<br>' + document.getElementById("principal").innerHTML;
    document.getElementById("txt").value = '';
    
    document.getElementById("principal").innerHTML = nome1 + '<br>' + document.getElementById("principal").innerHTML;
    document.getElementById("nome").value = '';
    
}

function limpar(){
    document.getElementById("principal").innerHTML = '';
}
