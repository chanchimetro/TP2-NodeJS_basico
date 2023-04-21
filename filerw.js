import fs from 'fs'
export function copiar(path1, path2){
    fs.copyFile(path1, path2, error => {
        if(error){
            console.log("Error", error);
        } else {
            console.log("\narchivo creado! :D (del ej. 4)");
        }
    })
}