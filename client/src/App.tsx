import React from "react";
import "./App.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Checkbox, TextField } from "@mui/material";

const GET_GROCERIES = gql`
  query {
    groceries {
      id
      title
      quantity
      bought
      category
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const ADD_ITEM = gql`
  mutation createGrocery($dto: CreateGroceryDto!) {
    createGrocery(dto: $dto) {
      id
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation updateGrocery($id: ID!, $dto: UpdateGroceryDto!) {
    updateGrocery(id: $id, dto: $dto) {
      id
    }
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header flex">
        {Groceries()}
        {AddGrocery()}
      </header>
    </div>
  );
}

function AddGrocery() {
  let input: any;
  const [addItem, { data, loading, error }] = useMutation(ADD_ITEM);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem({ variables: { dto: { title: input.value, quantity: 1 } } });
          input.value = "";
          window.location.reload();
        }}
      >
        <TextField inputRef={(node) => (input = node)} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

function Groceries() {
  const { loading, error, data } = useQuery(GET_GROCERIES);

  console.log(data);

  if (loading) return <p>Loading...</p>;

  if (!!data.groceries && data.groceries.length > 0) {
    return (
      <div>
        {data.groceries.map((grocery: any) => ControlledCheckbox(grocery))}
      </div>
    );
  } else {
    return <div>No groceries</div>;
  }
}

function ControlledCheckbox(groceryItem: any) {
  const [checked, setChecked] = React.useState(groceryItem.bought);
  const [updateItem] = useMutation(UPDATE_ITEM);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div id={groceryItem.id}>
      <Checkbox
        checked={checked}
        onChange={(event, checked) => {
          groceryItem({
            variables: {
              id: groceryItem.id,
              dto: { bought: checked },
            },
          });
          //window.location.reload();
        }}
      />
      <span>{groceryItem.title}</span>
    </div>
  );
}

export default App;
