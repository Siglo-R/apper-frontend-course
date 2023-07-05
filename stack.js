
const stack = {
    inventory: [],
    push: function(product) {
      this.inventory.push(product);
    },
    check: function(){
        console.log(stack.inventory)
    },
    pop: function(){
        this.inventory.pop();
    }

  };

  stack.push('fish');
  stack.push('Milk');
  stack.check();
  stack.pop();
  stack.check();