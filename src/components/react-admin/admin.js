import { Admin, Resource } from 'react-admin';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
import { ProductList, ProductEdit, ProductCreate } from 'components/react-admin/products';

//TODO eliminar las dos lineas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import CustomerIcon from '@mui/icons-material/SupportAgent';
import ProductIcon from '@mui/icons-material/SupportAgent';
import UserIcon from '@mui/icons-material/Group';

import PostIcon from '@mui/icons-material/Book';
import MigrationIcon from '@mui/icons-material/Storage';

import { AdminLayout } from 'components/react-admin/adminLayout';

// import { ShoppingList} from 'components/react-admin/shoppings';
// import ShoppingIcon from '@mui/icons-material/Palette';

// para laravel Controllers
 import jsonapiClient from 'ra-jsonapi-client';

// para php-crud-api
//import jsonServerProvider from 'ra-data-json-server';

// para php-crud-api
// const dataProvider = jsonServerProvider(' http://encuentro.test/api/records');

// para laravel Controllers

const dataProvider = jsonapiClient('http://encuentro.test/api');

// <Resource name="shoppings" list={ShoppingList} icon={ShoppingIcon} />

const RAdmin = () => (
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    layout={AdminLayout}
  >

    <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
    <Resource name="products" list={ProductList} icon={ProductIcon} edit={ProductEdit} create={ProductCreate} />
    
    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
)

export default RAdmin;
