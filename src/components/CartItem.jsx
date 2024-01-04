import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromCartHandler = () => {
    dispatch(removeItem({ cartID }));
  };

  const changeAmountHandler = (event) => {
    dispatch(editItem({ cartID, amount: parseInt(event.target.value) }));
  };

  return (
    <article className="mt-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 last:border-b-0">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* Info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* company */}
        <h4 className="capitalize text-sm text-neutral-content">{company}</h4>
        {/* colors */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* Amount */}
        <div className="form-control max-w-xs">
          <div>
            <label htmlFor="amount" className="label p-0">
              <span className="label-text">Amount</span>
            </label>
            <select
              name="amount"
              id="amount"
              className="mt-2 select select-base select-bordered select-xs"
              value={amount}
              onChange={changeAmountHandler}
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </div>
        </div>
        {/*  */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCartHandler}
        >
          remove
        </button>
      </div>
      {/* price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
