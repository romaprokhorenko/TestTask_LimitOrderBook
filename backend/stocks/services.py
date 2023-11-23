from django.contrib.auth import get_user_model

from .models import Order, Stock

User = get_user_model()


def create_order(data):
    user = User.objects.get(username="admin")  # username=data["username"])
    stock = Stock.objects.get(name=data["stock_name"])
    Order.objects.create(
        stock_name=stock,
        user=user,
        order_type=data["order_type"],
        price=data["price"],
        quantity=data["quantity"]
    )
    return True
