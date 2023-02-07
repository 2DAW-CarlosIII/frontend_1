import { Admin, Resource } from 'react-admin';
import { useState } from 'react';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
//import { ProductList, ProductEdit, ProductCreate } from 'components/react-admin/products';

import { ArtworkList} from 'components/react-admin/artworks';
import ArtworkIcon from '@mui/icons-material/Palette';

//TODO eliminar las dos lineas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import CustomerIcon from '@mui/icons-material/SupportAgent';
//import ProductIcon from '@mui/icons-material/SupportAgent';
import UserIcon from '@mui/icons-material/Group';

import PostIcon from '@mui/icons-material/Book';
import MigrationIcon from '@mui/icons-material/Storage';

// import { ShoppingList} from 'components/react-admin/shoppings';
// import ShoppingIcon from '@mui/icons-material/Palette';

// para laravel Controllers
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login';

// para php-crud-api
// const dataProvider = jsonServerProvider(' http://encuentro.test/api/records');

// para laravel Controllers

const dataProvider = jsonapiClient('http://encuentro.test/api');

// <Resource name="shoppings" list={ShoppingList} icon={ShoppingIcon} />

const RAdmin = () => {
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }

  let token = localStorage.getItem('auth')
  let settings = null
  if (token) {
    token = JSON.parse(localStorage.getItem('auth'))
      settings = {
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }

// <Resource name="products" list={ProductList} icon={ProductIcon} edit={ProductEdit} create={ProductCreate} />

  const myLogin = <Login handleDataProvider={handleDataProvider} />

  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
  }

  return(
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    authProvider={AuthProvider}
    loginPage={myLogin}
  >

    <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />

    <Resource name="artworks" list={ArtworkList} icon={ArtworkIcon} />

    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
  )
}

export default RAdmin;
