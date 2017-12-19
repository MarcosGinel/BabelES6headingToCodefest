class Person {
    constructor(name) {
      this._name = name;
    }

    hello() {
      if(typeof this._name === 'string') {
        return "<h1>Hola, soy " + this._name + "!</h1>";
      } else {
        return "<h1>Hello</h1>";
      }
    }

    get name() {
        return this._name;
    }

    set name(nombre) {
        if (nombre instanceof String) {
            this._name = nombre;
        } else {
            this._name = '';
        }
    }
}

var person = new Person("Cristina");

document.write(person.hello());
var saludo = () => "Esto es un saludo desde una arrow function";
document.write(saludo());