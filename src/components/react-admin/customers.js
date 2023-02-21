// in src/components/react-admin/customers.js
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

const customerFilters = [
  <TextInput source="q" label="Search" alwaysOn />,

  <ReferenceInput source="user_id" label="User" reference="users" />

];

export const CustomerList = () => {
const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
return (
  <List filters={customerFilters} >
    {isSmall ? (
      <SimpleList
        primaryText="%{Nombre} %{Apellido} %{tlf}"
        secondaryText="%{ciudad} - %{pais}"
        linkType={(record) => (record.canEdit ? 'edit' : 'show')}
      >
        <EditButton />
      </SimpleList>
    ) : (

      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <ReferenceField source="user_id" reference="users" />

        <TextField source="Nombre" />
        <TextField source="Apellido" />
        <TextField source="tlf" />
        <TextField source="ciudad" />
        <TextField source="pais" />
        <EditButton />
      </Datagrid>
    )}
  </List>
);
}

const CustomerTitle = () => {
const record = useRecordContext();
return <span>Customer {record ? `"${record.Nombre} ${record.Apellido}"` : ''}</span>;
};

export const CustomerEdit = () => (
  <Edit title={<CustomerTitle />}>
  <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="user_id" reference="users" />

      <TextInput source="Nombre" />
      <TextInput source="Apellido" />
      <TextInput source="tlf" />
      <TextInput source="ciudad" />
      <TextInput source="pais" />
  </SimpleForm>
  </Edit>
);

export const CustomerCreate = () => (
  <Create>
      <SimpleForm>
        <ReferenceInput source="user_id" reference="users" />
        <TextInput source="Nombre" />
        <TextInput source="Apellido" />
        <TextInput source="tlf" />
        <TextInput source="ciudad" />
        <TextInput source="pais" />
      </SimpleForm>
  </Create>
  );
