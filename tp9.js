  const logElement = document.getElementById('log');
    function printToScreen(msg) {
        logElement.innerText += msg + "\n";
        console.log(msg);
    }
    logElement.innerText = ""; 
   
    function Persona(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Persona.prototype.obtDetalles = function() {
        let detalles = `Persona: ${this.nombre} | Edad: ${this.edad} | Género: ${this.genero}`;
        printToScreen(detalles);
    };


    function Estudiante(nombre, edad, genero, curso, grupo) {
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

   
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.registrar = function() {
        printToScreen(`REGISTRO: El estudiante ${this.nombre} se ha matriculado en ${this.curso} (${this.grupo}).`);
    };

   
    function Profesor(nombre, edad, genero, asignatura, nivel) {
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;

    Profesor.prototype.asignar = function() {
        printToScreen(`ASIGNACIÓN: El profesor ${this.nombre} impartirá ${this.asignatura} (Nivel: ${this.nivel}).`);
    };


    printToScreen("--- PRUEBA DE ESTUDIANTE ---");
    const alumno = new Estudiante("Ana López", 21, "Femenino", "Ingeniería", "A1");
    alumno.obtDetalles(); 
    alumno.registrar();   

    printToScreen("\n--- PRUEBA DE PROFESOR ---");
    const profe = new Profesor("Roberto Sanz", 42, "Masculino", "Física", "Universitario");
    profe.obtDetalles(); 
    profe.asignar();     