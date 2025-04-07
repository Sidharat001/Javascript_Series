let user1 = {
    name: "karthik",
    phone: 1234567890,
    email: "karthiktest@gmail.com",
    age: 23,
    address: {
        city: "Jaipur",
        state: "Rajasthan",
        country: "India"
    }
}


// Proxy is used to create a proxy object that can intercept and redefine operations for the target object.
const userProxy = new Proxy(user1, {
    get (target, prop, reciver) {
        // console.log({target, prop, reciver}); // for debugging purpose target is the original object, prop is the property being accessed, and reciver is the proxy object itself.
        if(prop === 'phone') {
            return `+91-${target.phone.toString().slice(0, 3)}-xxxxxx${target.phone.toString().slice(6)}`;
        }
        if(prop === 'email') {
            let email = target.email.split('@').map((item) => item.split('.')).flat(1);
            return `xxxxxx@${email[1]}.${email[2]}`;
        }

        // return target[prop]; // This is the default behavior which hanlde by programmer if we don't want to use Reflect.
        return Reflect.get(target, prop, reciver); // Reflect is a built-in object that provides methods for interceptable JavaScript operations. It is used to perform the default behavior of the operation.
    },
    
    set(obj, prop, value) {
        switch (prop) {
            case 'phone':
                if (typeof value !== 'number' || value.toString().length !== 10) {
                    throw new Error('Phone number must be a 10 digit number');
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    throw new Error('Invalid email format');
                }
                break;
            case 'age':
                if (value < 0 || value > 120) {
                    throw new Error('Age must be between 0 and 120');
                }
                break;
            default:
                break;
        }

        // obj[prop] = value; // This is the default behavior which hanlde by programmer if we don't want to use Reflect.
        if(prop === 'phone' || prop === 'email') {
            return new Error(`Cannot set ${prop} directly`); // Prevent direct setting of phone and email properties
        }

        return Reflect.set(obj, prop, value); // Reflect is a built-in object that provides methods for interceptable JavaScript operations. It is used to perform the default behavior of the operation.
    }
});

userProxy.name = 'Karthik Jaiswal'; // Update name
userProxy.phone = 8987654321; // 10 digit number and not set directly
userProxy.email = 'test@gmail.com'; // cannot set directly 
userProxy.address.city = 'Delhi'; // Update city
userProxy.address.state = 'New Delhi'; // Update state
userProxy.address.country = 'India'; // Update country
userProxy.age = 40;
console.log(userProxy);