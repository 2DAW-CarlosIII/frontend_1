// in src/components/react-admin/categories.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput
  } from 'react-admin';
  
  import { useRecordContext} from 'react-admin';
  import { useMediaQuery } from '@mui/material';
  
  const categoryFilters = [
    <TextInput source="q" label="Search" alwaysOn />
  ];
  
  export const CategoryList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={categoryFilters} >
      {isSmall ? (
        <SimpleList
          primaryText="%{name}"
          linkType={(record) => (record.canEdit ? 'edit' : 'show')}
        >
          <EditButton />
        </SimpleList>
      ) : (
  
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
  }
  
  const CategoryTitle = () => {
  const record = useRecordContext();
  return <span>Category {record ? `"${record.name}"` : ''}</span>;
  };
  
  export const CategoryEdit = () => (
    <Edit title={<CategoryTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
    </SimpleForm>
    </Edit>
  );
  
  export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
    </Create>
    );