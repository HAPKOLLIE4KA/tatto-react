import React, { FC, useState } from "react";
import { minishopData } from "../../data/minishopData";
import { minishopItem } from "../../types/minishop";
import styles from "./Catalog.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import ShopItem from "../ShopItem/ShopItem";
const MiniShop: FC = () => {
  const [items, setItems] = useState<minishopItem[]>(minishopData);
  return (
    <div className={styles.catalogContainer}>
      <MiniShopHeader />
      <div className={styles.catalogItems}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
      <MiniShopFooter />
    </div>
  );
};

export default MiniShop;
