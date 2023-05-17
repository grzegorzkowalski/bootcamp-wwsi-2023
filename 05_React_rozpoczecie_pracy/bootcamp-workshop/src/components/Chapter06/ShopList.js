import ShopItemHeader from "./ShopItemHeader";

const ShopList = ({items}) => {
    return (
        <div>
            {
                items.map((el, i) => <ShopItemHeader key={i} title={el.title} image={el.image} /> )
            }
        </div>
    );
};

export default ShopList;
