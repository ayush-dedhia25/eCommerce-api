### E-Commerce Site Plan
-----
#### About This File
This is an E-commerce website design planning file. Here all the design is documented and followed precisely by every developer who is in this team!

-----
#### Lets start the plan!!!
Lets Configure the MongoDB database with the configuration required for this project.

##### Mongoose collections required in this project
- Users Collection
- Products Collection
- User's_Cart Collection

-------

#### Definition of Each Collection
**Users Collection:** This collection will hold all the sensitive information of the User such as:
- User ID
- User's Name
- User's Email
- User's Password
- User's DOB
- User's Mobile_No
- User's Cart
  - Cart Items/Products
  - Cart isEmpty

**Products Collection:** This collection will hold all the information of the product such as:
- Product's ID
- Product's Name
- Product's Price
- Product's Variant
- Product's MFG_Date
- Product's EXP_Date
- Product's Quantity
- Product's Base_Type
-------

### Endpoints To Hit 🔥
#### User Endpoints
###### › To Login The User
```
URL: '/api/user/login'
Method: 'POST'
Data: {
   'email': <user_email>, 
   'password': <user_password>
}
Returns: <Response Object>
```

###### › To Register The New User
 ```
URL: '/api/user/register'
Method: 'POST'
Data: {
   'name': <user_name>,
   'email': <user_email>,
   'password': <user_password>,
   'dob': <Date_of_Birth>
}
Returns: <Response Object>
```

###### › To Update The User
 ```
URL: '/api/user/update/<user_id>'
Method: 'PUT'
Returns: <Response Object>
```

###### › To Delete The User
 ```
URL: '/api/user/delete/<user_id>'
Method: 'DELETE'
Returns: <Response Object>
```
<br/>

#### Product Endpoints
###### › To A Get Single Product
```
URL: '/api/product/<product_name>'
Method: 'GET'
Returns: <Product Object>
```

###### › To Get Every Products Available In The Shop
```
URL: '/api/product/all'
Method: 'GET'
Returns: []<Product Object>
```

###### › To Update A Product
```
URL: '/api/product/<product_id>'
Method: 'PUT'
Returns: <Response Object>
```

###### › To Add A New Product In The Shop
```
URL: '/api/product/newProduct'
Method: 'POST'
Data: {
   'name': <product_name>,
   'price': <product_price>,
   'variant': <product_variant>,
   'mfg_date': <product_mfgDate>,
   'exp_date': <product_expDate>,
   'quantity': <product_totalCount>,
   'type': <product_baseType>
}
Returns: <Response Object>
```

###### › To Get Products Based On Type
```
URL: '/api/product/category?type=<baseType>'
Method: 'GET'
Returns: []<Product Object>
```
-----

### 👨‍💻 Technical Details
##### 🌟 Libraries Required
- Express
- Cors
- MongoDB's Mongoose ORM
- Dotenv
- Axios
-----

### 🖥️ Programming Terms
##### 💿 Interfaces Required -
- User Interface
- Product Interface

##### 💿 Interface Definitions -
###### User Interface
```
interface IUser {
  name: string;
  email: string;
  password: string;
  dob: any;
  mobileNo: number;
  cart: CartType;
}
```

###### Product Interface
```
interface IProduct {
  id: number;
  name: string;
  price: string;
  variant: string;
  mfg_date: string;
  exp_date: string;
  type: AvailableTypes;
}
```

##### 💿 Available Types
```
type CartType = {
  items: IProduct[],
  isEmpty: boolean
}

type OilTypes = 'EdibleOil' | 'HairOil';

type AvailableTypes = 'Flours' | 'Biscuits' | OilTypes | 'ToothCare' | 'Drinks' | 'Chocolate';
```
-----

### *️⃣ Database Schemas
##### ⚡ User's Schema
```
UserSchema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  mobileNo: {
    type: Number,
    required: true
  },
  cart: {
    items: {
      type: [ProductSchema],
      default: []
    },
    isEmpty: {
      type: Boolean,
      default: true
    }
  }
}
```

##### ⚡ Product's Schema
```
ProductSchema = {
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  variant: {
    type: String,
    required: true
  },
  mfgDate: {
    type: Date,
    required: true
  },
  expDate: {
    type: Date,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}
```