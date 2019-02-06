import React from 'react';
import OrdersTable from './components/OrdersTable';

import CurrentOrder from './components/CurrentOrder';

import Modal from '../../../Modal/Modal';
import Spiner from '../../../Spiner/Spiner';

const OrderHistoryView = ({
  orders,
  currentOrder,
  isOpenModalShowOrder,
  isLoading,
  onCloseModalShowOrder,
  onShowOrder,
  error,
}) => (
  <>
    {error && <p>{error.text}</p>}
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

      <OrdersTable orders={orders} onShowOrder={onShowOrder} />
    </div>
  </>
);

export default OrderHistoryView;
