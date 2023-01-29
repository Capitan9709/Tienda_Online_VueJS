// Funcionamiento carrousel inicio
window.onload = () => {
    let imagenes = ["../assets/media/banderausa.jpg","../assets/media/estopa.jpg","../assets/media/italianoraro.jpg","../assets/media/flamenca.jpg"];
    let i = 0;
    setInterval(() => {
        i++;
        if(i >= imagenes.length){
            i = 0;
        }
        $("#imagen-carrousel").fadeOut("slow", function(){
            $(this).attr("src", imagenes[i]);
            $(this).fadeIn("slow")});
            
    }, 5000);
}