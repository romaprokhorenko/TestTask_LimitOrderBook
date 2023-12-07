export interface IStocks {
  name: string;
}

export interface IOrders {
  id: number;
  stock_name: IStocks;
  order_type: string;
  price: number;
  quantity: number;
  time: string;
}

export interface IUser {
  username: string;
}

export interface ITransactions {
  id: number;
  stock_name: IStocks;
  buyer: IUser;
  seller: IUser;
  price: number;
  quantity: number;
}
