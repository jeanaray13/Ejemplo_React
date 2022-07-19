const person = {
    firstName: 'Gonzalo',
    lastName: 'Plata',
    greetAnonymous: () => console.log('Hello', this.firstName, '¿Qué tiene this?', this),
    greetFunction: function() {
        console.log('Hello', this.firstName, '¿Qué tiene this?', this);
    }
  }

person.greetAnonymous();

person.greetFunction();