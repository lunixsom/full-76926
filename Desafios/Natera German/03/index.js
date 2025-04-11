document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('file-upload').addEventListener('change', function() {
        let fileName = this.files.length > 0 ? this.files[0].name : "Ningún archivo seleccionado";
        document.getElementById('fileName').innerHTML = fileName;
    });
})

