import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({item}) => {
    return (
        <section>
            <ShopItemHeader title={item.title} image={item.image} />
            <ShopItemDescription description={item.description} />
            <ShopItemPricing price={item.price} />
        </section>
    );
};

export default ShopItem;
