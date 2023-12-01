import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery} from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";

  const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  console.log("items", items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /*return (
  <div>Shopping List</div>
  );*/
  
   const pizzasItems = items.filter(
    (item) => item.attributes.category === "pizzas"
  );
  const bebidasItems = items.filter(
    (item) => item.attributes.category === "bebidas"
  );
  const postresItems = items.filter(
    (item) => item.attributes.category === "postres"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Nuestros <b>Productos</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap" 
          },
        }}
      >
        <Tab label="TODO" value="all" />
        <Tab label="BEBIDAS" value="bebidas" />
      <Tab label="POSTRES" value="postres" />
        <Tab label="PIZZAS" value="pizzas" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
       {value === "bebidas" &&
          bebidasItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "postres" &&
          postresItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))} 
        {value === "pizzas" &&
          pizzasItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;