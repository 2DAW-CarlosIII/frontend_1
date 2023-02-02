// in src/components/react-admin/artworks.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput
  } from 'react-admin';

import { useRecordContext } from 'react-admin';

import { useMediaQuery } from '@mui/material';

const artworkFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const ArtworkList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={artworkFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.title}
          tertiaryText={(record) => record.title}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="title" />
        </Datagrid>
      )}
    </List>
  );
}