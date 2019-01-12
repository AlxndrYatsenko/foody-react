import React from 'react';
import OrdersTable from './components/OrdersTable';

import CurrentOrder from './components/CurrentOrder';
import AddOrderForm from '../AddOrder/AddOrderComponent';

import s from './OrderHistory.module.css';
import Modal from '../../../Modal/Modal';
import Spiner from '../../../Spiner/Spiner';

const OrderHistoryView = ({
  orders,
  currentOrder,
  isOpenModalShowOrder,
  isLoading,
  isOpenModalAddOrder,
  onCloseModalShowOrder,
  onOpenModalAddOrder,
  onCloseModalAddOrder,
  onAddOrder,
  onDeleteOrder,
  onShowOrder,
}) => (
  <div className="orderHistoryWrap">
    {isLoading ? (
      <Spiner />
    ) : (
      isOpenModalShowOrder && (
        <Modal onClose={onCloseModalShowOrder}>
          <CurrentOrder
            currentOrder={currentOrder}
            closeModalShowOrder={onCloseModalShowOrder}
          />
        </Modal>
      )
    )}
    <button
      className={s.createOrder}
      type="button"
      onClick={onOpenModalAddOrder}
    >
      Создать заказ
    </button>
    <br />
    {isOpenModalAddOrder && (
      <Modal onClose={onCloseModalAddOrder}>
        <AddOrderForm onAddOrder={onAddOrder} onClose={onCloseModalAddOrder} />
      </Modal>
    )}
    <OrdersTable
      orders={orders}
      onDelete={onDeleteOrder}
      onShowOrder={onShowOrder}
    />
  </div>
);

export default OrderHistoryView;
