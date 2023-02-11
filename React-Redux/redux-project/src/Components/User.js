import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addtocart, deletecart } from "../State/Action";
import { Action } from "../State/index";
import { useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const { addtocart, deletecart } = bindActionCreators(Action, dispatch);
  const products = useSelector((state) => state.count);

  return (
    <div>
      <h1>Buy shoes</h1>
      <div className="card">
        <div className="card-img">
          <img src="https://cdn.shopify.com/s/files/1/0607/6678/1671/products/STREET-RUN_11G-772_L.GRY_2.jpg?v=1670326499" alt="image" />
        </div>

        <div className="card-body">
          <button
            className="btn"
            onClick={() => {
              addtocart(1);
            }}
          >
            +
          </button>
          <h2>add to cart</h2>
          <button
            className="btn"
            onClick={() => {
              deletecart(1);
            }}
          >
            -
          </button>
        </div>
        <div>
            <h3> Total-items: {products} </h3>
          </div>
      </div>
    </div>
  );
};

export default User;
