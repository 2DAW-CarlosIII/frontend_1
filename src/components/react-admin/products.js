// in src/components/react-admin/products.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
  } from 'react-admin';

  import { useRecordContext} from 'react-admin';
  import { useMediaQuery } from '@mui/material';

  const productFilters = [
    <TextInput source="q" label="Search" alwaysOn />,

    <ReferenceInput source="categoria" label="Category" reference="categories" />
  ];

  export const ProductList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
      <List filters={productFilters} >
        {isSmall ? (
          <SimpleList
            primaryText="%{nombre}"
            secondaryText="%{precio}"
            tertiaryText="%{imagen} - %{descripcion}"
            linkType={(record) => (record.canEdit ? 'edit' : 'show')}
          >
            <EditButton />
          </SimpleList>
        ) : (
    
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <ReferenceField source="categoria" reference="categories" />
            <TextField source="nombre" />
            <TextField source="precio" />
            <TextField source="imagen" />
            <TextField source="descripcion" />
            <EditButton />
          </Datagrid>
        )}
      </List>
    );
    }
    
    const ProductTitle = () => {
    const record = useRecordContext();
    return <span>Product {record ? `"${record.nombre}"` : ''}</span>;
    };
    
    export const ProductEdit = () => (
      <Edit title={<ProductTitle />}>
      <SimpleForm>
          <TextInput source="id" disabled />
          <TextInput source="nombre" />
          <TextInput source="precio" />
          <TextInput source="imagen" />
          <TextInput source="descripcion" />
      </SimpleForm>
      </Edit>
    );
    
    export const ProductCreate = () => (
      <Create>
          <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="precio" />
            <TextInput source="imagen" />
            <TextInput source="descripcion" />
          </SimpleForm>
      </Create>
      );