const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const client = order.name;
  const { phoneNumber } = order;
  const { street, number, apartment } = order.address;
  console.log(`Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const getItems = (order) => {
  let items = Object.keys(order.pizza);

  for (const drink of Object.keys(order.drinks)) {
    items.push(order.drinks[drink].type)
  }

  if (items.length > 1) items[items.length - 2] += ` e ${items.pop()}`;

  return items.join(', ');
}

const getOrderPrice = (order) => {
  let orderPrice = 0;

  for (const itemType of Object.keys(order)) {
    if (itemType !== 'delivery') {
      for (const item of Object.keys(order[itemType])) {
        orderPrice += order[itemType][item].price;
      }
    }
  }

  return orderPrice;
}

const orderModifier = (order) => {
  const client = order.name;
  const items = getItems(order.order);
  const orderPrice = getOrderPrice(order.order);
  console.log(`Olá ${client}, o total do seu pedido de ${items} é R$ ${orderPrice}.`);
}

orderModifier(order);
