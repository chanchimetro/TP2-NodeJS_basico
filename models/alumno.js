export class Alumno {
    constructor(DNI, username) {
      this.DNI = DNI;
      this.username = username;
    }
  
    mostrar() {
      console.log(`usuario: ${this.username}, DNI: ${this.DNI}`);
    }
  }