// function Log(constructor: Function) {
//   console.log(constructor)
// }


// function Log2(target: any, propName: string | Symbol) {
//   console.log(target)
//   console.log(propName)
// }
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(propName)
//   console.log(descriptor)
// }

// @Log

// interface ComponentsDecorator {
//   selector: string,
//   template: string
// }


// function Component(config: ComponentsDecorator) {
//   return function
//     <T extends { new(...args: any[]): object }>
//     (Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args)
//         const el = document.querySelector(config.selector)!;
//         el.innerHTML = config.template
//       }
//     }
//   }
// }

// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//   const original = descriptor.value;
//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return original.bind(this)
//     }
//   }
// }
// @Component({
//   selector: '#card',
//   template: `<div class="card"><div class="card-content"><span class="card-title">Card Component</span></div></div>`
// })
// class Components {
//   // @Log2

//   constructor(public name: string) {

//   }
//   // @Log3
//   @Bind
//   logName(): void {
//     console.log(`Component name ${this.name}`)
//   }
// }

// const card = new Components("My card component");

// const btn = document.querySelector("#btn")!;
// btn.addEventListener('click', card.logName);


//=========================

type ValidatorType = 'required' | 'email'
interface ValidatorConfig {
  [props: string]: {
    [validateProp: string]: ValidatorType
  }
}
const validators: ValidatorConfig = {}


function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name]
  if (!objConfig) {
    return true
  }
  let isValid = true;
  Object.keys(objConfig).forEach(key => {
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key]
    }
  })
  return isValid
}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required'
  }
}

class Form {
  @Required
  public email: string | void
  constructor(email?: string) {
    this.email = email;
  }
}
const form = new Form("Hello");
if (validate(form)) {
  console.log("Valid", form)
} else {
  console.log("Validation Error")
}